const no=document.getElementById('no');const yes=document.getElementById('yes');
function move(){no.style.position='fixed';no.style.left=Math.random()*(window.innerWidth-100)+'px';no.style.top=Math.random()*(window.innerHeight-60)+'px';}
no.addEventListener('mouseover',move);no.addEventListener('click',e=>{e.preventDefault();move();});
yes.onclick=()=>{document.getElementById('q1').classList.add('hidden');document.getElementById('next').classList.remove('hidden');confetti();}
let c=0;function nextQ(){c++;if(c>=3)document.getElementById('final').classList.remove('hidden');}
function confetti(){for(let i=0;i<80;i++){let h=document.createElement('div');h.className='heart';h.innerHTML='❤';h.style.left=Math.random()*100+'vw';h.style.animationDuration=(2+Math.random()*3)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),5000);}}
