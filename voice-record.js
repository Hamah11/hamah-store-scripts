(function(){function h(){document.querySelectorAll('.social-share,.kalles-social-media,.at-share-btn-elements').forEach(function(e){e.style.setProperty('display','none','important')})}h();new MutationObserver(h).observe(document.documentElement,{childList:true,subtree:true})})();
(function(){
var tries=0;
function findInput(){var ins=document.querySelectorAll('input[type=file]');for(var i=0;i!==ins.length;i++){var el=ins[i];if(el.dataset.vr)continue;var p=el;for(var k=0;k!==4&&p;k++){p=p.parentElement;if(p&&p.innerText&&p.innerText.indexOf('\u062a\u0633\u062c\u064a\u0644 \u0635\u0648\u062a\u064a')!==-1)return el;}}return null;}
function toWav(ab){var d=ab.getChannelData(0),sr=ab.sampleRate,tr=16000,ratio=sr/tr,n=Math.floor(d.length/ratio),out=new Int16Array(n);for(var i=0;i!==n;i++){var s=Math.floor(i*ratio),e=Math.min(d.length,Math.floor((i+1)*ratio)),cnt=Math.max(0,e-s),sum=0;for(var j=0;j!==cnt;j++){sum+=d[s+j];}var v=cnt?sum/cnt:0;v=Math.max(-1,Math.min(1,v));out[i]=Math.round(v*32767);}var buf=new ArrayBuffer(44+n*2),dv=new DataView(buf);function w(o,t){for(var q=0;q!==t.length;q++)dv.setUint8(o+q,t.charCodeAt(q));}w(0,'RIFF');dv.setUint32(4,36+n*2,true);w(8,'WAVE');w(12,'fmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,1,true);dv.setUint32(24,tr,true);dv.setUint32(28,tr*2,true);dv.setUint16(32,2,true);dv.setUint16(34,16,true);w(36,'data');dv.setUint32(40,n*2,true);for(var m=0;m!==n;m++)dv.setInt16(44+m*2,out[m],true);return new Blob([buf],{type:'audio/wav'});}
function build(el){
el.dataset.vr='1';
var wrap=document.createElement('div');wrap.style.cssText='margin-top:12px;display:flex;flex-direction:column;gap:10px;align-items:flex-start';
var btn=document.createElement('button');btn.type='button';btn.style.cssText='background:#0E6B58;color:#fff;border:0;border-radius:999px;padding:8px 16px;font-size:14px;cursor:pointer';btn.textContent='\ud83c\udf99\ufe0f \u0633\u062c\u0651\u0644 \u0627\u0644\u0627\u0633\u0645 \u0628\u0635\u0648\u062a\u0643';
var up=document.createElement('label');up.style.cssText='display:inline-block;background:#6b7280;color:#fff;border:0;border-radius:999px;padding:8px 16px;font-size:14px;cursor:pointer';up.textContent='\ud83d\udcc2 \u0623\u0648 \u0627\u062e\u062a\u0631 \u0627\u0644\u0635\u0648\u062a \u0645\u0646 \u062c\u0647\u0627\u0632\u0643';
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
function put(file){var dt=new DataTransfer();dt.items.add(file);el.files=dt.files;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));audio.src=URL.createObjectURL(file);audio.style.display='block';msg.textContent='\u062a\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u2713 \u064a\u0645\u0643\u0646\u0643 \u0633\u0645\u0627\u0639\u0647 \u0623\u0648 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0633\u062c\u064a\u0644';}
function finish(blob){var fr=new FileReader();fr.onload=function(){var AC=window.AudioContext||window.webkitAudioContext;var ac=new AC();ac.decodeAudioData(fr.result,function(ab){put(new File([toWav(ab)],'recording.wav',{type:'audio/wav'}));try{ac.close();}catch(e){}},function(){var ext=blob.type.indexOf('mp4')!==-1?'m4a':'webm';put(new File([blob],'recording.'+ext,{type:blob.type}));});};fr.readAsArrayBuffer(blob);}
btn.onclick=function(){
if(rec&&rec.state==='recording'){rec.stop();return;}
if(!navigator.mediaDevices||!window.MediaRecorder){msg.textContent='\u0645\u062a\u0635\u0641\u062d\u0643 \u0644\u0627 \u064a\u062f\u0639\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0647\u0646\u0627\u060c \u0627\u0631\u0641\u0639 \u0645\u0644\u0641\u0627\u064b \u0635\u0648\u062a\u064a\u0627\u064b \u0628\u062f\u0644\u0627\u064b \u0645\u0646\u0647.';return;}
navigator.mediaDevices.getUserMedia({audio:true}).then(function(s){
stream=s;chunks=[];rec=new MediaRecorder(s);
rec.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data);};
rec.onstop=function(){stopAll();btn.textContent='\ud83c\udf99\ufe0f \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0633\u062c\u064a\u0644';msg.textContent='\u062c\u0627\u0631\u064d \u062a\u062c\u0647\u064a\u0632 \u0627\u0644\u062a\u0633\u062c\u064a\u0644...';finish(new Blob(chunks,{type:rec.mimeType||'audio/webm'}));};
rec.start();sec=0;btn.textContent='\u23f9 \u0625\u064a\u0642\u0627\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644';msg.textContent='\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u0633\u062c\u064a\u0644... 0 \u062b';
timer=setInterval(function(){sec++;msg.textContent='\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u0633\u062c\u064a\u0644... '+sec+' \u062b';if(sec===MAX&&rec.state==='recording')rec.stop();},1000);
}).catch(function(){msg.textContent='\u0644\u0645 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u064a\u0643\u0631\u0648\u0641\u0648\u0646. \u0627\u0633\u0645\u062d \u0628\u0647 \u0645\u0646 \u0627\u0644\u0645\u062a\u0635\u0641\u062d\u060c \u0623\u0648 \u0627\u0631\u0641\u0639 \u0645\u0644\u0641\u0627\u064b \u0635\u0648\u062a\u064a\u0627\u064b.';});
};
}
var iv=setInterval(function(){tries++;try{var el=findInput();if(el){build(el);clearInterval(iv);}}catch(e){}if(tries===25)clearInterval(iv);},700);
})();
(function(){
if(document.URL.indexOf('/products/')===-1)return;
function rad(){
var els=document.querySelectorAll('td,span,div,p');
for(var i=0;i!==els.length;i++){
var e=els[i];var cs=getComputedStyle(e);var bg=cs.backgroundColor;
if(bg==='rgb(223, 243, 230)'||bg==='rgb(18, 140, 92)'){e.style.borderRadius='999px';continue;}
if(e.tagName!=='TD')continue;
var r=0;
if(bg==='rgb(14, 107, 88)')r=14;
else if(bg==='rgb(245, 248, 253)')r=18;
else if(cs.borderTopStyle!=='none'&&cs.borderTopColor==='rgb(234, 240, 237)')r=18;
if(r===0)continue;
var tb=e.closest('table');if(!tb)continue;
tb.style.borderCollapse='separate';tb.style.borderSpacing='0';tb.style.borderRadius=r+'px';tb.style.overflow='hidden';
e.style.borderRadius=(bg==='rgb(245, 248, 253)')?'18px 18px 0px 0px':r+'px';
}
}
var n=0;var iv=setInterval(function(){n++;try{rad();}catch(e){}if(n===6)clearInterval(iv);},800);
})();
var hv=3;
