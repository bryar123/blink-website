import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import featured from '../assets/experience/selection.json';
import catalog from '../assets/portfolio.json';

gsap.registerPlugin(ScrollTrigger);
const $=id=>document.getElementById(id);
const html=document.documentElement,scroller=$('scroller'),root=$('exhibition');
const mobileQuery=matchMedia('(max-width: 767px)');
const saver=Boolean(navigator.connection?.saveData);
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),lerp=THREE.MathUtils.lerp;
const featuredIds=new Set(featured.map(p=>p.id));
const allProjects=[...featured.map(p=>catalog.projects.find(item=>item.id===p.id)).filter(Boolean),...catalog.projects.filter(p=>!featuredIds.has(p.id))];
let selection=allProjects,filter='all';
// The exhibition starts on. Only a visitor's deliberate choice overrides that default.
let reduced=false,initialized=false,trigger=null;
try{reduced=localStorage.getItem('blink-exhibition-motion')==='off';}catch{}
let lang=html.lang==='ckb'?'ku':html.lang;
let pointer=new THREE.Vector2(),smoothPointer=new THREE.Vector2();
let raf=0,previousTime=0,surfaces=[],exhibitProgress=0,currentProject=0;
const copy={
 en:{'exhibit.kicker':'A different perspective','exhibit.title':'Step inside<br>the work.','exhibit.skip':'View the grid ↗','exhibit.gesture':'Scroll to explore · Swipe or drag sideways','motion.off':'Reduce motion','motion.on':'Enable motion',all:'All work',film:'Films',poster:'Posters',jump:'Jump to a work',filters:'Choose a work format',prev:'Previous work',next:'Next work'},
 ku:{'exhibit.kicker':'لە ڕوانگەیەکی جیاوازەوە','exhibit.title':'بچۆ ناو<br>جیهانی کارەکان.','exhibit.skip':'کارەکان بە تۆڕ ببینە ↗','exhibit.gesture':'بۆ گەڕان بجووڵێنە · بەرەو لاکان ڕایبکێشە','motion.off':'جووڵە کەم بکەوە','motion.on':'جووڵە چالاک بکە',all:'هەموو کارەکان',film:'فیلمەکان',poster:'پۆستەرەکان',jump:'کارێک هەڵبژێرە',filters:'جۆری کار هەڵبژێرە',prev:'کاری پێشوو',next:'کاری دواتر'},
 ar:{'exhibit.kicker':'من منظور مختلف','exhibit.title':'ادخل إلى<br>عالم الأعمال.','exhibit.skip':'عرض شبكة الأعمال ↗','exhibit.gesture':'مرّر للاستكشاف · اسحب جانبياً','motion.off':'تقليل الحركة','motion.on':'تفعيل الحركة',all:'كل الأعمال',film:'الأفلام',poster:'الملصقات',jump:'انتقل إلى عمل',filters:'اختر نوع العمل',prev:'العمل السابق',next:'العمل التالي'}
};
const text=key=>(copy[lang]||copy.en)[key]||copy.en[key];
const direction=()=>html.dir==='rtl'?-1:1;
function translate(){
 root.querySelectorAll('[data-exp-i18n]').forEach(el=>el.innerHTML=text(el.dataset.expI18n));
 $('exhibitPrev').setAttribute('aria-label',text('prev'));$('exhibitNext').setAttribute('aria-label',text('next'));
 $('exhibitMotion').textContent=text(reduced?'motion.on':'motion.off');
 $('exhibitFilters').setAttribute('aria-label',text('filters'));
 $('exhibitJump').setAttribute('aria-label',text('jump'));
 $('exhibitFilters').querySelectorAll('button').forEach(button=>{const key=button.dataset.exhibitFilter,count=allProjects.filter(p=>key==='all'||(key==='film'?p.video:!p.video)).length;button.textContent=`${text(key)} ${count}`;});
 requestRefresh();wake();
}
addEventListener('blink:language',event=>{lang=event.detail;translate();});
function openProject(id,button){dispatchEvent(new CustomEvent('blink:open-project',{detail:{id,trigger:button}}));}
root.querySelectorAll('[data-exhibit]').forEach(link=>link.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();openProject(link.dataset.exhibit,link);}));
let refreshTimer=0;
function requestRefresh(){clearTimeout(refreshTimer);refreshTimer=setTimeout(()=>{ScrollTrigger.refresh();surfaces.forEach(s=>s.measureFrame?.());dispatchEvent(new Event('blink:layout'));wake();},100);}
function wake(){if(!raf&&!document.hidden)raf=requestAnimationFrame(tick);}
function tick(time){
 raf=0;if(document.hidden||$('viewer').open)return;
 const dt=Math.min((time-previousTime)/1000||.016,.05);previousTime=time;
 smoothPointer.lerp(pointer,1-Math.exp(-dt*7));let animate=false;
 for(const surface of surfaces){if(!surface.visible||surface.failed||reduced)continue;surface.update(time/1000,dt);surface.renderer.render(surface.scene,surface.camera);animate||=surface.animate||smoothPointer.distanceTo(pointer)>.001;}
 if(animate)raf=requestAnimationFrame(tick);
}
addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;pointer.set((e.clientX/innerWidth-.5)*2,-(e.clientY/innerHeight-.5)*2);if(!reduced)wake();},{passive:true});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;surfaces.forEach(s=>s.pauseMedia?.());}else{surfaces.filter(s=>s.visible).forEach(s=>s.onVisible?.());wake();}});
new MutationObserver(()=>{if($('viewer').open){cancelAnimationFrame(raf);raf=0;surfaces.forEach(s=>s.pauseMedia?.());}else{surfaces.filter(s=>s.visible).forEach(s=>s.onVisible?.());wake();}}).observe($('viewer'),{attributes:true,attributeFilter:['open']});

