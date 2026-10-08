(function(){
var c=document.getElementById('gl');if(!window.THREE)return;
var r=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:true}),s=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,1,.1,100);cam.position.z=7;
var col=new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--acc').trim()||'#7fe0ff');
var g=new THREE.Group();s.add(g);
var k=new THREE.Mesh(new THREE.TorusKnotGeometry(1.8,.5,160,16),new THREE.MeshBasicMaterial({color:col,wireframe:true,transparent:true,opacity:.18}));g.add(k);
var n=500,p=new Float32Array(n*3);for(var i=0;i<n*3;i++)p[i]=(Math.random()-.5)*16;
var pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(p,3));
s.add(new THREE.Points(pg,new THREE.PointsMaterial({color:col,size:.04,transparent:true,opacity:.6})));
var mx=0,my=0;addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;
var ph=document.getElementById('ph');ph.style.transform='perspective(700px) rotateY('+mx*14+'deg) rotateX('+(-my*10)+'deg)'});
function rs(){var h=c.parentElement;r.setPixelRatio(Math.min(devicePixelRatio,innerWidth<800?1.5:2));r.setSize(h.clientWidth,h.clientHeight,false);cam.aspect=h.clientWidth/h.clientHeight;cam.updateProjectionMatrix();g.position.x=innerWidth>800?2.6:0}
rs();addEventListener('resize',rs);
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,t=0;
function f(){t+=.004;g.rotation.y=t+mx*1.2;g.rotation.x=t*.6+my*1;r.render(s,cam);if(!rm)requestAnimationFrame(f)}f();
})();
