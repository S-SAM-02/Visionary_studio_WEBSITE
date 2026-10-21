const menu=document.getElementById('menu');const nav=document.getElementById('navlinks');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();const dateInput=document.querySelector('input[name="date"]');if(dateInput){const now=new Date();dateInput.min=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10)}document.getElementById('bookingForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const name=String(f.get('name')||'').trim();const service=String(f.get('service')||'');const date=String(f.get('date')||'Not decided yet');const message=String(f.get('message')||'').trim();const lines=['Hi Visionary Studio! I would like to enquire about a shoot.','Name: '+name,'Shoot: '+service,'Preferred date: '+date,'Details: '+(message||'I would like to discuss details.')];window.open('https://wa.me/918095067027?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener,noreferrer')});
/* Subtle cinematic depth on pointer devices; disabled for touch/reduced motion. */
const hero=document.querySelector('.hero');
const heroMedia=document.querySelector('.hero-media');
if(hero&&heroMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
 hero.addEventListener('pointermove',e=>{
  const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  heroMedia.style.transform='translate3d('+(x*-9)+'px,'+(y*-6)+'px,-20px) scale(1.015)';
 });
 hero.addEventListener('pointerleave',()=>{heroMedia.style.transform='translate3d(0,0,-20px) scale(1)'});
}
