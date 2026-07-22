const yes=document.getElementById('yesBtn');
const no=document.getElementById('noBtn');
const msgs=['Are you sure? 🥺','Think again ❤️','Impossible 😜','Pleaseee 💕','You love me 😁'];
let i=0;
function move(){
 no.style.position='fixed';
 no.style.left=Math.random()*(innerWidth-120)+'px';
 no.style.top=Math.random()*(innerHeight-60)+'px';
 no.textContent=msgs[i++%msgs.length];
}
no.addEventListener('mouseenter',move);
no.addEventListener('click',e=>{e.preventDefault();move();});

yes.onclick=()=>{
 document.getElementById('step1').classList.add('hidden');
 document.getElementById('step2').classList.remove('hidden');
 confetti();
}
function next(){
 document.getElementById('step2').classList.add('hidden');
 document.getElementById('step3').classList.remove('hidden');
 confetti();
}
function next2(){
 document.getElementById('step3').classList.add('hidden');
 document.getElementById('final').classList.remove('hidden');
 confetti();
}
function confetti(){
 for(let j=0;j<120;j++){
  let h=document.createElement('div');
  h.className='heart';
  h.innerHTML=Math.random()>.5?'❤️':'💖';
  h.style.left=Math.random()*100+'vw';
  h.style.animationDuration=(2+Math.random()*3)+'s';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),5000);
 }
}
