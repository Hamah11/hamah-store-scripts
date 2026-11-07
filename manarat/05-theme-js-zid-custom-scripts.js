function hzA(s){return s.replace(/[A-r]/g,function(c){return String.fromCharCode(c.charCodeAt(0)+1504)})}
(function(){function h(){document.querySelectorAll('.social-share,.kalles-social-media,.at-share-btn-elements').forEach(function(e){e.style.setProperty('display','none','important')})}h();new MutationObserver(h).observe(document.documentElement,{childList:true,subtree:true})})();
(function(){
var tries=0;
function findInput(){var ins=document.querySelectorAll('input[type=file]');for(var i=0;i!==ins.length;i++){var el=ins[i];if(el.dataset.vr)continue;var p=el;for(var k=0;k!==4&&p;k++){p=p.parentElement;if(p&&p.innerText&&p.innerText.indexOf(hzA('JSLjd UhJj'))!==-1)return el;}}return null;}
function toWav(ab){var d=ab.getChannelData(0),sr=ab.sampleRate,tr=16000,ratio=sr/tr,n=Math.floor(d.length/ratio),out=new Int16Array(n);for(var i=0;i!==n;i++){var s=Math.floor(i*ratio),e=Math.min(d.length,Math.floor((i+1)*ratio)),cnt=Math.max(0,e-s),sum=0;for(var j=0;j!==cnt;j++){sum+=d[s+j];}var v=cnt?sum/cnt:0;v=Math.max(-1,Math.min(1,v));out[i]=Math.round(v*32767);}var buf=new ArrayBuffer(44+n*2),dv=new DataView(buf);function w(o,t){for(var q=0;q!==t.length;q++)dv.setUint8(o+q,t.charCodeAt(q));}w(0,'RIFF');dv.setUint32(4,36+n*2,true);w(8,'WAVE');w(12,'fmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,1,true);dv.setUint32(24,tr,true);dv.setUint32(28,tr*2,true);dv.setUint16(32,2,true);dv.setUint16(34,16,true);w(36,'data');dv.setUint32(40,n*2,true);for(var m=0;m!==n;m++)dv.setInt16(44+m*2,out[m],true);return new Blob([buf],{type:'audio/wav'});}
function build(el){
el.dataset.vr='1';
var wrap=document.createElement('div');wrap.style.cssText='margin-top:12px;display:flex;flex-direction:column;gap:10px;align-items:flex-start';
var btn=document.createElement('button');btn.type='button';btn.style.cssText='background:#0E6B58;color:#fff;border:0;border-radius:999px;padding:8px 16px;font-size:14px;cursor:pointer';btn.textContent=('\ud83c\udf99\ufe0f'+hzA(' SLqd GdGSe HUhJc'));
var up=document.createElement('label');up.style.cssText='display:inline-block;background:#6b7280;color:#fff;border:0;border-radius:999px;padding:8px 16px;font-size:14px;cursor:pointer';up.textContent=('\ud83d\udcc2'+hzA(' Ch GNJQ GdUhJ ef LgGRc'));
var msg=document.createElement('span');msg.style.cssText='font-size:13px;color:#4b5563';
var audio=document.createElement('audio');audio.controls=true;audio.style.cssText='display:none;max-width:100%';
wrap.appendChild(btn);wrap.appendChild(up);wrap.appendChild(msg);wrap.appendChild(audio);
var parent=el.parentNode,gp=parent.parentNode;
parent.style.cssText='display:none';
gp.appendChild(wrap);
up.appendChild(el);
el.style.cssText='position:absolute;width:1px;height:1px;opacity:0;overflow:hidden';
var rec=null,chunks=[],stream=null,timer=null,sec=0,MAX=30;
function stopAll(){if(timer){clearInterval(timer);timer=null;}if(stream){stream.getTracks().forEach(function(t){t.stop();});stream=null;}}
function put(file){var dt=new DataTransfer();dt.items.add(file);el.files=dt.files;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));audio.src=URL.createObjectURL(file);audio.style.display='block';msg.textContent=(hzA('Je GdJSLjd ')+'\u2713'+hzA(' jecfc SeGYg Ch EYGOI GdJSLjd'));}
function finish(blob){var fr=new FileReader();fr.onload=function(){var AC=window.AudioContext||window.webkitAudioContext;var ac=new AC();ac.decodeAudioData(fr.result,function(ab){put(new File([toWav(ab)],'recording.wav',{type:'audio/wav'}));try{ac.close();}catch(e){}},function(){var ext=blob.type.indexOf('mp4')!==-1?'m4a':'webm';put(new File([blob],'recording.'+ext,{type:blob.type}));});};fr.readAsArrayBuffer(blob);}
btn.onclick=function(){
if(rec&&rec.state==='recording'){rec.stop();return;}
if(!navigator.mediaDevices||!window.MediaRecorder){msg.textContent=(hzA('eJUaMc dG jOYe GdJSLjd gfG')+'\u060c'+hzA(' GQaY edaGk UhJjGk HOdGk efg.'));return;}
navigator.mediaDevices.getUserMedia({audio:true}).then(function(s){
stream=s;chunks=[];rec=new MediaRecorder(s);
rec.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data);};
rec.onstop=function(){stopAll();btn.textContent=('\ud83c\udf99\ufe0f'+hzA(' EYGOI GdJSLjd'));msg.textContent=hzA('LGQm JLgjR GdJSLjd...');finish(new Blob(chunks,{type:rec.mimeType||'audio/webm'}));};
rec.start();sec=0;btn.textContent=('\u23f9'+hzA(' EjbGa GdJSLjd'));msg.textContent=hzA('LGQm GdJSLjd... 0 K');
timer=setInterval(function(){sec++;msg.textContent=hzA('LGQm GdJSLjd... ')+sec+hzA(' K');if(sec===MAX&&rec.state==='recording')rec.stop();},1000);
}).catch(function(){msg.textContent=(hzA('de fJecf ef GSJNOGe GdejcQhahf. GSeM Hg ef GdeJUaM')+'\u060c'+hzA(' Ch GQaY edaGk UhJjGk.'));});
};
}
var iv=setInterval(function(){tries++;try{var el=findInput();if(el){build(el);clearInterval(iv);}}catch(e){}if(tries===25)clearInterval(iv);},700);
})();
(function(){
if(document.URL.indexOf('/products/')===-1)return;
function setIf(e,p,v){if(!e.style[p])e.style[p]=v;}
function pill(e,pad){setIf(e,'display','inline-block');setIf(e,'lineHeight','1.6');setIf(e,'padding',pad);setIf(e,'textAlign','center');e.style.borderRadius='999px';}
function rad(){
var ps=document.querySelectorAll('p');
for(var k=0;k!==ps.length;k++){var t=(ps[k].textContent||'').trim();if(t.indexOf('document.addEventListener')===0)ps[k].style.display='none';}
var els=document.querySelectorAll('td,span,strong,b,div');
for(var i=0;i!==els.length;i++){
var e=els[i];var cs=getComputedStyle(e);var bg=cs.backgroundColor;
if(bg==='rgb(223, 243, 230)'){pill(e,'6px clamp(7px, 1.5vw, 10px)');continue;}
if(bg==='rgb(18, 140, 92)'){pill(e,'clamp(3px, 0.8vw, 5px) clamp(6px, 1vw, 9px)');setIf(e,'color','#ffffff');continue;}
if(e.tagName!=='TD')continue;
var r=0;
if(bg==='rgb(14, 107, 88)'){r=14;setIf(e,'padding','14px 12px');setIf(e,'textAlign','center');}
else if(bg==='rgb(245, 248, 253)'){r=18;setIf(e,'padding','6px 16px');}
else if(cs.borderTopStyle!=='none'&&cs.borderTopColor==='rgb(234, 240, 237)'){r=18;setIf(e,'padding','12px 18px');}
if(r===0)continue;
var tb=e.closest('table');if(!tb)continue;
tb.style.borderCollapse='separate';tb.style.borderSpacing='0';tb.style.borderRadius=r+'px';tb.style.overflow='hidden';
e.style.borderRadius=(bg==='rgb(245, 248, 253)')?'18px 18px 0px 0px':r+'px';
}
}
var n=0;var iv=setInterval(function(){n++;try{rad();}catch(e){}if(n===6)clearInterval(iv);},800);
})();
var hv=8;
(function(){
if(document.URL.indexOf('media-center')===-1)return;
var P='https:'+'/'+'/';
var ICV='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHJlY3QgeD0iMiIgeT0iNSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMyIvPjxwYXRoIGQ9Ik0xNyAxMGw1LTN2MTBsLTUtM3oiLz48L3N2Zz4=';
var ICP='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTMgNWEyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6bTIgMTFsNC01IDMgNCAzLTMgNCA1VjZINXoiLz48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iMS42Ii8+PC9zdmc+';
var CSS='.hm-wrap{max-width:1140px;margin:0 auto;padding:0 6px}.hm-intro{text-align:center;color:#4b5563;font-size:16px;margin:0 0 18px}.hm-tabs{display:flex;justify-content:center;gap:12px;margin:0 0 26px;flex-wrap:wrap}.hm-tab{display:inline-flex;align-items:center;gap:8px;border:2px solid #126762;background:#fff;color:#126762;border-radius:999px;padding:9px 22px;font-size:16px;font-weight:700;cursor:pointer;line-height:1;font-family:inherit}.hm-tab.on{background:#126762;color:#fff}.hm-tab i{width:22px;height:22px;display:inline-block;background:currentColor;-webkit-mask:var(--ic) center/contain no-repeat;mask:var(--ic) center/contain no-repeat}.hm-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}@media(max-width:991px){.hm-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.hm-grid{grid-template-columns:1fr}}.hm-card{background:#fff;border:1px solid #e3ebe8;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.06);display:flex;flex-direction:column}.hm-thumb{position:relative;cursor:pointer;aspect-ratio:16/9;background:#e9efed center/cover no-repeat}.hm-thumb.ph{aspect-ratio:4/3;background-position:top center}.hm-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.12)}.hm-play span{width:58px;height:58px;border-radius:50%;background:rgba(18,103,98,.93);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.3)}.hm-play b{display:block;width:0;height:0;border-style:solid;border-width:10px 0 10px 18px;border-color:transparent transparent transparent #fff;margin-right:-4px}.hm-tag{position:absolute;top:10px;right:10px;background:#126762;color:#fff;font-size:12px;padding:4px 11px;border-radius:999px;line-height:1.2}.hm-body{padding:12px 14px 14px;text-align:right;display:flex;flex-direction:column;gap:10px;flex:1}.hm-title{font-size:15px;font-weight:700;color:#1f2937;margin:0;line-height:1.6;flex:1}.hm-btn{display:inline-block;align-self:flex-start;background:#126762;color:#fff;padding:8px 18px;border-radius:999px;font-size:13px;text-decoration:none;font-weight:700}.hm-btn:hover{background:#0e5550;color:#fff}.hm-foot{text-align:center;margin:30px 0 0;color:#4b5563}.hm-foot a{display:inline-block;margin-top:10px;background:#126762;color:#fff;padding:11px 30px;border-radius:999px;text-decoration:none;font-weight:700}.hm-modal{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:99999;display:none;align-items:center;justify-content:center;padding:16px}.hm-modal.on{display:flex}.hm-box{width:min(960px,100%);position:relative}.hm-box iframe{width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:#000;display:block}.hm-box img{max-width:100%;max-height:86vh;display:block;margin:0 auto;border-radius:12px}.hm-x{position:fixed;top:12px;left:18px;color:#fff;font-size:38px;cursor:pointer;line-height:1;z-index:2}.hm-cap{color:#fff;text-align:center;margin:10px 0 0;font-size:15px}';
function el(t,c,txt){var e=document.createElement(t);if(c)e.className=c;if(txt)e.textContent=txt;return e;}
function build(){
var pre=document.querySelector('.kalles-section pre');if(!pre)return;
var sec=pre.closest('.kalles-section');if(sec.dataset.hm)return;
var tabs=pre.querySelectorAll('table');if(tabs.length===0)return;
sec.dataset.hm='1';
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
var vids=[],phs=[];
for(var i=0;i!==tabs.length;i++){var t=tabs[i];var h3=t.querySelector('h3');var a=t.querySelector('a[href*="/products"]');var it={title:h3?h3.textContent.trim():'',link:a?a.getAttribute('href'):'/products',btn:a?a.textContent.replace('\u2190','').trim():''};
var fr=t.querySelector('iframe');var im=t.querySelector('img');
if(fr){var m=fr.getAttribute('src').match(/embed\/([A-Za-z0-9_-]+)/);if(m){it.id=m[1];vids.push(it);}}
else if(im){it.src=im.getAttribute('src');phs.push(it);}}
if(vids.length+phs.length===0)return;
var ps=pre.querySelectorAll('p');var intro='',footTxt='',footHref='/products',footBtn='';
for(var k=0;k!==ps.length;k++){var tx=ps[k].textContent.trim();if(!intro&&tx&&!ps[k].querySelector('a')&&!ps[k].closest('table'))intro=tx;}
for(var k2=ps.length-1;k2!==-1;k2--){var pp=ps[k2];if(pp.closest('table'))continue;var aa=pp.querySelector('a');if(aa&&!footBtn){footBtn=aa.textContent.replace('\u2190','').trim();footHref=aa.getAttribute('href');}else if(pp.textContent.trim()&&!footTxt&&footBtn){footTxt=pp.textContent.trim();break;}}
pre.style.display='none';
var wrap=el('div','hm-wrap');
if(intro)wrap.appendChild(el('p','hm-intro',intro));
var bar=el('div','hm-tabs');var gv=el('div','hm-grid'),gp=el('div','hm-grid');gp.style.display='none';
function tab(label,ic,on){var b=el('button','hm-tab'+(on?' on':''));b.type='button';var ii=el('i');ii.style.setProperty('--ic','url("'+ic+'")');b.appendChild(ii);b.appendChild(el('span','',label));return b;}
var tv=tab(hzA('GdajOjhgGJ'),ICV,true),tp=tab(hzA('GdUhQ'),ICP,false);
function show(which){var v=which==='v';tv.classList.toggle('on',v);tp.classList.toggle('on',!v);gv.style.display=v?'grid':'none';gp.style.display=v?'none':'grid';}
tv.onclick=function(){show('v');};tp.onclick=function(){show('p');};
bar.appendChild(tv);if(phs.length)bar.appendChild(tp);
var modal=el('div','hm-modal'),box=el('div','hm-box'),x=el('span','hm-x','\u00d7'),cap=el('p','hm-cap');modal.appendChild(x);modal.appendChild(box);
function close(){modal.classList.remove('on');box.innerHTML='';document.body.style.overflow='';}
function open(node,c){box.innerHTML='';box.appendChild(node);cap.textContent=c||'';box.appendChild(cap);modal.classList.add('on');document.body.style.overflow='hidden';}
modal.onclick=function(e){if(e.target===modal||e.target===x)close();};
document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
function card(it,isV){var c=el('div','hm-card');var th=el('div','hm-thumb'+(isV?'':' ph'));th.style.backgroundImage='url("'+(isV?P+'img.youtube.com/vi/'+it.id+'/hqdefault.jpg':it.src)+'")';
if(isV){var pl=el('div','hm-play');var sp=el('span');sp.appendChild(el('b'));pl.appendChild(sp);th.appendChild(pl);}
th.appendChild(el('span','hm-tag',isV?hzA('ajOjh'):hzA('UhQ')));
th.onclick=function(){if(isV){var f=document.createElement('iframe');f.setAttribute('allow','autoplay; fullscreen; picture-in-picture');f.setAttribute('allowfullscreen','');f.src=P+'www.youtube.com/embed/'+it.id+'?autoplay=1&rel=0';open(f,it.title);}else{var g=document.createElement('img');g.src=it.src;g.alt=it.title;open(g,it.title);}};
c.appendChild(th);var bd=el('div','hm-body');bd.appendChild(el('h3','hm-title',it.title));if(it.btn){var b=el('a','hm-btn',it.btn+' \u2190');b.href=it.link;bd.appendChild(b);}c.appendChild(bd);return c;}
for(var q=0;q!==vids.length;q++)gv.appendChild(card(vids[q],true));
for(var r=0;r!==phs.length;r++)gp.appendChild(card(phs[r],false));
wrap.appendChild(bar);wrap.appendChild(gv);wrap.appendChild(gp);
if(footTxt||footBtn){var ft=el('div','hm-foot');if(footTxt)ft.appendChild(el('div','',footTxt));if(footBtn){var fa=el('a','',footBtn+' \u2190');fa.href=footHref;ft.appendChild(fa);}wrap.appendChild(ft);}
sec.appendChild(wrap);document.body.appendChild(modal);
if(document.URL.indexOf('tab=photos')!==-1&&phs.length)show('p');
}
var n=0;var iv=setInterval(function(){n++;try{build();}catch(e){}if(n===8||document.querySelector('.kalles-section[data-hm]'))clearInterval(iv);},500);
})();
(function(){
var LINK='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLjYgMTMuNGExIDEgMCAwIDEgMC0xLjRsMi44LTIuOGExIDEgMCAwIDEgMS40IDEuNGwtMi44IDIuOGExIDEgMCAwIDEtMS40IDB6Ii8+PHBhdGggZD0iTTguNSAxNy41YTMuNSAzLjUgMCAwIDEtMi41LTZsMi0yYTEgMSAwIDEgMSAxLjQgMS40bC0yIDJhMS41IDEuNSAwIDAgMCAyLjEgMi4xbDItMmExIDEgMCAxIDEgMS40IDEuNGwtMiAyYTMuNSAzLjUgMCAwIDEtMi40IDEuMXoiLz48cGF0aCBkPSJNMTUuNSAxM2ExIDEgMCAwIDEtLjctMS43bDItMmExLjUgMS41IDAgMCAwLTIuMS0yLjFsLTIgMmExIDEgMCAxIDEtMS40LTEuNGwyLTJhMy41IDMuNSAwIDAgMSA1IDVsLTIgMmExIDEgMCAwIDEtLjguMnoiLz48L3N2Zz4=';
var LOCK='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTcgMTBWOGE1IDUgMCAwIDEgMTAgMHYyaDFhMiAyIDAgMCAxIDIgMnY3YTIgMiAwIDAgMS0yIDJINmEyIDIgMCAwIDEtMi0ydi03YTIgMiAwIDAgMSAyLTJoMXptMiAwaDZWOGEzIDMgMCAwIDAtNiAwdjJ6bTMgNGExLjUgMS41IDAgMCAwLS44IDIuOFYxOGEuOC44IDAgMCAwIDEuNiAwdi0xLjJBMS41IDEuNSAwIDAgMCAxMiAxNHoiLz48L3N2Zz4=';
var CSS='#ntheader::before,#ntheader::after,header::before,header::after,.kalles-section-header_banner::before,.kalles-section-header_banner::after{content:none !important;display:none !important}.hg-bar{background:#F3F4F6;direction:rtl;font-family:inherit;color:#161616;border-bottom:1px solid #e5e7eb;position:relative;z-index:1001}.hg-in{max-width:1400px;margin:0 auto;padding:0 32px}.hg-head{display:flex;align-items:center;gap:10px;min-height:44px;padding:6px 0;flex-wrap:wrap}.hg-flag{width:20px;height:14px;flex:0 0 auto;background:linear-gradient(#fff,#fff) 4px 9px/12px 1.5px no-repeat,#006C35;border-radius:2px}.hg-title{margin:0;font-size:14px;font-weight:600;line-height:20px;color:#161616}.hg-btn{display:inline-flex;align-items:center;gap:4px;color:#1B8354;cursor:pointer;font-size:14px;line-height:20px;background:none;border:0;padding:0;font-family:inherit}.hg-btn i{width:7px;height:7px;display:inline-block;border:solid currentColor;border-width:0 2px 2px 0;transform:rotate(45deg);margin-top:-4px;transition:transform .3s ease}.hg-bar.open .hg-btn i{transform:rotate(-135deg);margin-top:4px}.hg-body{display:none;padding:20px 0 24px}.hg-bar.open .hg-body{display:block}.hg-grid{display:flex;gap:32px;flex-wrap:wrap;margin-bottom:16px}.hg-box{display:flex;align-items:flex-start;gap:16px;flex:1 1 360px}.hg-ic{width:48px;height:48px;border:1px solid #067647;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:0 0 auto}.hg-ic i{width:22px;height:22px;display:block;background:#067647;-webkit-mask:var(--ic) center/contain no-repeat;mask:var(--ic) center/contain no-repeat}.hg-box h4{margin:0 0 6px;font-size:16px;font-weight:600;color:#161616;line-height:1.5}.hg-box h4 span{color:#1B8354}.hg-box p{margin:0;color:#384250;font-size:14px;line-height:1.6}.hg-reg{display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:8px;background:#fff;font-size:14px;color:#161616;flex-wrap:wrap}.hg-reg a{color:#1B8354;text-decoration:underline;font-weight:600}@media(max-width:768px){.hg-in{padding:0 14px}.hg-head{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;min-height:48px}.hg-title{font-size:13px}.hg-btn{grid-column:1 / -1;justify-self:start;font-size:13px}.hg-grid{flex-direction:column;gap:16px}.hg-box{flex:0 0 auto}.hg-body{padding:14px 0 18px}}';
function el(t,c,txt){var e=document.createElement(t);if(c)e.className=c;if(txt)e.textContent=txt;return e;}
function build(){
if(document.querySelector('.hg-bar'))return true;
var hd=document.getElementById('ntheader')||document.querySelector('header');
if(!hd||!hd.parentNode)return false;
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
var bar=el('div','hg-bar'),inn=el('div','hg-in'),head=el('div','hg-head'),body=el('div','hg-body');
head.appendChild(el('span','hg-flag'));
head.appendChild(el('p','hg-title',hzA('ehbY QSej JGHY dLgI CgdjI eSLdI HGdeedcI GdYQHjI GdSYhOjI')));
var btn=el('button','hg-btn');btn.type='button';btn.setAttribute('aria-expanded','false');btn.appendChild(el('span','',(hzA('cja JJMbb')+'\u061f')));btn.appendChild(el('i'));head.appendChild(btn);
function box(ic,title,tspan,p){var b=el('div','hg-box');var w=el('div','hg-ic');var i=el('i');i.style.setProperty('--ic','url("'+ic+'")');w.appendChild(i);b.appendChild(w);var d=el('div');var h=el('h4','',title);if(tspan){var sp=el('span','',tspan);sp.setAttribute('dir','ltr');h.appendChild(sp);}d.appendChild(h);d.appendChild(el('p','',p));b.appendChild(d);return b;}
var grid=el('div','hg-grid');
grid.appendChild(box(LINK,hzA('QhGHW GdehGbY GdQSejI GdehKhbI JfJgj HfWGb eSLd QSejkG eKd '),'.sa',(hzA('JCcO Cf QGHW GdehbY GdPj JJHQY ajg gh ')+'hamh'+'.s'+'a'+hzA(' bHd EONGd Cj HjGfGJ.'))));
grid.appendChild(box(LOCK,hzA('GdehGbY GdBefI JSJNOe HQhJhchd '),'HTTPS',hzA('JMbb OGFekG ef hLhO QeR Gdbad aj TQjW GdYfhGf dMeGjI HjGfGJc hJTajQgG.')));
body.appendChild(grid);
var reg=el('div','hg-reg');reg.appendChild(el('span','',hzA('GdLeYjI eSLdI dOi GdeQcR GdhWfj dJfejI GdbWGY ZjQ GdQHMj HQbe:')));var a=el('a','','1000688400');a.href='https:'+'/'+'/ncnp.gov.sa/ar';a.target='_blank';a.rel='noopener';reg.appendChild(a);body.appendChild(reg);
inn.appendChild(head);inn.appendChild(body);bar.appendChild(inn);
function toggle(){var o=!bar.classList.contains('open');bar.classList.toggle('open',o);btn.setAttribute('aria-expanded',o?'true':'false');}
btn.onclick=function(e){e.stopPropagation();toggle();};
head.onclick=function(){toggle();};
hd.parentNode.insertBefore(bar,hd);
return true;
}
var n=0;var iv=setInterval(function(){n++;var ok=false;try{ok=build();}catch(e){}if(ok||n===10)clearInterval(iv);},300);
})();
