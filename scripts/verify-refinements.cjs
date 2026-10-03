/* Browser integration checks. PLAYWRIGHT_PATH may point at a installed Playwright package. */
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const fs=require('node:fs');
const out='.codex-review/refinements';fs.mkdirSync(out,{recursive:true});
const base=process.env.BLINK_URL||'http://127.0.0.1:4174/dist/index.html';
const checks=[];function check(name,pass,detail){checks.push({name,pass:!!pass,detail});if(!pass)throw Error(name+' '+JSON.stringify(detail));}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function at(p,id){await p.evaluate(id=>{const s=document.getElementById('scroller'),el=document.getElementById(id);s.scrollTop=el.offsetTop-document.getElementById('mainNav').offsetHeight;},id);await p.waitForTimeout(180);}
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
 for(const [width,height] of [[320,740],[390,844],[768,1024],[1024,768],[1440,1000],[1920,1080],[844,390]]){
  const ctx=await browser.newContext({viewport:{width,height},isMobile:width<600,hasTouch:width<1100,deviceScaleFactor:width<600?2:1});
  const p=await ctx.newPage(),errors=[],bad=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)bad.push(r.url());});
  await p.goto(base);await p.waitForFunction(()=>document.querySelector('.hero-scene').currentTime>.15);
  check('Brand images decode '+width,await p.locator('.nav-logo img').evaluateAll(images=>images.every(img=>img.complete&&img.naturalWidth>0)));
  const hero=await p.locator('.hero-scene').evaluate(v=>({playing:!v.paused,muted:v.muted,inline:v.playsInline,w:v.videoWidth,error:v.error?.message,src:v.currentSrc}));
  check('Hero playback '+width+'x'+height,hero.playing&&hero.muted&&hero.inline&&!hero.error,hero);
  check('Hero delivery '+width,hero.w===(width<1024?1280:3840),hero);
  for(const lang of ['en','ku','ar']){
   await p.locator('[data-lang='+lang+']').evaluate(el=>el.click());
   for(const theme of ['light','dark']){
    if(await p.locator('html').getAttribute('data-theme')!==theme)await p.locator('#themeToggle').click();
    const nav=await p.locator('#mainNav').evaluate(el=>{
     const all=[...el.querySelectorAll('.nav-logo,.nav-right>a,.theme-toggle,.lang-btn')].filter(e=>e.getBoundingClientRect().width>0);
     const r=all.map(e=>{const b=e.getBoundingClientRect();return {x:b.x,right:b.right,y:b.y,bottom:b.bottom,height:b.height,label:e.id||e.className};}).sort((a,b)=>a.x-b.x);
     return {r,okay:r.every((b,i)=>b.x>=-1&&b.right<=innerWidth+1&&b.height>=44&&(!i||b.x>=r[i-1].right-1))};
    });check('Header '+[width,height,lang,theme],nav.okay,nav);
    for(const id of ['transformation','work','studio','contact']){
     await at(p,id);
     const layout=await p.evaluate(id=>{
      const root=document.getElementById(id),s=document.getElementById('scroller');
      const bad=[...root.querySelectorAll('h2,.sub,input,select,textarea,.cta,.comparison,.grid-density')].filter(e=>{const b=e.getBoundingClientRect();return b.width&& (b.left< -1||b.right>innerWidth+1);}).map(e=>e.id||e.className);
      return {bad,overflow:s.scrollWidth>s.clientWidth+1};
     },id);check('Layout '+[width,height,lang,theme,id],!layout.overflow&&!layout.bad.length,layout);
    }
   }
  }
  await p.locator('[data-lang=en]').evaluate(e=>e.click());
  await at(p,'transformation');await p.screenshot({path:out+'/'+width+'x'+height+'-comparison.png'});
  await p.locator('#comparisonRange').focus();
  for(let i=0;i<3;i++){
   const before=Number(await p.locator('#comparison').getAttribute('data-variant'));
   await p.keyboard.press('Home');await p.keyboard.press('End');
   await p.waitForFunction(expected=>document.getElementById('comparison').dataset.variant===String(expected),(before+1)%3);
   check('Next style hidden '+width+' '+i,await p.locator('#comparisonRange').inputValue()==='100');
   await p.keyboard.press('Home');
   check('Complete reveal '+width+' '+i,await p.locator('#comparisonRange').inputValue()==='0');
  }
  await at(p,'work');
  await p.locator('#gridDensity').focus();await p.keyboard.press('End');
  const dense=await p.locator('#work .grid').first().evaluate(e=>String(getComputedStyle(e).gridTemplateColumns.split(' ').length));
  check('Density changes '+width,Number(dense)>=2,dense);
  await p.keyboard.press('Home');check('Single-column choice '+width,await p.locator('#work .grid').first().evaluate(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length)===1);
  await p.locator('[data-filter=poster]').click();check('Poster filter '+width,Number(await p.locator('#workCount').textContent())===15);
  await p.locator('[data-filter=all]').click();check('45 works '+width,Number(await p.locator('#workCount').textContent())===45);
  await at(p,'exhibition');await p.waitForTimeout(900);
  check('WebGL '+width,await p.locator('#exhibition').evaluate(e=>e.classList.contains('has-webgl')));
  await p.locator('#exhibitNext').click();await p.waitForTimeout(1100);
  check('Carousel next '+width,(await p.locator('#exhibitPosition').textContent()).startsWith('2 /'));
  check('Background selected '+width,(await p.locator('.exhibit-ambience img.is-current').getAttribute('src')).includes('tiktak-superhero'));
  await p.screenshot({path:out+'/'+width+'x'+height+'-exhibition.png'});
  await p.locator('#exhibitSkip').click();await p.waitForTimeout(1000);
  check('Skip and focus '+width,await p.evaluate(()=>location.hash==='#transformation'&&document.activeElement.id==='transformation'&&Math.abs(document.getElementById('transformation').getBoundingClientRect().top-document.getElementById('mainNav').offsetHeight)<3));
  await p.locator('#work .project-open').first().click();await p.waitForFunction(()=>document.querySelector('#viewerStage video')?.currentTime>.1);
  await p.keyboard.press('Escape');check('Viewer restores focus '+width,await p.evaluate(()=>!document.getElementById('viewer').open&&document.activeElement.classList.contains('project-open')));
  check('No errors '+width,!errors.length&&!bad.length,{errors,bad});
  await ctx.close();
 }
 const p=await browser.newPage({viewport:{width:1440,height:1000}});
 await p.goto(base);await p.locator('#themeToggle').click();const selected=await p.locator('html').getAttribute('data-theme');
 await at(p,'work');await p.locator('#gridDensity').focus();await p.keyboard.press('End');await p.reload();
 check('Theme persistence',await p.locator('html').getAttribute('data-theme')===selected);
 check('Density persistence',await p.locator('#gridDensity').inputValue()==='5');
 await p.emulateMedia({reducedMotion:'reduce'});await at(p,'transformation');
 check('Reduced motion transition',await p.locator('.exhibit-ambience img').first().evaluate(el=>getComputedStyle(el).transitionDuration)==='0s');
 await p.close();
 // Simulate a browser denying autoplay and require the real fallback control to recover.
 const blocked=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await blocked.addInitScript(()=>{const original=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){if(this.classList.contains('hero-scene')&&!window.heroAllowed){this.autoplay=false;this.pause();return Promise.reject(new DOMException('Blocked','NotAllowedError'));}return original.call(this);};document.addEventListener('click',e=>{if(e.target.closest('#heroPlay'))window.heroAllowed=true;},true);});
 await blocked.goto(base);await blocked.locator('#heroPlay').waitFor({state:'visible'});await blocked.locator('#heroPlay').click();
 await blocked.waitForFunction(()=>document.querySelector('.hero-scene').currentTime>.1);check('Blocked mobile autoplay recovers',await blocked.locator('#heroPlay').isHidden());await blocked.close();
 }finally{await browser.close();fs.writeFileSync(out+'/checks.json',JSON.stringify(checks,null,2));}
 console.log('PASS '+checks.length+' browser checks');
})().catch(e=>{console.error(e);process.exitCode=1;});
