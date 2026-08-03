
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Umofi AI",
  "description": "AI services for businesses in Hyderabad, lead generation, CRM automation, AI chatbots, WhatsApp automation, and multilingual support in Telugu, Hindi, and English.",
  "url": "https://umofi.ai",
  "telephone": "+91-9553210805",
  "email": "Umofiai.in@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "areaServed": ["Hyderabad", "Telangana", "Secunderabad", "HITEC City", "Gachibowli", "Kukatpally", "Dilsukhnagar"],
  "sameAs": [],
  "serviceType": ["AI Lead Generation", "CRM Automation", "AI Chatbots", "WhatsApp Automation", "Email Automation", "Predictive Analytics", "Business Process Automation", "Multilingual AI", "Performance Marketing"],
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "₹₹"
}


{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question","name": "Do I need any technical knowledge to use your AI services?","acceptedAnswer": {"@type": "Answer","text": "Not at all. We handle everything from building to integration. You just tell us your business goals and we take care of the rest."}},
    {"@type": "Question","name": "Can your chatbots speak in Telugu?","acceptedAnswer": {"@type": "Answer","text": "Yes. We build chatbots that communicate naturally in Telugu, Hindi, and English. We are the only AI agency in Hyderabad offering this."}},
    {"@type": "Question","name": "How long does it take to see results?","acceptedAnswer": {"@type": "Answer","text": "Most clients have their first AI system live within one to three weeks. Results like automated lead capture appear from day one."}},
    {"@type": "Question","name": "Do you sign long-term contracts?","acceptedAnswer": {"@type": "Answer","text": "No. We believe in earning your trust through results, not contracts. No lock-in periods and no hidden fees."}}
  ]
}


// LOADER
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hide');
  },2000);
});

// CURSOR
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function a(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a);})();
document.querySelectorAll('a,button,.sc,.ind-item,.stat-c,.lc,.ps,.why-card,.testi-card,.faq-q').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('hov'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('hov'));
});

// NAV
const navEl=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  navEl.classList.toggle('sc',scrollY>50);
  document.getElementById('back-top').classList.toggle('show',scrollY>400);
});

// MOBILE MENU
function toggleMenu(){
  document.getElementById('ham').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}

// ACTIVE NAV on scroll
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-l a');
const secIo=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(l=>{
        l.classList.toggle('active-link',l.getAttribute('href')==='#'+e.target.id);
      });
    }
  });
},{threshold:.4});
sections.forEach(s=>secIo.observe(s));

// SCROLL REVEAL
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on');}),{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// STAGGER
document.querySelectorAll('.sv-grid,.ind-grid,.lang-cards,.stats-grid,.why-grid,.testi-grid').forEach(p=>{
  p.querySelectorAll('.sc,.ind-item,.lc,.stat-c,.why-card,.testi-card').forEach((item,i)=>{item.style.transitionDelay=(i*.07)+'s';});
});

// TILT
document.querySelectorAll('.sc,.why-card,.testi-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(700px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateZ(4px)`;
  });
  card.addEventListener('mouseleave',()=>{card.style.transform='';});
});

