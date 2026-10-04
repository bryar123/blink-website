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
const selection=allProjects;
// Motion starts enabled unless the visitor explicitly pauses it.
let reduced=html.dataset.motion==='off',initialized=false,trigger=null;
let lang=html.lang==='ckb'?'ku':html.lang;
let pointer=new THREE.Vector2(),smoothPointer=new THREE.Vector2();
let raf=0,previousTime=0,surfaces=[],exhibitProgress=0,currentProject=0;
const copy={
 en:{'exhibit.title':'Step inside<br>the work.',prev:'Previous work',next:'Next work'},
 ku:{'exhibit.title':'بچۆ ناو<br>جیهانی کارەکان.',prev:'کاری پێشوو',next:'کاری دواتر'},
 ar:{'exhibit.title':'ادخل إلى<br>عالم الأعمال.',prev:'العمل السابق',next:'العمل التالي'}
};
const text=key=>(copy[lang]||copy.en)[key]||copy.en[key];
const direction=()=>html.dir==='rtl'?-1:1;
function translate(){
 root.querySelectorAll('[data-exp-i18n]').forEach(el=>el.innerHTML=text(el.dataset.expI18n));
 $('exhibitPrev').setAttribute('aria-label',text('prev'));$('exhibitNext').setAttribute('aria-label',text('next'));
 const gridLabel=({en:'View all work',ku:'هەموو کارەکان ببینە',ar:'عرض جميع الأعمال'})[lang]||'View all work';
 $('exhibitGrid').setAttribute('aria-label',gridLabel);$('exhibitGrid').title=gridLabel;
 requestRefresh();wake();
}
addEventListener('blink:language',event=>{lang=event.detail;translate();});
function openProject(id,button){dispatchEvent(new CustomEvent('blink:open-project',{detail:{id,trigger:button}}));}
root.querySelectorAll('[data-exhibit]').forEach(link=>link.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();openProject(link.dataset.exhibit,link);}));
let refreshTimer=0;
function requestRefresh(){clearTimeout(refreshTimer);refreshTimer=setTimeout(()=>{ScrollTrigger.refresh();placeSnaps();surfaces.forEach(s=>s.measureFrame?.());dispatchEvent(new Event('blink:layout'));wake();},100);}
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
  this.renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power',preserveDrawingBuffer:false});
  this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  this.renderer.setClearColor(0,0);this.renderer.outputColorSpace=THREE.SRGBColorSpace;
  // Portfolio media is already graded in sRGB. Filmic tone mapping alters the original.
  this.renderer.toneMapping=THREE.NoToneMapping;this.renderer.toneMappingExposure=1;
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
function mesh(geometry,mat,parent,position=[0,0,0],scale=[1,1,1]){const m=new THREE.Mesh(geometry,mat);m.position.set(...position);m.scale.set(...scale);parent.add(m);return m;}
let exhibitSurface,exhibitAngle=0,exhibitTarget=0;
function setExhibitProgress(value){
 exhibitProgress=clamp(value);exhibitTarget=exhibitProgress*(selection.length-1)*.58;
 const index=Math.round(exhibitProgress*(selection.length-1));
 if(index!==currentProject||!$('exhibitOpen').dataset.ready){
  currentProject=index;const p=selection[index];$('exhibitOpen').dataset.ready='true';
  $('exhibitOpen').textContent=p.title;if(!reduced)$('exhibitOpen').animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:460,easing:'cubic-bezier(.16,1,.3,1)'});$('exhibitPosition').textContent=`${index+1} / ${selection.length}`;
  $('exhibitPrev').disabled=index===0;$('exhibitNext').disabled=index===selection.length-1;
  exhibitSurface?.queueVideo?.();
  updateBackdrop(p);
 }
 $('exhibition').style.setProperty('--exhibit-progress',exhibitProgress);wake();
}
const backdrops=[...root.querySelectorAll('.exhibit-ambience img')];
let backdropSlot=0,backdropVersion=0;
let backdropTimer=0;
function updateBackdrop(project){
 clearTimeout(backdropTimer);backdropTimer=setTimeout(()=>loadBackdrop(project),110);
}
function loadBackdrop(project){
 const version=++backdropVersion,next=backdrops[1-backdropSlot];
 if(!next)return;
 const preload=new Image();preload.src=project.thumbnail;
 preload.decode().then(()=>{
  if(version!==backdropVersion)return;
  next.src=preload.src;next.classList.add('is-current');
  backdrops[backdropSlot].classList.remove('is-current');backdropSlot=1-backdropSlot;
 }).catch(()=>{});
}
function shadowMaterial(){
 return new THREE.ShaderMaterial({transparent:true,depthWrite:false,toneMapped:false,
  uniforms:{strength:{value:.25}},
  vertexShader:'varying vec2 uvShadow; void main(){uvShadow=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
  fragmentShader:'varying vec2 uvShadow; uniform float strength; void main(){vec2 d=max(abs(uvShadow-.5)-vec2(.34,.34),0.0);float a=exp(-dot(d,d)*170.0)*strength;gl_FragColor=vec4(.015,.012,.018,a);}'
 });
}
function buildExhibition(){
 const root=$('exhibition'),surface=new Surface($('exhibitionWorld'),root,()=>{});exhibitSurface=surface;
 surface.camera.fov=48;surface.camera.updateProjectionMatrix();surface.scene.background=null;
 const lit=new THREE.HemisphereLight(0xffffff,0xd8d8df,2.5);surface.scene.add(lit);
 const loader=new THREE.TextureLoader(),cards=[],posters=new Map();
 const cardMaterial=new THREE.MeshBasicMaterial({color:0xe5e5ea,toneMapped:false});
 // Recycle seven screens around the current work. A forty-screen circle would overlap itself.
 for(let i=0;i<7;i++){
  const group=new THREE.Group();surface.scene.add(group);
  const frame=mesh(new THREE.BoxGeometry(1,1,.055),cardMaterial,group,[0,0,-.04]);
  const shadow=mesh(new THREE.PlaneGeometry(1,1),shadowMaterial(),group,[0,-.09,-.10]);
  const screen=mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({color:0xe5e5ea,toneMapped:false}),group);
  cards.push({group,frame,screen,shadow,index:-1});
 }
 function applyMap(mat,map){if(mat.map===map)return;mat.map=map;mat.color.set(map?0xffffff:0xe5e5ea);mat.needsUpdate=true;}
 function loadNearby(){
  if(!surface.visible||reduced||surface.failed)return;
  const center=Math.round(exhibitAngle/.58),nearby=new Set();
  for(let i=Math.max(0,center-4);i<=Math.min(selection.length-1,center+4);i++)nearby.add(selection[i].id);
  for(const [id,item] of posters){if(!nearby.has(id)){item.texture?.dispose();posters.delete(id);}}
  for(let i=Math.max(0,center-4);i<=Math.min(selection.length-1,center+4);i++){
   const p=selection[i];if(posters.has(p.id))continue;
   const item={texture:null};posters.set(p.id,item);
   loader.load(p.exhibitionPoster||(!p.video?p.full:p.thumbnail),texture=>{
    if(posters.get(p.id)!==item){texture.dispose();return;}
    texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(8,surface.renderer.capabilities.getMaxAnisotropy());
    // Decode asynchronously and upload now; a lazy decode inside render() drops frames mid-swipe.
    Promise.resolve(texture.image.decode?.()).catch(()=>{}).then(()=>{if(posters.get(p.id)!==item){texture.dispose();return;}surface.renderer.initTexture(texture);item.texture=texture;wake();});
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
   resetVideo();videoIndex=currentProject;video.src=p.exhibitionPreview||p.preview;video.load();video.play().catch(()=>{});
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
  const bounds=surface.container.getBoundingClientRect(),heading=root.querySelector('.exhibition-heading').getBoundingClientRect();
  const bottom=root.querySelector('.exhibition-bottom').getBoundingClientRect();
  const top=heading.bottom-bounds.top+28,end=bottom.top-bounds.top-32;
  frameHeight=Math.max(70,end-top);frameOffset=(top+end)/2-bounds.height/2;wake();
 };
 surface.onResize=surface.measureFrame;surface.measureFrame();
 let loadedCenter=-1,lastAngle=0,velocity=0;
 surface.update=(time,dt)=>{
  // The input controller owns easing. Native scroll and touch track the hand;
  // a second camera interpolation would add lag after every input and snap.
  exhibitAngle=exhibitTarget;
  // Velocity only shapes the cards (lean + slight recede), never the position, so input stays 1:1.
  const step=(exhibitAngle-lastAngle)/.58;lastAngle=exhibitAngle;
  velocity=lerp(velocity,Math.abs(step)>2?0:step/Math.max(dt,.001),1-Math.exp(-dt*10));
  if(Math.abs(velocity)<.01)velocity=0;
  const lean=clamp(velocity*.03,-.16,.16),recede=1-Math.min(Math.abs(velocity)*.01,.06);
  surface.animate=!video.paused||velocity!==0;
  const center=Math.round(exhibitAngle/.58),dir=direction();
  const fov=mobileQuery.matches?(innerHeight<760?68:58):(innerHeight<760?56:48);
  const pixelsPerUnit=surface.container.clientHeight/(2*Math.tan(THREE.MathUtils.degToRad(fov/2))*6.2);
  if(center!==loadedCenter){loadNearby();loadedCenter=center;}
  cards.forEach((card,slot)=>{
   const index=center+slot-3,p=selection[index];card.group.visible=Boolean(p);if(!p)return;
   if(card.index!==index){
    card.index=index;card.screen.userData.index=index;
    const aspect=p.width/p.height,w=aspect>1?4.4:2.25,h=w/aspect;
    card.frame.scale.set(w+.018,h+.018,1);card.screen.scale.set(w,h,1);
    card.shadow.scale.set(w*1.4,h*1.4,1);
   }
   const angle=(index*.58-exhibitAngle)*dir;card.group.position.set(Math.sin(angle)*8,-.12,-Math.cos(angle)*8);card.group.rotation.y=-angle-lean*dir;
   const focus=1-THREE.MathUtils.smoothstep(Math.abs(index-exhibitAngle/.58),.08,1.1);
   const fitted=Math.min(mobileQuery.matches?1.3:1.75,frameHeight/(card.screen.scale.y*pixelsPerUnit),surface.container.clientWidth*.92/(card.screen.scale.x*pixelsPerUnit));
   card.group.scale.setScalar(fitted*lerp(.62,1,focus)*recede);
   const poster=posters.get(p.id)?.texture||null;applyMap(card.screen.material,index===videoIndex&&videoTexture?videoTexture:poster);
   card.shadow.material.uniforms.strength.value=lerp(.03,.23,focus);
  });
  surface.camera.position.set(0,.25+frameOffset/pixelsPerUnit+smoothPointer.y*.025,-1.8);
  surface.camera.lookAt(0,-.12+frameOffset/pixelsPerUnit,-8);
  surface.camera.fov=fov;surface.camera.updateProjectionMatrix();
 };
 setExhibitProgress(0);return surface;
}

// Touch uses native, momentum-aware CSS snapping: one continuous glide that lands on a work,
// instead of a fling followed by a separate JS correction. Programmatic scrolling turns it off.
let snaps=[];
function placeSnaps(){
 snaps.forEach(el=>el.remove());snaps=[];
 if(!trigger)return;
 const offset=root.getBoundingClientRect().top-scroller.getBoundingClientRect().top+scroller.scrollTop;
 for(let i=0;i<selection.length;i++){const el=document.createElement('div');el.className='exhibit-snap';el.style.top=`${lerp(trigger.start,trigger.end,i/(selection.length-1))-offset}px`;root.append(el);snaps.push(el);}
}
const touchSnap=on=>scroller.classList.toggle('is-touch-snap',on&&Boolean(trigger));
scroller.addEventListener('touchstart',()=>touchSnap(true),{capture:true,passive:true});
for(const type of ['blink:page-navigation','blink:scroll-control'])addEventListener(type,()=>touchSnap(false));
scroller.addEventListener('wheel',()=>touchSnap(false),{capture:true,passive:true});
function writeProgress(value){
 value=clamp(value);
 // Programmatic snaps and direct drags already define their motion. Do not add
 // a second camera easing tail after the scroll position reaches the work.
 exhibitAngle=value*(selection.length-1)*.58;
 if(trigger&&!reduced){scroller.scrollTop=lerp(trigger.start,trigger.end,value);ScrollTrigger.update();}
 setExhibitProgress(value);
}
let navigation={progress:0};
let alignTimer=0,wheelTimer=0,wheelGesture=null,navigationTarget=null,pointerHeld=false;
function cancelAlignment(){clearTimeout(alignTimer);clearTimeout(wheelTimer);wheelGesture=null;navigationTarget=null;gsap.killTweensOf(navigation);}
function animateIndex(index){
 clearTimeout(alignTimer);dispatchEvent(new Event('blink:scroll-control'));
 index=clamp(index,0,selection.length-1);const value=index/(selection.length-1),jump=Math.abs(index-currentProject)>3;
 navigationTarget=value;
 gsap.killTweensOf(navigation);navigation.progress=exhibitProgress;
 // Long jumps go straight to the work instead of racing through the entire collection.
 if(jump)exhibitAngle=value*(selection.length-1)*.58;
 const distance=Math.abs(value-exhibitProgress)*(selection.length-1);
 gsap.to(navigation,{progress:value,duration:reduced||jump?0:clamp(.17+.14*Math.sqrt(distance),.18,.34),ease:'power3.out',onUpdate:()=>writeProgress(navigation.progress),onComplete:()=>{navigationTarget=null;writeProgress(value);}});
}
function selectIndex(index){cancelAlignment();animateIndex(index);}
function insideExhibition(){return trigger&&!reduced&&!$('viewer').open&&scroller.scrollTop>=trigger.start-1&&scroller.scrollTop<=trigger.end+1;}
// Respond to the first input. Small trackpad deltas preview movement immediately;
// a short snap completes deliberate movement. Suppress decaying inertia, while
// accepting new wheel ticks, renewed trackpad intent, and reversals mid-animation.
scroller.addEventListener('wheel',event=>{
 if(event.ctrlKey||event.target.closest('input,textarea,select')||!insideExhibition()){cancelAlignment();return;}
 const horizontal=Math.abs(event.deltaX)>Math.abs(event.deltaY);
 const delta=clamp((horizontal?event.deltaX*direction():event.deltaY)*(event.deltaMode===1?20:event.deltaMode===2?scroller.clientHeight:1),-180,180);
 if(!delta)return;
 const now=performance.now(),sign=Math.sign(delta);
 const gap=wheelGesture?now-wheelGesture.last:Infinity;
 const fresh=!wheelGesture||gap>170;
 const magnitude=Math.abs(delta),previous=wheelGesture;
 const renewed=!fresh&&previous.committed&&sign===previous.sign&&now-previous.committedAt>120&&(
   (gap>65&&magnitude>=50&&magnitude>=previous.magnitude*.9)||
   (magnitude>Math.max(18,previous.magnitude*1.65)&&previous.magnitude<35)
 );
 if((fresh||renewed)&&((exhibitProgress<.0001&&delta<0)||(exhibitProgress>.9999&&delta>0))){cancelAlignment();return;}
 event.preventDefault();event.stopImmediatePropagation();dispatchEvent(new Event('blink:scroll-control'));
 if(fresh||sign!==wheelGesture.sign){
  const position=(navigationTarget??exhibitProgress)*(selection.length-1);
  wheelGesture={anchor:Math.round(position),sign,total:0,committed:false,last:now,magnitude:0,committedAt:0};
 }
 const g=wheelGesture;
 if(renewed){g.anchor=Math.round((navigationTarget??exhibitProgress)*(selection.length-1));g.total=0;g.committed=false;}
 g.last=now;g.total+=magnitude;g.magnitude=magnitude;
 clearTimeout(alignTimer);clearTimeout(wheelTimer);
 if(!g.committed){
  if(g.total>=18){g.committed=true;g.committedAt=now;animateIndex(g.anchor+sign);}
  else{
   gsap.killTweensOf(navigation);navigationTarget=null;
   writeProgress(exhibitProgress+delta/420/(selection.length-1));
  }
 }
 wheelTimer=setTimeout(()=>{const pending=wheelGesture;wheelGesture=null;if(pending&&!pending.committed)animateIndex(Math.round(exhibitProgress*(selection.length-1)));},175);
},{capture:true,passive:false});
scroller.addEventListener('scroll',()=>{
 if(scroller.classList.contains('is-touch-snap')||pointerHeld||scroller.dataset.navigating||!insideExhibition()||wheelGesture||gsap.isTweening(navigation))return;
 clearTimeout(alignTimer);
 alignTimer=setTimeout(()=>{if(!insideExhibition()||pointerHeld||scroller.dataset.navigating)return;const position=exhibitProgress*(selection.length-1);if(Math.abs(position-Math.round(position))>.006)selectIndex(Math.round(position));},120);
},{passive:true});
addEventListener('blink:page-navigation',cancelAlignment);
addEventListener('pointerdown',()=>{pointerHeld=true;cancelAlignment();},{capture:true,passive:true});
for(const type of ['pointerup','pointercancel'])addEventListener(type,()=>{pointerHeld=false;},{capture:true,passive:true});
addEventListener('keydown',cancelAlignment,{capture:true,passive:true});
function installDrag(container,tap){
 let gesture=null;
 container.addEventListener('pointerdown',e=>{
  if(!e.isPrimary||e.button!==0||reduced)return;
  gsap.killTweensOf(navigation);
  gesture={id:e.pointerId,x:e.clientX,y:e.clientY,start:exhibitProgress,index:currentProject,axis:null,delta:0,lastX:e.clientX,lastTime:performance.now(),velocity:0};
 });
 container.addEventListener('pointermove',e=>{
  if(!gesture||e.pointerId!==gesture.id)return;
  const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;
  if(!gesture.axis&&Math.hypot(dx,dy)>5){
   gesture.axis=Math.abs(dx)>Math.abs(dy)*1.15?'x':'y';
   if(gesture.axis==='x'){touchSnap(false);container.setPointerCapture(e.pointerId);container.classList.add('is-dragging');}
  }
  if(gesture.axis!=='x')return;
  if(e.cancelable)e.preventDefault();
  gesture.delta=-dx*direction();
  const now=performance.now();gesture.velocity=-(e.clientX-gesture.lastX)*direction()/Math.max(1,now-gesture.lastTime);gesture.lastX=e.clientX;gesture.lastTime=now;
  const distance=Math.max(240,Math.min(container.clientWidth*.65,650));
  writeProgress(gesture.start+gesture.delta/distance/(selection.length-1));
 },{passive:false});
 function finish(e,cancelled){
  if(!gesture||e.pointerId!==gesture.id)return;
  const previous=gesture;gesture=null;container.classList.remove('is-dragging');
  if(container.hasPointerCapture(e.pointerId))container.releasePointerCapture(e.pointerId);
  if(previous.axis==='x'){
   let index=Math.round(exhibitProgress*(selection.length-1));
   const flick=performance.now()-previous.lastTime<100&&Math.abs(previous.velocity)>.45;
   if(!cancelled&&(Math.abs(previous.delta)>Math.max(44,container.clientWidth*.07)||flick)&&index===previous.index)index+=Math.sign(previous.delta);
   selectIndex(index);
  }else if(!cancelled&&!previous.axis&&Math.hypot(e.clientX-previous.x,e.clientY-previous.y)<8)tap(e);
 }
 container.addEventListener('pointerup',e=>finish(e,false));
 container.addEventListener('pointercancel',e=>finish(e,true));
 // Touch initially captures the canvas. Ignore its bubbled loss when capture moves to this container.
 container.addEventListener('lostpointercapture',e=>{if(e.target===container)finish(e,true);});
 container.addEventListener('dragstart',e=>e.preventDefault());
 // Both wheel axes use the single gesture controller on the scroller.
}
$('exhibitOpen').addEventListener('click',()=>openProject(selection[currentProject].id,$('exhibitOpen')));
$('exhibitPrev').addEventListener('click',()=>selectIndex(Math.round((navigationTarget??exhibitProgress)*(selection.length-1))-1));
$('exhibitNext').addEventListener('click',()=>selectIndex(Math.round((navigationTarget??exhibitProgress)*(selection.length-1))+1));
$('exhibitOpen').addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();selectIndex(currentProject+(e.key==='ArrowRight'?1:-1)*direction());}});
function setupScroll(){
 cancelAlignment();touchSnap(false);
 trigger?.kill();trigger=null;
 root.style.setProperty('--exhibit-distance',`${(selection.length-1)*clamp(innerHeight*.5,360,540)}px`);
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
addEventListener('blink:motion',event=>{
 const navHeight=$('mainNav').offsetHeight;
 const anchor=[...scroller.querySelectorAll(':scope > section')].find(section=>section.getBoundingClientRect().bottom>navHeight);
 const anchorTop=anchor?.getBoundingClientRect().top;
 reduced=event.detail.paused;updateMotion();
 // Preserve the visitor's place when the exhibition changes height.
 if(anchor===root)scroller.scrollTop=root.offsetTop-navHeight;
 else if(anchor)scroller.scrollTop+=anchor.getBoundingClientRect().top-anchorTop;
});
mobileQuery.addEventListener('change',()=>{surfaces.forEach(s=>s.resize());setupScroll();});
addEventListener('pagehide',event=>{if(event.persisted)return;cancelAnimationFrame(raf);trigger?.kill();surfaces.forEach(s=>s.dispose());});
addEventListener('pageshow',requestRefresh);
updateMotion();setExhibitProgress(0);
if(location.hash)requestAnimationFrame(()=>{const target=document.getElementById(location.hash.slice(1));if(target&&target.closest('#scroller'))scroller.scrollTop=target.offsetTop-$('mainNav').offsetHeight;});
document.fonts.ready.then(requestRefresh);
