const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const fs=require('node:fs');const path=require('node:path');
const out='.codex-review/capabilities';fs.mkdirSync(out,{recursive:true});
const url=process.env.BLINK_URL||'http://127.0.0.1:4174/dist/index.html';
const results=[];function check(name,ok,detail){results.push({name,pass:!!ok,detail});if(!ok)throw Error(name+' '+JSON.stringify(detail));}
async function at(p,id){await p.evaluate(id=>{dispatchEvent(new Event('blink:page-navigation'));const s=document.getElementById('scroller');s.scrollTop=document.getElementById(id).offsetTop-document.getElementById('mainNav').offsetHeight;},id);await p.waitForTimeout(160);}
async function gridState(p){return p.evaluate(()=>{const g=document.getElementById('workGrid'),r=g.getBoundingClientRect(),cards=[...g.children].filter(c=>!c.hidden);return {width:r.width,columns:Number(document.getElementById('gridDensity').value),items:cards.map(c=>{const b=c.getBoundingClientRect(),m=c.querySelector('.project-media').getBoundingClientRect(),v=c.querySelector('.cover');return {id:c.dataset.project,x:b.x,y:b.y,w:b.width,h:b.height,aspect:m.width/m.height,source:Number(v.getAttribute('width'))/Number(v.getAttribute('height'))};})};});}
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});try{
const p=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);await p.waitForTimeout(500);
for(const width of [320,390,610,768,1024,1440,1920]){
 await p.setViewportSize({width,height:1000});await at(p,'work');
 const max=Number(await p.locator('#gridDensity').getAttribute('max'));
 for(let n=1;n<=max;n++){
  await p.locator('#gridDensity').evaluate((e,n)=>{e.value=n;e.dispatchEvent(new Event('input',{bubbles:true}));},n);await p.waitForTimeout(90);
  const g=await gridState(p),expected=(g.width-((width<600?12:16)*(n-1)))/n;
  check(`Every card including first films obeys density ${width}/${n}`,g.items.every(c=>Math.abs(c.w-expected)<1),g.items.slice(0,3));
  check(`Original framing ${width}/${n}`,g.items.every(c=>Math.abs(c.aspect/c.source-1)<.006));
  check(`No card overlap ${width}/${n}`,g.items.every((a,i)=>g.items.slice(i+1).every(b=>a.x+a.w<=b.x+1||b.x+b.w<=a.x+1||a.y+a.h<=b.y+1||b.y+b.h<=a.y+1)));
 }
 for(const lang of ['en','ku','ar']){
  await p.locator(`[data-lang=${lang}]`).evaluate(e=>e.click());
  for(const theme of ['light','dark']){
   await p.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);
   for(const id of ['vfx-lab','identity-lab','web-lab']){
    await at(p,id);
    const state=await p.locator('#'+id).evaluate(s=>({overflow:document.documentElement.scrollWidth>innerWidth+1||s.scrollWidth>s.clientWidth+1,empty:[...s.querySelectorAll('[data-cap]')].some(e=>!e.textContent.trim()),images:[...s.querySelectorAll('img')].filter(i=>i.offsetParent).every(i=>i.complete&&i.naturalWidth>0)}));
    check(`Responsive ${width}/${lang}/${theme}/${id}`,!state.overflow&&!state.empty&&state.images,state);
   }
  }
 }
}
await p.setViewportSize({width:1440,height:1000});await p.locator('[data-lang=en]').evaluate(e=>e.click());await p.evaluate(()=>document.documentElement.dataset.theme='light');
await at(p,'vfx-lab');const rect=await p.locator('.vfx-comparison').boundingBox();await p.mouse.move(rect.x+rect.width*.22,rect.y+rect.height*.5);await p.waitForTimeout(300);check('VFX hover works without click',Math.abs(Number(await p.locator('.compare-range').inputValue())-22)<2);
await p.mouse.move(5,80);await p.locator('.compare-range').focus();await p.keyboard.press('End');check('VFX keyboard full before',await p.locator('.compare-range').inputValue()==='100');await p.keyboard.press('Home');check('VFX keyboard full after',await p.locator('.compare-range').inputValue()==='0');await p.screenshot({path:out+'/vfx-desktop.png'});
await at(p,'identity-lab');await p.locator('#brand-tab-mark').click();check('Mark panel opens',await p.locator('#brand-mark').isVisible());await p.locator('.construction-toggle').click();check('Construction toggles',await p.locator('.construction-toggle').getAttribute('aria-pressed')==='true');await p.locator('#brand-tab-mark').focus();await p.keyboard.press('ArrowRight');check('Brand keyboard tabs',await p.locator('#brand-tab-system').getAttribute('aria-selected')==='true'&&await p.locator('#brand-system').isVisible());await p.locator('#brand-tab-application').click();await p.screenshot({path:out+'/identity-desktop.png'});
await at(p,'web-lab');await p.locator('[data-web-style=wire]').click();check('Wireframe works',await p.locator('#webViewport').getAttribute('data-style')==='wire'&&await p.locator('.demo-hero>img').evaluate(e=>getComputedStyle(e).visibility==='hidden'));await p.locator('[data-web-style=finished]').click();await p.locator('[data-web-size=mobile]').click();await p.waitForTimeout(400);check('Preview genuinely resizes',Math.abs((await p.locator('#webViewport').boundingBox()).width-340)<1);await p.locator('.demo-discover').click();check('Demo has working object details',await p.locator('#demoDetails').isVisible());await p.keyboard.press('Escape');check('Details return focus',await p.locator('.demo-discover').evaluate(e=>document.activeElement===e));await p.locator('.demo-menu').click();check('Demo menu opens',await p.locator('#demoMenu').isVisible());await p.locator('#demoMenu button').click();check('Demo navigation opens object',await p.locator('#demoDetails').isVisible());await p.locator('#demoClose').click();await p.locator('[data-web-size=desktop]').click();await p.waitForTimeout(400);await p.screenshot({path:out+'/web-desktop.png'});
await at(p,'work');await p.locator('#gridDensity').evaluate(e=>{e.value=4;e.dispatchEvent(new Event('input',{bubbles:true}));});await p.waitForTimeout(200);const before=await gridState(p);await p.locator('#showMore').click();const after=await gridState(p);check('Show more preserves earlier card positions',before.items.every((c,i)=>Math.abs(c.x-after.items[i].x)<1&&Math.abs((c.y-before.items[0].y)-(after.items[i].y-after.items[0].y))<1));
for(const filter of ['poster','film','vfx','all']){await p.locator(`[data-filter=${filter}]`).click();await p.waitForTimeout(100);const ids=await p.locator('#workGrid>.cell:visible').evaluateAll(es=>es.map(e=>({id:e.dataset.project,category:e.dataset.category})));check('Filter remains correct '+filter,ids.length>0&&ids.length<=12&&ids.every(i=>filter==='all'||i.category.split(' ').includes(filter)));}
await at(p,'work');await p.screenshot({path:out+'/grid-desktop.png'});
const axePath='.codex-review/final-audit/node_modules/axe-core/axe.min.js';if(fs.existsSync(axePath)){
 await p.addScriptTag({path:axePath});
 for(const theme of ['light','dark'])for(const id of ['vfx-lab','identity-lab','web-lab','work']){await p.evaluate(t=>document.documentElement.dataset.theme=t,theme);await at(p,id);const failures=await p.evaluate(async id=>(await axe.run(document.getElementById(id),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),id);check('WCAG '+theme+'/'+id,!failures.length,failures);}
}
check('No runtime errors',!errors.length,errors);await p.close();
const ctx=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const m=await ctx.newPage();await m.goto(url);await m.waitForTimeout(400);const cdp=await ctx.newCDPSession(m);
async function swipe(x1,y1,x2,y2){await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:x1,y:y1}]});for(let i=1;i<=12;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x1+(x2-x1)*i/12,y:y1+(y2-y1)*i/12}]});await m.waitForTimeout(16);}await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});}
await at(m,'vfx-lab');const r=await m.locator('.vfx-comparison').boundingBox();await swipe(r.x+r.width*.2,r.y+r.height*.5,r.x+r.width*.8,r.y+r.height*.5);check('VFX touch reveal',Math.abs(Number(await m.locator('.compare-range').inputValue())-80)<3);const scroll=await m.locator('#scroller').evaluate(e=>e.scrollTop);await swipe(180,r.y+r.height*.8,180,r.y-70);await m.waitForTimeout(400);check('VFX leaves vertical touch scroll native',await m.locator('#scroller').evaluate(e=>e.scrollTop)>scroll+60);
for(const id of ['vfx-lab','identity-lab','web-lab','work']){await at(m,id);await m.screenshot({path:out+'/'+id+'-mobile.png'});}
await ctx.close();
const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const plain=await nojs.newPage();await plain.goto(url);check('No-JS retains all 45 works and concept imagery',await plain.locator('.cell').count()===45&&await plain.locator('.capability-section img').count()===6);await nojs.close();
}finally{await browser.close();fs.writeFileSync(path.join(out,'checks.json'),JSON.stringify(results,null,2));}console.log('PASS '+results.length+' capability and portfolio checks');})().catch(e=>{console.error(e);process.exitCode=1;});