class Surface{
 constructor(container,root,update){
  this.container=container;this.root=root;this.update=update;this.visible=false;this.animate=false;this.failed=false;
  this.renderer=new THREE.WebGLRenderer({alpha:true,antialias:!mobileQuery.matches,powerPreference:'low-power',preserveDrawingBuffer:false});
  this.renderer.setPixelRatio(Math.min(devicePixelRatio,mobileQuery.matches?1.25:1.6));
  this.renderer.setClearColor(0,0);this.renderer.outputColorSpace=THREE.SRGBColorSpace;
  this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.25;
  this.camera=new THREE.PerspectiveCamera(42,1,.08,80);
  this.scene=new THREE.Scene();
  container.append(this.renderer.domElement);
  this.renderer.domElement.setAttribute('aria-hidden','true');
  this.resize=()=>{const w=container.clientWidth,h=container.clientHeight;if(!w||!h)return;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.onResize?.(w,h);wake();};
  this.ro=new ResizeObserver(this.resize);this.ro.observe(container);
  this.io=new IntersectionObserver(entries=>{this.visible=entries[0].isIntersecting;if(this.visible){this.onVisible?.();wake();}else this.pauseMedia?.();},{root:scroller,rootMargin:'120px',threshold:0});this.io.observe(container);
  this.renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();this.failed=true;root.classList.remove('has-webgl');this.pauseMedia?.();setupScroll();});
  this.renderer.domElement.addEventListener('webglcontextrestored',()=>{this.failed=false;root.classList.add('has-webgl');setupScroll();wake();});
  this.resize();surfaces.push(this);root.classList.add('has-webgl');
 }

 dispose(){
  this.ro.disconnect();this.io.disconnect();
  this.pauseMedia?.();this.video?.removeAttribute('src');this.video?.load();
  this.scene.traverse(object=>{object.geometry?.dispose();const mats=Array.isArray(object.material)?object.material:[object.material];mats.forEach(mat=>{if(!mat)return;mat.map?.dispose();mat.dispose();});});
  this.environmentTarget?.dispose();this.renderer.dispose();this.renderer.domElement.remove();
 }
}
function material(color,roughness=.45,metalness=0){return new THREE.MeshStandardMaterial({color,roughness,metalness});}
function mesh(geometry,mat,parent,position=[0,0,0],scale=[1,1,1]){const m=new THREE.Mesh(geometry,mat);m.position.set(...position);m.scale.set(...scale);parent.add(m);return m;}

