import { readFile, readdir, copyFile, mkdir, rm, lstat, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'dist');
const limit=25*1024*1024;
const html=await readFile(path.join(root,'index.html'),'utf8');
const catalog=JSON.parse(await readFile(path.join(root,'assets/portfolio.json'),'utf8'));
const files=new Set(['index.html']);
for(const match of html.matchAll(/["'](assets\/[^"']+)["']/g))files.add(match[1]);
for(const project of [...catalog.projects,...catalog.studio,catalog.hero]){
 for(const key of ['full','preview','thumbnail','exhibitionPoster','exhibitionPreview'])if(project[key])files.add(project[key]);
}
// Files referenced by absolute URL (share image, 404 and privacy pages) are not caught by the scan above.
for(const file of ['assets/site/og-image.jpg','assets/site/brand-symbol.svg','assets/site/brand-favicon.svg','assets/site/brand-favicon.png'])files.add(file);
// Local fonts and library licenses travel with the website. Source artwork, build inputs and audit files do not.
for(const folder of ['assets/fonts','assets/experience']){
 for(const entry of await readdir(path.join(root,folder),{withFileTypes:true})){
  if(entry.isFile()&&!['.md','.json'].includes(path.extname(entry.name)))files.add(`${folder}/${entry.name}`);
 }
}
const entries=[];
for(const file of [...files].sort()){
 const source=path.resolve(root,file);
 if(!source.startsWith(root+path.sep))throw new Error(`Asset path escapes repository: ${file}`);
 const info=await stat(source);
 if(!info.isFile())throw new Error(`Not a file: ${file}`);
 if(info.size>limit)throw new Error(`Cloudflare Pages permits 25 MiB per file; optimize the served derivative: ${file}`);
 entries.push({file,source,size:info.size});
}
// Only this generated directory can be cleared; refuse a symlink before recursive removal.
if(path.relative(root,output)!=='dist')throw new Error('Invalid output directory');
const existing=await lstat(output).catch(error=>{if(error.code==='ENOENT')return null;throw error;});
if(existing?.isSymbolicLink())throw new Error('dist must not be a symbolic link');
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
for(const {file,source} of entries){
 const target=path.join(output,file);
 await mkdir(path.dirname(target),{recursive:true});
 await copyFile(source,target);
}
// /assets is cached for a day (+7 days stale), so stamp CSS/JS links with a content hash:
// every deploy that changes a file changes its URL, and returning visitors fetch it fresh.
const hashes=new Map(await Promise.all(entries.filter(e=>/\.(css|js)$/.test(e.file)).map(async e=>[e.file,createHash('sha1').update(await readFile(e.source)).digest('hex').slice(0,10)])));
const versioned=html.replace(/(href|src)="(assets\/[^"?]+\.(?:css|js))"/g,(m,attr,file)=>hashes.has(file)?`${attr}="${file}?v=${hashes.get(file)}"`:m);
await writeFile(path.join(output,'index.html'),versioned);
// Root files for Cloudflare Pages: 404 page, privacy page, robots, sitemap, headers and redirects.
for(const entry of await readdir(path.join(root,'public'),{withFileTypes:true})){
 if(entry.isFile())await copyFile(path.join(root,'public',entry.name),path.join(output,entry.name));
}
// Kurdish and Arabic get their own addresses for search engines; /ku/assets and /ar/assets are rewritten to /assets in _redirects.
const site='https://blink-website-1qs.pages.dev';
const languages={
 ku:{lang:'ckb',hreflang:'ku',locale:'ckb_IQ',title:'BLINK — ستۆدیۆی ڕیکلام لە سلێمانی',description:'BLINK — ستۆدیۆی ڕیکلام لە سلێمانی. فیلمی ڕیکلام، ئێفێکتی بینراو، وێنەی بەرهەم، جووڵە و کارەکتەر.'},
 ar:{lang:'ar',hreflang:'ar',locale:'ar_IQ',title:'BLINK — استوديو إعلانات في السليمانية',description:'BLINK — استوديو إعلانات في السليمانية. أفلام إعلانية ومؤثرات بصرية وتصوير منتجات وموشن وشخصيات.'}
};
const swap=(text,from,to)=>{if(!text.includes(from))throw new Error(`Language page: cannot find ${from}`);return text.replace(from,to);};
for(const [code,meta] of Object.entries(languages)){
 let page=versioned;
 page=swap(page,'<html lang="en">',`<html lang="${meta.lang}" dir="rtl">`);
 page=page.replace(/<title>[^<]*<\/title>/,`<title>${meta.title}</title>`);
 page=page.replace(/<meta name="description" content="[^"]*" \/>/,`<meta name="description" content="${meta.description}" />`);
 page=page.replace(/<meta property="og:(title|description)" content="[^"]*" \/>/g,(m,key)=>`<meta property="og:${key}" content="${key==='title'?meta.title:meta.description}" />`);
 page=swap(page,`<link rel="canonical" href="${site}/" />`,`<link rel="canonical" href="${site}/${code}/" />`);
 page=swap(page,`<meta property="og:url" content="${site}/" />`,`<meta property="og:url" content="${site}/${code}/" />`);
 page=swap(page,'<meta property="og:locale" content="en_US" />',`<meta property="og:locale" content="${meta.locale}" />`);
 await mkdir(path.join(output,code),{recursive:true});
 await writeFile(path.join(output,code,'index.html'),page);
}
console.log(`Cloudflare Pages: ${entries.length} files in dist; largest ${(Math.max(...entries.map(e=>e.size))/1024/1024).toFixed(2)} MiB. Original media preserved.`);
