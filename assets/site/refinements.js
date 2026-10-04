(() => {
  'use strict';
  const $ = id => document.getElementById(id), html = document.documentElement;
  const copy = {
    en: {dark:'Switch to dark mode',light:'Switch to light mode',heroPlay:'Play background film',skip:'Next section',gridSize:'Grid density',columns:n=>`${n} ${n===1?'column':'columns'}`,transformEyebrow:'The difference is direction.',transformTitle:'Same product.<br>New possibilities.',transformBody:'An everyday image. An entirely different feeling. Slide to see what a little BLINK can do.',nextDirection:'Try another direction',concept:'An original BLINK concept. Three art directions, one product.',without:'Without BLINK',with:'With BLINK',comparisonHint:'Move your mouse to compare, or drag on touch. Move fully right for the next direction.',compare:'Before and after comparison',reveal:n=>`${n}% with BLINK`,ready:'New direction ready. Slide left to reveal.',names:['Citrus in motion','Quiet luxury','A bolder perspective'],descriptions:['Light, texture and a splash of energy.','Sculptural light. Rich materials. Every detail considered.','Playful geometry. Confident color. Impossible to miss.'],alts:['Citrus can surrounded by a golden splash and fresh oranges','The same Citrus can on green marble in sculptural golden light','The same Citrus can in a bold cobalt and orange architectural set']},
    ku: {dark:'دۆخی تاریک چالاک بکە',light:'دۆخی ڕووناک چالاک بکە',heroPlay:'فیلمی پاشبنەما لێبدە',skip:'بەشی دواتر',gridSize:'قەبارەی تۆڕ',columns:n=>`${n} ستوون`,transformEyebrow:'جیاوازی لە دیدگایە.',transformTitle:'هەمان بەرهەم.<br>ئەگەری نوێ.',transformBody:'وێنەیەکی ئاسایی، هەستێکی تەواو جیاواز. بیکێشە و جیاوازی بلینک ببینە.',nextDirection:'دیدگایەکی تر تاقی بکەرەوە',concept:'کۆنسێپتێکی بلینک. سێ دیدگای هونەری بۆ یەک بەرهەم.',without:'بەبێ بلینک',with:'لەگەڵ بلینک',comparisonHint:'بۆ بەراوردکردن ماوس بجووڵێنە یان پەنجە بیکێشە. بۆ دیدگای نوێ بیبە تا کۆتایی ڕاست.',compare:'بەراوردی پێش و پاش',reveal:n=>`${n}٪ لەگەڵ بلینک`,ready:'دیدگای نوێ ئامادەیە. بۆ چەپ بیکێشە.',names:['پرتەقاڵ لە جووڵەدا','لوکسی ئارام','دیدگایەکی بوێرانە'],descriptions:['ڕووناکی، وردەکاری و وزە.','ڕووناکی هونەری و کەرەستەی نایاب.','شێوەی یاریگۆش و ڕەنگی بوێرانە.'],alts:['قوتووی سیتروس لەگەڵ شەپۆلی زێڕین و پرتەقاڵ','هەمان قوتوو لەسەر مەڕمەڕی سەوز','هەمان قوتوو لە دیکۆری شین و پرتەقاڵی']},
    ar: {dark:'التبديل إلى الوضع الداكن',light:'التبديل إلى الوضع الفاتح',heroPlay:'تشغيل فيلم الخلفية',skip:'القسم التالي',gridSize:'كثافة الشبكة',columns:n=>`${n} أعمدة`,transformEyebrow:'الفرق في الرؤية.',transformTitle:'المنتج نفسه.<br>احتمالات جديدة.',transformBody:'صورة عادية. إحساس مختلف تماماً. اسحب لتكتشف لمسة بلينك.',nextDirection:'جرّب رؤية أخرى',concept:'مفهوم أصلي من بلينك. ثلاث رؤى فنية لمنتج واحد.',without:'بدون بلينك',with:'مع بلينك',comparisonHint:'حرّك الماوس للمقارنة، أو اسحب باللمس. انتقل إلى أقصى اليمين للرؤية التالية.',compare:'مقارنة قبل وبعد',reveal:n=>`${n}٪ مع بلينك`,ready:'الرؤية الجديدة جاهزة. اسحب لليسار للكشف عنها.',names:['حمضيات في حركة','فخامة هادئة','منظور أكثر جرأة'],descriptions:['ضوء وتفاصيل ودفقة من الطاقة.','إضاءة منحوتة. خامات غنية. عناية بكل تفصيل.','هندسة مرحة وألوان واثقة تلفت الانتباه.'],alts:['عبوة سيتروس وسط رذاذ ذهبي وبرتقال طازج','العبوة نفسها على رخام أخضر بإضاءة ذهبية','العبوة نفسها وسط أشكال معمارية زرقاء وبرتقالية']}
  };
  let lang = html.lang==='ckb'?'ku':html.lang;
  const t = () => copy[lang] || copy.en;
  const themeButton=$('themeToggle'), systemTheme=matchMedia('(prefers-color-scheme: dark)');
  function updateTheme(){
    const dark=html.dataset.theme==='dark';
    themeButton.setAttribute('aria-pressed',String(dark));
    themeButton.setAttribute('aria-label',dark?t().light:t().dark);
    themeButton.title=dark?t().light:t().dark;
    document.querySelector('meta[name="theme-color"]').content=dark?'#171719':'#f5f5f7';
  }
  themeButton.addEventListener('click',()=>{
    html.dataset.theme=html.dataset.theme==='dark'?'light':'dark';
    try{localStorage.setItem('blink-theme',html.dataset.theme);}catch{}
    updateTheme();
  });
  systemTheme.addEventListener('change',e=>{let saved;try{saved=localStorage.getItem('blink-theme');}catch{}if(!saved){html.dataset.theme=e.matches?'dark':'light';updateTheme();}});

  const density=$('gridDensity'),work=$('work');
  let preferredColumns=0;
  try{preferredColumns=Number(localStorage.getItem('blink-columns'))||0;}catch{}
  function updateDensity(){
    const width=work.clientWidth,max=width<600?2:width<1000?3:width<1600?5:6;
    const columns=Math.max(1,Math.min(max,preferredColumns||(width<600?2:width<1000?3:width<1600?4:5)));
    density.max=max;density.value=columns;density.setAttribute('aria-valuetext',t().columns(columns));
    $('gridDensityValue').textContent=t().columns(columns);
    work.style.setProperty('--grid-columns',columns);
    work.dataset.density=columns>=(width<600?2:4)?'compact':'comfortable';
    layoutGrid();
    dispatchEvent(new Event('blink:layout'));
  }
  density.addEventListener('input',()=>{preferredColumns=Number(density.value);try{localStorage.setItem('blink-columns',preferredColumns);}catch{}updateDensity();});
  let lastWidth=0;
  const workGrid=$('workGrid');let gridFrame=0;
  function layoutGrid(){
    if(gridFrame)return;
    gridFrame=requestAnimationFrame(()=>{
      gridFrame=0;
      const cards=[...workGrid.children].filter(card=>!card.hidden);
      // Measure intrinsic card content, never the spanned grid area. Images keep
      // their original aspect ratios, and appending works leaves earlier slots alone.
      const heights=cards.map(card=>card.querySelector('.project-media').getBoundingClientRect().height+card.querySelector('.cap').getBoundingClientRect().height);
      cards.forEach((card,i)=>card.style.setProperty('--rows',Math.ceil((heights[i]+8)/12)));
      workGrid.classList.add('is-masonry');dispatchEvent(new Event('blink:layout'));
    });
  }
  const gridObserver=new ResizeObserver(layoutGrid);
  [...workGrid.children].forEach(card=>gridObserver.observe(card));
  // Stagger cards that enter together (60ms apart, capped) so a screenful doesn't pop in at once.
  workGrid.classList.add('reveal-cells');
  const cellReveal=new IntersectionObserver(entries=>{
    entries.filter(e=>e.isIntersecting).forEach((e,i)=>{e.target.style.transitionDelay=`${Math.min(i*60,300)}ms`;e.target.classList.add('in');cellReveal.unobserve(e.target);});
  },{rootMargin:'0px 0px -6% 0px'});
  [...workGrid.children].forEach(card=>cellReveal.observe(card));
  addEventListener('blink:grid-layout',layoutGrid);document.fonts.ready.then(layoutGrid);
  new ResizeObserver(entries=>{const width=Math.round(entries[0].contentRect.width);if(width!==lastWidth){lastWidth=width;updateDensity();}}).observe(work);

  const comparison=$('comparison'),range=$('comparisonRange'),after=$('comparisonAfter');
  const variants=[...$('comparisonVariants').children].map(el=>el.dataset.src);
  const loaded=new Map();let current=0,revealed=true,swapVersion=0,gesture=null;
  const hoverCapable=matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  let hoverFrame=0,hoverTarget=50,hoverValue=50,hoverTime=0;
  function preload(index){
    if(!loaded.has(index)){
      const image=new Image();image.src=variants[index];
      const pending=image.decode().then(()=>image).catch(error=>{loaded.delete(index);throw error;});
      loaded.set(index,pending);
    }
    return loaded.get(index);
  }
  const preloadObserver=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){variants.forEach((_,i)=>preload(i).catch(()=>{}));preloadObserver.disconnect();}
  },{root:$('scroller'),rootMargin:'600px'});preloadObserver.observe(comparison);
  function updateDirection(){
    $('directionNumber').textContent=`0${current+1} / 0${variants.length}`;
    $('directionName').textContent=t().names[current];$('directionDescription').textContent=t().descriptions[current];
    after.alt=t().alts[current];comparison.dataset.variant=String(current);
  }
  function updateReveal(position){
    const value=typeof position==='number'?position:Number(range.value);
    comparison.style.setProperty('--reveal',value+'%');
    range.setAttribute('aria-valuetext',t().reveal(Math.round(100-value)));
    if(value<97){revealed=true;swapVersion++;}
  }
  function stopHover(){cancelAnimationFrame(hoverFrame);hoverFrame=0;hoverTime=0;}
  function hoverStep(now){
    const dt=Math.min(40,now-hoverTime||16.67);hoverTime=now;
    hoverValue+=(hoverTarget-hoverValue)*(1-Math.exp(-dt/65));
    if(Math.abs(hoverTarget-hoverValue)<.08)hoverValue=hoverTarget;
    range.value=hoverValue;updateReveal(hoverValue);
    if(hoverValue!==hoverTarget)hoverFrame=requestAnimationFrame(hoverStep);
    else{hoverFrame=0;hoverTime=0;nextHidden();}
  }
  function pointerPosition(e){
    const r=comparison.getBoundingClientRect(),value=Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100));
    return value>98?100:value<2?0:value;
  }
  function followHover(e){
    if(e.pointerType!=='mouse'||!hoverCapable.matches||gesture)return;
    hoverTarget=pointerPosition(e);
    if(reducedMotion.matches||html.dataset.motion==='off'){stopHover();hoverValue=hoverTarget;range.value=hoverTarget;updateReveal(hoverValue);nextHidden();return;}
    if(!hoverFrame){hoverValue=parseFloat(comparison.style.getPropertyValue('--reveal'))||0;hoverFrame=requestAnimationFrame(hoverStep);}
  }
  async function nextHidden(){
    if(Number(range.value)!==100||!revealed)return;
    revealed=false;
    const next=(current+1)%variants.length,version=++swapVersion;
    try{
      const image=await preload(next);
      // An unfinished decode must never replace a poster after the visitor exposes it.
      if(version!==swapVersion||Number(range.value)!==100)return;
      after.src=image.src;current=next;updateDirection();$('comparisonStatus').textContent=t().ready;
      preload((next+1)%variants.length).catch(()=>{});
    }catch{revealed=true;}
  }
  range.addEventListener('input',()=>{stopHover();updateReveal();});
  range.addEventListener('change',nextHidden);
  range.addEventListener('keydown',()=>{stopHover();swapVersion++;});
  range.addEventListener('keyup',nextHidden);
  function setFromPointer(e){const value=pointerPosition(e);range.value=value;updateReveal(value);}
  range.addEventListener('pointerenter',followHover);
  range.addEventListener('pointerdown',e=>{
    if(!e.isPrimary||e.button!==0)return;
    stopHover();
    e.preventDefault();range.focus({preventScroll:true});gesture={id:e.pointerId,x:e.clientX,y:e.clientY,axis:null};
    if(e.pointerType==='mouse'){gesture.axis='x';range.setPointerCapture(e.pointerId);setFromPointer(e);}
  });
  range.addEventListener('pointermove',e=>{
    if(!gesture){followHover(e);return;}
    if(gesture.id!==e.pointerId)return;
    const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;
    if(!gesture.axis&&Math.hypot(dx,dy)>6){gesture.axis=Math.abs(dx)>Math.abs(dy)?'x':'y';if(gesture.axis==='x')range.setPointerCapture(e.pointerId);}
    if(gesture.axis==='x'){e.preventDefault();setFromPointer(e);}
  });
  function endPointer(e){
    if(!gesture||gesture.id!==e.pointerId)return;
    if(e.type==='pointerup'&&!gesture.axis)setFromPointer(e);
    gesture=null;if(range.hasPointerCapture(e.pointerId))range.releasePointerCapture(e.pointerId);nextHidden();
  }
  range.addEventListener('pointerup',endPointer);range.addEventListener('pointercancel',endPointer);
  $('comparisonReset').addEventListener('click',()=>{stopHover();range.value=100;updateReveal();revealed=true;nextHidden();range.focus({preventScroll:true});});
  function translate(){
    document.querySelectorAll('[data-ui]').forEach(el=>{if(t()[el.dataset.ui])el.innerHTML=t()[el.dataset.ui];});
    range.setAttribute('aria-label',t().compare);updateTheme();updateDensity();updateDirection();updateReveal();
  }
  addEventListener('blink:language',e=>{lang=e.detail;translate();});
  translate();
})();