let exhibitSurface,exhibitAngle=0,exhibitTarget=0;
function setExhibitProgress(value){
 exhibitProgress=clamp(value);exhibitTarget=exhibitProgress*(selection.length-1)*.58;
 const index=Math.round(exhibitProgress*(selection.length-1));
 if(index!==currentProject||!$('exhibitCategory').textContent){
  currentProject=index;const p=selection[index];$('exhibitCategory').textContent=p.category;
  $('exhibitOpen').textContent=p.title+' ↗';$('exhibitPosition').textContent=`${index+1} / ${selection.length}`;
  $('exhibitPrev').disabled=index===0;$('exhibitNext').disabled=index===selection.length-1;
  $('exhibitJump').value=String(index);
  exhibitSurface?.queueVideo?.();
 }
 $('exhibition').style.setProperty('--exhibit-progress',exhibitProgress);wake();
}
function buildExhibition(){
 const root=$('exhibition'),surface=new Surface($('exhibitionWorld'),root,()=>{});exhibitSurface=surface;
 surface.camera.fov=48;surface.camera.updateProjectionMatrix();surface.scene.background=new THREE.Color(0x101316);surface.scene.fog=new THREE.Fog(0x101316,12,30);
 const lit=new THREE.HemisphereLight(0xc4ddff,0x131918,2.5);surface.scene.add(lit);
 const floor=mesh(new THREE.CircleGeometry(17,80),material(0x161e24,.85,.25),surface.scene,[0,-2.2,0]);floor.rotation.x=-Math.PI/2;
 const loader=new THREE.TextureLoader(),cards=[],posters=new Map();
 const cardMaterial=material(0x4d5965,.38,.55);
 // Recycle seven screens around the current work. A forty-screen circle would overlap itself.
 for(let i=0;i<7;i++){
  const group=new THREE.Group();surface.scene.add(group);
  const frame=mesh(new THREE.BoxGeometry(1,1,.055),cardMaterial,group,[0,0,-.04]);
  const screen=mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({color:0x34414b}),group);
  const reflection=mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({color:0x607581,transparent:true,opacity:.08}),group);
  cards.push({group,frame,screen,reflection,index:-1});
 }
 function applyMap(mat,map){if(mat.map===map)return;mat.map=map;mat.color.set(map?0xffffff:0x34414b);mat.needsUpdate=true;}
 function loadNearby(){
  if(!surface.visible||reduced||surface.failed)return;
  const center=Math.round(exhibitAngle/.58),nearby=new Set();
  for(let i=Math.max(0,center-4);i<=Math.min(selection.length-1,center+4);i++)nearby.add(selection[i].id);
  for(const [id,item] of posters){if(!nearby.has(id)){item.texture?.dispose();posters.delete(id);}}
  for(let i=Math.max(0,center-4);i<=Math.min(selection.length-1,center+4);i++){
   const p=selection[i];if(posters.has(p.id))continue;
   const item={texture:null};posters.set(p.id,item);
   loader.load(p.thumbnail,texture=>{
    if(posters.get(p.id)!==item){texture.dispose();return;}
    texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(4,surface.renderer.capabilities.getMaxAnisotropy());item.texture=texture;wake();
   },undefined,()=>wake());
  }
 }
 surface.onVisible=()=>{loadNearby();surface.queueVideo();};
 const video=document.createElement('video');video.muted=true;video.defaultMuted=true;video.playsInline=true;video.loop=true;video.preload='none';surface.video=video;
 let videoIndex=-1,videoTexture=null,videoTimer=0;
 function resetVideo(){video.pause();for(const card of cards){if(card.screen.material.map===videoTexture)applyMap(card.screen.material,posters.get(selection[card.index]?.id)?.texture||null);}videoTexture?.dispose();videoTexture=null;videoIndex=-1;}
 surface.pauseMedia=()=>{clearTimeout(videoTimer);resetVideo();video.removeAttribute('src');video.load();};
 surface.resetCatalog=()=>{surface.pauseMedia();posters.forEach(item=>item.texture?.dispose());posters.clear();exhibitAngle=0;cards.forEach(card=>{card.index=-1;card.group.visible=false;});};
 surface.queueVideo=()=>{
  clearTimeout(videoTimer);if(!surface.visible||reduced||saver||document.hidden||surface.failed||$('viewer').open)return;
  videoTimer=setTimeout(()=>{
   const p=selection[currentProject];if(!p.video){resetVideo();surface.animate=false;wake();return;}
   if(videoIndex===currentProject&&videoTexture){video.play().catch(()=>{});wake();return;}
   resetVideo();videoIndex=currentProject;video.src=p.preview;video.load();
  },180);
 };
 video.addEventListener('loadeddata',()=>{if(!surface.visible||reduced||document.hidden||videoIndex!==currentProject||$('viewer').open)return;videoTexture?.dispose();videoTexture=new THREE.VideoTexture(video);videoTexture.colorSpace=THREE.SRGBColorSpace;video.play().then(wake).catch(wake);});
 video.addEventListener('error',()=>{resetVideo();videoIndex=-1;wake();});
 const raycaster=new THREE.Raycaster(),mouse=new THREE.Vector2();
 function tap(e){
  const rect=surface.container.getBoundingClientRect();mouse.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
  raycaster.setFromCamera(mouse,surface.camera);const hit=raycaster.intersectObjects(cards.filter(card=>card.group.visible).map(card=>card.screen))[0];
  if(hit)openProject(selection[hit.object.userData.index].id,$('exhibitOpen'));
 }
 installDrag(surface.container,tap);
 let frameHeight=400,frameOffset=0;
 surface.measureFrame=()=>{
  const bounds=surface.container.getBoundingClientRect(),heading=root.querySelector('.exhibition-heading').getBoundingClientRect(),browse=root.querySelector('.exhibit-browse').getBoundingClientRect();
  const gesture=root.querySelector('.exhibit-gesture'),bottom=(getComputedStyle(gesture).display==='none'?root.querySelector('.exhibition-bottom'):gesture).getBoundingClientRect();
  const top=(innerHeight<=520?heading.bottom:Math.max(heading.bottom,browse.bottom))-bounds.top+16,end=bottom.top-bounds.top-20;
  frameHeight=Math.max(70,end-top);frameOffset=(top+end)/2-bounds.height/2;wake();
 };
 surface.onResize=surface.measureFrame;surface.measureFrame();
 let loadedCenter=-1;
 surface.update=(time,dt)=>{
  exhibitAngle=reduced?exhibitTarget:lerp(exhibitAngle,exhibitTarget,1-Math.exp(-dt*8));
  surface.animate=Math.abs(exhibitAngle-exhibitTarget)>.001||!video.paused;
  const center=Math.round(exhibitAngle/.58),dir=direction();
  const fov=mobileQuery.matches?(innerHeight<760?68:58):(innerHeight<760?56:48);
  const pixelsPerUnit=surface.container.clientHeight/(2*Math.tan(THREE.MathUtils.degToRad(fov/2))*6.2);
  if(center!==loadedCenter){loadNearby();loadedCenter=center;}
  cards.forEach((card,slot)=>{
   const index=center+slot-3,p=selection[index];card.group.visible=Boolean(p);if(!p)return;
   if(card.index!==index){
    card.index=index;card.screen.userData.index=index;
    const aspect=p.width/p.height,w=aspect>1?4.4:2.25,h=w/aspect;
    card.frame.scale.set(w+.07,h+.07,1);card.screen.scale.set(w,h,1);card.reflection.scale.set(w,-h,1);card.reflection.position.set(0,-h-.14,-.01);
   }
   const angle=(index*.58-exhibitAngle)*dir;card.group.position.set(Math.sin(angle)*8,-.12,-Math.cos(angle)*8);card.group.rotation.y=-angle;
   card.group.scale.setScalar(Math.min(1,frameHeight/(card.screen.scale.y*pixelsPerUnit)));
   const poster=posters.get(p.id)?.texture||null;applyMap(card.screen.material,index===videoIndex&&videoTexture?videoTexture:poster);applyMap(card.reflection.material,poster);
  });
  surface.camera.position.set(0,.25+frameOffset/pixelsPerUnit+smoothPointer.y*.09,-1.8);
  surface.camera.lookAt(0,-.12+frameOffset/pixelsPerUnit,-8);
  surface.camera.fov=fov;surface.camera.updateProjectionMatrix();
 };
 setExhibitProgress(0);return surface;
}