// MAGNETIC BUTTONS
document.querySelectorAll('.btn-p,.btn-g,.btn-nav,.form-submit').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*.15}px,${y*.15}px)`;
  });
  btn.addEventListener('mouseleave',()=>{btn.style.transform='';});
});

// HERO PARALLAX
window.addEventListener('scroll',()=>{
  const frame=document.querySelector('.hero-logo-frame');
  if(frame)frame.style.transform=`translateY(${scrollY*.12}px)`;
});

// Typing effect handled by CSS

// FAQ
function toggleFaq(el){
  const item=el.parentElement;
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));
  if(!wasOpen)item.classList.add('open');
}

// CONTACT FORM
async function submitForm(){
  const nameEl  = document.getElementById('f-name');
  const phoneEl = document.getElementById('f-phone');
  const emailEl = document.getElementById('f-email');
  const bizEl   = document.getElementById('f-biz');
  const msgEl   = document.getElementById('f-msg');
  const btn     = document.querySelector('.form-submit');

  const name  = nameEl  ? nameEl.value.trim()  : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const email = emailEl ? emailEl.value.trim() : '';

  // Basic validation
  if(!name || !phone){
    showFormError('Please fill in your name and phone number.');
    return;
  }
  if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    showFormError('Please enter a valid email address.');
    return;
  }

  // Loading state
  if(btn){ btn.disabled = true; btn.innerHTML = '<span class="form-spinner"></span> Sending…'; }

  const endpoint = UMOFI_CONFIG.formEndpoint;
  const isPlaceholder = endpoint.includes('YOUR_FORM_ID');

  if(isPlaceholder){
    // Dev mode: simulate success without a real endpoint
    await new Promise(r => setTimeout(r, 900));
    showFormSuccess();
    return;
  }

  // Build payload — works for both Formspree and Web3Forms
  const payload = {
    name,
    phone,
    email: email || '(not provided)',
    business: bizEl ? bizEl.value.trim() : '',
    message:  msgEl ? msgEl.value.trim() : '',
    _subject: 'New AI Audit Request — Umofi AI',
  };

  // Web3Forms needs the access_key field
  if(UMOFI_CONFIG.web3formsKey){
    payload.access_key = UMOFI_CONFIG.web3formsKey;
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if(res.ok && (data.ok || data.success)){
      showFormSuccess();
    } else {
      throw new Error(data.error || 'Submission failed');
    }
  } catch(err) {
    if(btn){ btn.disabled = false; btn.innerHTML = 'Book a Free AI Audit <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'; }
    showFormError('Something went wrong. Please try WhatsApp or email us directly.');
  }
}

function showFormSuccess(){
  const fields = document.getElementById('form-fields');
  const success = document.getElementById('form-success');
  if(fields)  fields.style.display  = 'none';
  if(success) success.style.display = 'block';
}

function showFormError(msg){
  let err = document.getElementById('form-error-msg');
  if(!err){
    err = document.createElement('p');
    err.id = 'form-error-msg';
    err.style.cssText = 'color:#ff6b6b;font-size:.83rem;margin-top:.5rem;text-align:center;';
    const btn = document.querySelector('.form-submit');
    if(btn) btn.parentNode.insertBefore(err, btn.nextSibling);
  }
  err.textContent = msg;
  setTimeout(() => { if(err) err.textContent = ''; }, 5000);
}


// ╔══════════════════════════════════════════════════════════╗
// ║           UMOFI AI — EASY CONFIGURATION BLOCK           ║
// ║  Replace values below with your own details.            ║
// ║  Do NOT change anything outside this block.             ║
// ╚══════════════════════════════════════════════════════════╝
const UMOFI_CONFIG = {
  // ── CONTACT DETAILS ──────────────────────────────────────
  phone:      '+91 95532 10805',
  phoneLink:  'tel:+919553210805',
  email:      'Umofiai.in@gmail.com',
  emailLink:  'mailto:Umofiai.in@gmail.com',
  whatsapp:   'https://wa.me/919553210805',

  // ── SOCIAL MEDIA URLS ────────────────────────────────────
  // Replace each "#" with your real profile URL
  instagram:  'https://www.instagram.com/umofi_ai?igsh=MTl6MThyYm9vN3E0aA==',
  linkedin:   'https://www.linkedin.com/in/umofi-ai-894916421?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  twitter:    'https://x.com/YOUR_HANDLE',
  youtube:    'https://www.youtube.com/@YOUR_CHANNEL',

  // ── FORM ENDPOINT ────────────────────────────────────────
  // Option A — Formspree:  'https://formspree.io/f/YOUR_FORM_ID'
  // Option B — Web3Forms:  'https://api.web3forms.com/submit'
  //            (also set web3formsKey below)
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  web3formsKey: '',   // only needed if using Web3Forms
};
// ═══════════════════════════════════════════════════════════

// Apply config to page elements on load
(function applyConfig(){
  // WhatsApp float
  const waBtn = document.querySelector('.wa-float');
  if(waBtn) waBtn.href = UMOFI_CONFIG.whatsapp;

  // Social buttons — contact section
  document.querySelectorAll('.contact-social .social-btn').forEach(btn => {
    const label = (btn.getAttribute('aria-label') || '').toLowerCase();
    if(label.includes('instagram')) btn.href = UMOFI_CONFIG.instagram;
    else if(label.includes('linkedin'))  btn.href = UMOFI_CONFIG.linkedin;
    else if(label.includes('twitter') || label.includes('x')) btn.href = UMOFI_CONFIG.twitter;
    else if(label.includes('youtube'))  btn.href = UMOFI_CONFIG.youtube;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
  });

  // Social buttons — footer
  document.querySelectorAll('.footer-social .social-btn').forEach(btn => {
    const label = (btn.getAttribute('aria-label') || '').toLowerCase();
    if(label.includes('instagram')) btn.href = UMOFI_CONFIG.instagram;
    else if(label.includes('linkedin'))  btn.href = UMOFI_CONFIG.linkedin;
    else if(label.includes('twitter') || label.includes('x')) btn.href = UMOFI_CONFIG.twitter;
    else if(label.includes('youtube'))  btn.href = UMOFI_CONFIG.youtube;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
  });
})();

// WEBGL PARTICLES
(function(){
  const canvas=document.getElementById('c');
  const gl=canvas.getContext('webgl');
  if(!gl){canvas.style.display='none';return;}
  function resize(){canvas.width=innerWidth;canvas.height=innerHeight;gl.viewport(0,0,canvas.width,canvas.height);}
  resize();window.addEventListener('resize',resize);
  let pmx=0,pmy=0;
  document.addEventListener('mousemove',e=>{pmx=(e.clientX/innerWidth)*2-1;pmy=-((e.clientY/innerHeight)*2-1);});
  const vs=`attribute vec3 aPos;attribute float aSize;attribute float aPhase;attribute vec3 aVel;uniform float uTime;uniform vec2 uMouse;void main(){vec3 p=aPos;float dx=p.x-uMouse.x*0.5;float dy=p.y-uMouse.y*0.5;float dist=sqrt(dx*dx+dy*dy);float repel=smoothstep(0.35,0.0,dist)*0.07;p.x+=dx*repel;p.y+=dy*repel;p.x+=sin(uTime*0.3+aPhase)*0.05+aVel.x*sin(uTime*0.15+aPhase*2.0)*0.04;p.y+=cos(uTime*0.25+aPhase*1.5)*0.06+aVel.y*cos(uTime*0.2+aPhase)*0.035;gl_Position=vec4(p,1.0);gl_PointSize=aSize*(1.0+0.4*sin(uTime*1.1+aPhase));}`;
  const fs=`precision mediump float;uniform float uTime;void main(){vec2 uv=gl_PointCoord*2.0-1.0;float d=length(uv);if(d>1.0)discard;float a=(1.0-d)*(0.4+0.15*sin(uTime+gl_FragCoord.x));vec3 col=mix(vec3(0.48,0.36,1.0),vec3(0.35,0.65,1.0),d*0.7+0.3*sin(uTime*0.5));gl_FragColor=vec4(col,a*0.45);}`;
  function mkS(t,s){const sh=gl.createShader(t);gl.shaderSource(sh,s);gl.compileShader(sh);return sh;}
  const prog=gl.createProgram();
  gl.attachShader(prog,mkS(gl.VERTEX_SHADER,vs));
  gl.attachShader(prog,mkS(gl.FRAGMENT_SHADER,fs));
  gl.linkProgram(prog);gl.useProgram(prog);
  const N=260;
  const pos=new Float32Array(N*3),sz=new Float32Array(N),ph=new Float32Array(N),vel=new Float32Array(N*3);
  for(let i=0;i<N;i++){pos[i*3]=(Math.random()-0.5)*2.2;pos[i*3+1]=(Math.random()-0.5)*2.2;pos[i*3+2]=0;sz[i]=Math.random()*4+0.5;ph[i]=Math.random()*Math.PI*2;vel[i*3]=(Math.random()-0.5)*2;vel[i*3+1]=(Math.random()-0.5)*2;}
  function mkB(d){const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,d,gl.STATIC_DRAW);return b;}
  const pB=mkB(pos),sB=mkB(sz),phB=mkB(ph),vB=mkB(vel);
  function bind(buf,name,n){gl.bindBuffer(gl.ARRAY_BUFFER,buf);const l=gl.getAttribLocation(prog,name);if(l<0)return;gl.enableVertexAttribArray(l);gl.vertexAttribPointer(l,n,gl.FLOAT,false,0,0);}
  const tL=gl.getUniformLocation(prog,'uTime'),mL=gl.getUniformLocation(prog,'uMouse');
  gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE);
  function draw(t){gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.useProgram(prog);bind(pB,'aPos',3);bind(sB,'aSize',1);bind(phB,'aPhase',1);bind(vB,'aVel',3);gl.uniform1f(tL,t/1000);gl.uniform2f(mL,pmx,pmy);gl.drawArrays(gl.POINTS,0,N);requestAnimationFrame(draw);}
  requestAnimationFrame(draw);
})();




// SCROLL REVEAL - extended for new classes
const ioNew = new IntersectionObserver(es => es.forEach(e => {
  if(e.isIntersecting) {
    e.target.classList.add('on');
    ioNew.unobserve(e.target);
  }
}), {threshold: .08});
document.querySelectorAll('.rv-left,.rv-right,.rv-scale,.rv-blur,.rv-flip').forEach(el => ioNew.observe(el));

// NUMBER COUNTER ANIMATION
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4); // ease-out-quart
    const current = Math.floor(ease * target);
    el.textContent = current + suffix;
    if(progress < 1) requestAnimationFrame(update);
    else { el.textContent = target + suffix; el.classList.add('pulsed'); }
  }
  requestAnimationFrame(update);
}
const counterObs = new IntersectionObserver(es => es.forEach(e => {
  if(e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }
}), {threshold:.5});
document.querySelectorAll('.counter-val').forEach(el => counterObs.observe(el));

// PARALLAX SCROLL DEPTH
window.addEventListener('scroll', () => {
  const sy = scrollY;
  document.querySelectorAll('.parallax-slow').forEach(el => {
    el.style.transform = `translateY(${sy * 0.08}px)`;
  });
  document.querySelectorAll('.parallax-mid').forEach(el => {
    el.style.transform = `translateY(${sy * 0.15}px)`;
  });
  document.querySelectorAll('.parallax-fast').forEach(el => {
    el.style.transform = `translateY(${sy * 0.25}px)`;
  });
}, {passive: true});

// CURSOR CLICK RIPPLE
document.addEventListener('click', e => {
  const ripple = document.createElement('div');
  ripple.style.cssText = `position:fixed;width:40px;height:40px;border-radius:50%;border:1.5px solid rgba(123,92,255,.7);pointer-events:none;z-index:9997;left:${e.clientX - 20}px;top:${e.clientY - 20}px;transform:scale(0);transition:transform .5s ease,opacity .5s ease;`;
  document.body.appendChild(ripple);
  setTimeout(() => { ripple.style.transform = 'scale(2.5)'; ripple.style.opacity = '0'; }, 10);
  setTimeout(() => ripple.remove(), 550);
});

// HOVER MICRO-INTERACTION on CTA buttons, text shimmer
document.querySelectorAll('.btn-p').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.backgroundSize = '200% auto';
    btn.style.animation = 'shimmer 1s linear infinite';
    btn.style.backgroundImage = 'linear-gradient(90deg,var(--p),var(--p2),var(--p3),var(--p))';
    btn.style.webkitBackgroundClip = 'initial';
    btn.style.webkitTextFillColor = '#fff';
    btn.style.backgroundClip = 'initial';
    btn.style.color = '#fff';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.animation = '';
    btn.style.backgroundSize = '';
    btn.style.backgroundImage = 'linear-gradient(135deg,var(--p),var(--p2))';
  });
});



// KEYBOARD ACCESSIBILITY - focus styles
document.addEventListener('keydown', e => {
  if(e.key === 'Tab') document.body.classList.add('kb-nav');
});
document.addEventListener('mousedown', () => document.body.classList.remove('kb-nav'));

// LAZY: skip loader on return visit
if(sessionStorage.getItem('visited')) {
  document.getElementById('loader').classList.add('hide');
} else {
  sessionStorage.setItem('visited','1');
}

// PREFERS-REDUCED-MOTION: disable canvas
if(window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
  const c = document.getElementById('c');
  if(c) c.style.display='none';
}

