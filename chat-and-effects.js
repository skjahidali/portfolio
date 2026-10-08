(function(){
var KB="Sk Jahid Ali, Kolkata, India. Head of Digital Operation at NI Group (Jan 2026 to now): AI prompt-engineering automation, responsive websites with SEO/AEO/GEO, IT support, CRM, Meta Ads, Google Ads, lead generation. Before: Digital Marketing Manager at GeoAlgo Technologies (Dec 2024-Jan 2026), SEO at Webvio Technologies (Jul-Dec 2024), digital intern at Martian Corporation. B.Tech Electrical Engineering, Aliah University (CGPA 7.06). Training at CESC and WBSETCL. Project: smart energy meter on ESP32 with IoT dashboard. Websites built: nigrouprealty.com, beplkol.com, rizqone.com. Skills: HTML, CSS, JS, MATLAB, GitHub, VS Code, NeoDove CRM, HRMS, generative AI, SEO, AEO, GEO, SMO, ads. Languages: Bengali, English, Hindi. Student coordinator of the Institution's Innovation Council; Aliah University Kabaddi team captain at AIU competitions. Open to freelance: websites, SEO/AEO/GEO, ads and lead generation, AI automation and chatbots. Contact: skjahid466@gmail.com, +91 62963 76653. Social: WhatsApp +91 62963 76653, GitHub, Instagram @banglatonic, LinkedIn and Facebook as Sk Jahid Ali. Also started a dating app project.";
var P=document.getElementById('cbp'),M=document.getElementById('ms'),I=document.getElementById('ci'),hist=[],busy=false,sm=null,tried=false;
function add(c,x){var d=document.createElement('div');d.className='m '+c;d.textContent=x;M.appendChild(d);M.scrollTop=M.scrollHeight;return d}
function fb(q){q=q.toLowerCase();
if(/hire|freelanc|price|cost|project|work with/.test(q))return"Jahid takes freelance projects: websites, SEO/AEO/GEO, ads and lead generation, and AI automation. Email skjahid466@gmail.com or call +91 62963 76653.";
if(/site|web|portfolio/.test(q))return"He built nigrouprealty.com, beplkol.com and rizqone.com using HTML, CSS and JavaScript with SEO, AEO and GEO optimization.";
if(/seo|aeo|geo|ads|market/.test(q))return"He ran multi-channel campaigns at GeoAlgo and now handles Meta Ads, Google Ads and lead generation at NI Group, with SEO, AEO and GEO strategy.";
if(/ai|automat|prompt/.test(q))return"He automates workflows with AI prompt engineering and CRM tooling, and builds chatbots and lead pipelines.";
if(/educat|study|degree|univers|engineer/.test(q))return"B.Tech in Electrical Engineering at Aliah University, Kolkata, CGPA 7.06, with training at CESC and WBSETCL.";
return"Jahid is Head of Digital Operation at NI Group in Kolkata, working on web development, SEO, ads and AI automation. Ask about his projects, skills or freelance work, or email skjahid466@gmail.com.";}
async function send(q){if(!q||busy)return;busy=true;I.value='';document.getElementById('sg').style.display='none';add('u',q);hist.push({r:'Visitor',c:q});var b=add('b','...');
try{if(!tried){tried=true;try{var s=await claude.use('sample');sm=s}catch(e){sm=null}}
if(!sm)throw 0;
var p="You are the assistant on Sk Jahid Ali's portfolio site. Answer visitors in 1 to 3 short sentences, using only these facts. If something is not covered, say you don't know and suggest emailing him. Never invent clients, prices or results.\nFACTS: "+KB+"\nCONVERSATION:\n"+hist.slice(-8).map(function(h){return h.r+': '+h.c}).join('\n')+"\nAssistant:";
var r=await sm(p,{cache:false,modelTier:'quick',onText:function(o){b.textContent=o.text;M.scrollTop=M.scrollHeight}});
b.textContent=r.text||fb(q)}catch(e){b.textContent=fb(q)}
hist.push({r:'Assistant',c:b.textContent});busy=false}
document.getElementById('cbb').onclick=function(){P.classList.toggle('o');if(!M.children.length){add('b',"Hi, I'm Jahid's AI assistant. What would you like to know?");['What does he build?','Can I hire him?','Which sites has he made?'].forEach(function(x){var k=document.createElement('button');k.textContent=x;k.onclick=function(){send(x)};document.getElementById('sg').appendChild(k)})}};
document.getElementById('cs').onclick=function(){send(I.value.trim())};I.onkeydown=function(e){if(e.key==='Enter')send(I.value.trim())};
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.card,.svc,.q,.lab,.tl div').forEach(function(el){el.classList.add('rv');o.observe(el)});
document.querySelectorAll('.card,.svc,.q').forEach(function(el){el.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;var r=el.getBoundingClientRect();el.style.transform='perspective(800px) rotateY('+((e.clientX-r.left)/r.width-.5)*8+'deg) rotateX('+(-((e.clientY-r.top)/r.height-.5))*8+'deg)'});el.addEventListener('pointerleave',function(){el.style.transform=''})});
})();