function writeProgress(value){
 value=clamp(value);
 if(trigger&&!reduced){scroller.scrollTop=lerp(trigger.start,trigger.end,value);ScrollTrigger.update();}
 setExhibitProgress(value);
}
let navigation={progress:0};
function selectIndex(index){
 index=clamp(index,0,selection.length-1);const value=index/(selection.length-1),jump=Math.abs(index-currentProject)>3;
 gsap.killTweensOf(navigation);navigation.progress=exhibitProgress;
 // Long jumps go straight to the work instead of racing through the entire collection.
 if(jump)exhibitAngle=value*(selection.length-1)*.58;
 gsap.to(navigation,{progress:value,duration:reduced||jump?0:.35,ease:'power2.out',onUpdate:()=>writeProgress(navigation.progress)});
}
function populateJump(){
 $('exhibitJump').replaceChildren(...selection.map((p,index)=>{const option=document.createElement('option');option.value=String(index);option.textContent=`${String(index+1).padStart(2,'0')} — ${p.title}`;return option;}));
}
function selectFilter(value){
 if(filter===value)return;filter=value;gsap.killTweensOf(navigation);
 selection=allProjects.filter(p=>filter==='all'||(filter==='film'?p.video:!p.video));
 $('exhibitFilters').querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.exhibitFilter===filter)));
 const ids=new Set(selection.map(p=>p.id));root.querySelectorAll('[data-exhibit]').forEach(link=>link.hidden=!ids.has(link.dataset.exhibit));
 root.querySelector('.exhibit-fallback').scrollLeft=0;
 exhibitSurface?.resetCatalog?.();exhibitAngle=0;currentProject=-1;exhibitProgress=0;populateJump();setExhibitProgress(0);
 setupScroll();ScrollTrigger.refresh();writeProgress(0);exhibitSurface?.onVisible?.();
}
function installDrag(container,tap){
 let gesture=null;
 container.addEventListener('pointerdown',e=>{
  if(!e.isPrimary||e.button!==0||reduced)return;
  gsap.killTweensOf(navigation);
  gesture={id:e.pointerId,x:e.clientX,y:e.clientY,start:exhibitProgress,index:currentProject,axis:null,delta:0};
 });
 container.addEventListener('pointermove',e=>{
  if(!gesture||e.pointerId!==gesture.id)return;
  const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;
  if(!gesture.axis&&Math.hypot(dx,dy)>8){
   gesture.axis=Math.abs(dx)>Math.abs(dy)*1.15?'x':'y';
   if(gesture.axis==='x'){container.setPointerCapture(e.pointerId);container.classList.add('is-dragging');}
  }
  if(gesture.axis!=='x')return;
  if(e.cancelable)e.preventDefault();
  gesture.delta=-dx*direction();
  const distance=Math.max(180,Math.min(container.clientWidth*.7,600));
  writeProgress(gesture.start+gesture.delta/distance/(selection.length-1));
 },{passive:false});
 function finish(e,cancelled){
  if(!gesture||e.pointerId!==gesture.id)return;
  const previous=gesture;gesture=null;container.classList.remove('is-dragging');
  if(container.hasPointerCapture(e.pointerId))container.releasePointerCapture(e.pointerId);
  if(previous.axis==='x'){
   let index=Math.round(exhibitProgress*(selection.length-1));
   if(!cancelled&&Math.abs(previous.delta)>40&&index===previous.index)index+=Math.sign(previous.delta);
   selectIndex(index);
  }else if(!cancelled&&!previous.axis&&Math.hypot(e.clientX-previous.x,e.clientY-previous.y)<8)tap(e);
 }
 container.addEventListener('pointerup',e=>finish(e,false));
 container.addEventListener('pointercancel',e=>finish(e,true));
 // Touch initially captures the canvas. Ignore its bubbled loss when capture moves to this container.
 container.addEventListener('lostpointercapture',e=>{if(e.target===container)finish(e,true);});
 container.addEventListener('dragstart',e=>e.preventDefault());
 // A trackpad's horizontal gesture follows the same camera path; vertical wheels remain page scrolling.
 let wheelTimer=0;
 container.addEventListener('wheel',e=>{
  if(reduced||e.ctrlKey||Math.abs(e.deltaX)<=Math.abs(e.deltaY)||!e.deltaX)return;
  e.preventDefault();gsap.killTweensOf(navigation);
  const unit=e.deltaMode===1?20:e.deltaMode===2?container.clientWidth:1;
  writeProgress(exhibitProgress+e.deltaX*unit*direction()/Math.max(180,container.clientWidth*.7)/(selection.length-1));
  clearTimeout(wheelTimer);wheelTimer=setTimeout(()=>selectIndex(Math.round(exhibitProgress*(selection.length-1))),180);
 },{passive:false});
}
$('exhibitOpen').addEventListener('click',()=>openProject(selection[currentProject].id,$('exhibitOpen')));
$('exhibitPrev').addEventListener('click',()=>selectIndex(currentProject-1));
$('exhibitNext').addEventListener('click',()=>selectIndex(currentProject+1));
$('exhibitJump').addEventListener('change',event=>selectIndex(Number(event.target.value)));
$('exhibitFilters').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>selectFilter(button.dataset.exhibitFilter)));
$('exhibitOpen').addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();selectIndex(currentProject+(e.key==='ArrowRight'?1:-1)*direction());}});
function setupScroll(){
 trigger?.kill();trigger=null;
 root.style.setProperty('--exhibit-distance',`${(selection.length-1)*clamp(innerHeight*.25,200,260)}px`);
 root.classList.toggle('is-scrollable',!reduced&&root.classList.contains('has-webgl'));
 if(!reduced&&root.classList.contains('has-webgl'))trigger=ScrollTrigger.create({trigger:root,scroller,start:()=>`top top+=${$('mainNav').offsetHeight}`,end:'bottom bottom',onUpdate:self=>setExhibitProgress(self.progress)});
 else surfaces.forEach(s=>s.pauseMedia?.());
 requestRefresh();wake();
}
function initialize(){
 if(initialized)return;initialized=true;
 try{buildExhibition();}catch(error){console.warn('BLINK: showing ordinary exhibition links because WebGL is unavailable.',error.message);}
}
function updateMotion(){
 root.classList.toggle('is-reduced',reduced);translate();if(!reduced)initialize();setupScroll();
 if(!reduced)surfaces.filter(s=>s.visible).forEach(s=>s.onVisible?.());
}
$('exhibitMotion').addEventListener('click',()=>{reduced=!reduced;try{localStorage.setItem('blink-exhibition-motion',reduced?'off':'on');}catch{}updateMotion();scroller.scrollTop=root.offsetTop-$('mainNav').offsetHeight;});
mobileQuery.addEventListener('change',()=>{surfaces.forEach(s=>s.resize());setupScroll();});
addEventListener('pagehide',event=>{if(event.persisted)return;cancelAnimationFrame(raf);trigger?.kill();surfaces.forEach(s=>s.dispose());});
addEventListener('pageshow',requestRefresh);
populateJump();updateMotion();setExhibitProgress(0);
if(location.hash)requestAnimationFrame(()=>{const target=document.getElementById(location.hash.slice(1));if(target&&target.closest('#scroller'))scroller.scrollTop=target.offsetTop-$('mainNav').offsetHeight;});
document.fonts.ready.then(requestRefresh);
