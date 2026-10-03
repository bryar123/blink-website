import { readFile, readdir, copyFile, mkdir, rm, lstat, stat } from 'node:fs/promises';
import path from 'node:path';
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
console.log(`Cloudflare Pages: ${entries.length} files in dist; largest ${(Math.max(...entries.map(e=>e.size))/1024/1024).toFixed(2)} MiB. Original media preserved.`);
