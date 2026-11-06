/* hamah.sa voice record button */
(function(){
if(location.pathname.indexOf('/products/')!==0)return;
var tries=0;
function findInput(){var ins=document.querySelectorAll('input[type=file]');for(var i=0;i<ins.length;i++){var el=ins[i];if(el.dataset.vr)continue;var p=el;for(var k=0;k<4&&p;k++){p=p.parentElement;if(p&&p.innerText&&p.innerText.indexOf('تسجيل صوتي')>-1)return el;}}return null;}
function toWav(ab){var d=ab.getChannelData(0),sr=ab.sampleRate,tr=16000,ratio=sr/tr,n=Math.floor(d.length/ratio),out=new Int16Array(n);for(var i=0;i<n;i++){var s=Math.floor(i*ratio),e=Math.min(d.length,Math.floor((i+1)*ratio)),sum=0,c=0;for(var j=s;j<e;j++){sum+=d[j];c++;}var v=c?sum/c:0;v=Math.max(-1,Math.min(1,v));out[i]=v<0?v*32768:v*32767;}var buf=new ArrayBuffer(44+n*2),dv=new DataView(buf);function w(o,t){for(var q=0;q<t.length;q++)dv.setUint8(o+q,t.charCodeAt(q));}w(0,'RIFF');dv.setUint32(4,36+n*2,true);w(8,'WAVE');w(12,'fmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,1,true);dv.setUint32(24,tr,true);dv.setUint32(28,tr*2,true);dv.setUint16(32,2,true);dv.setUint16(34,16,true);w(36,'data');dv.setUint32(40,n*2,true);for(var m=0;m<n;m++)dv.setInt16(44+m*2,out[m],true);return new Blob([buf],{type:'audio/wav'});}
function build(el){
el.dataset.vr='1';
var wrap=document.createElement('div');wrap.style.cssText='margin-top:12px;display:flex;flex-direction:column;gap:10px;align-items:flex-start';
var btn=document.createElement('button');btn.type='button';btn.style.cssText='background:#0E6B58;color:#fff;border:0;border-radius:999px;padding:8px 16px;font-size:14px;cursor:pointer';btn.textContent='🎙️ سجّل الاسم بصوتك';
var msg=document.createElement('span');msg.style.cssText='font-size:13px;color:#4b5563';
var audio=document.createElement('audio');audio.controls=true;audio.style.cssText='display:none;max-width:100%';
wrap.appendChild(btn);wrap.appendChild(msg);wrap.appendChild(audio);
el.parentNode.insertBefore(wrap,el.nextSibling);
var rec=null,chunks=[],stream=null,timer=null,sec=0,MAX=30;
function stopAll(){if(timer){clearInterval(timer);timer=null;}if(stream){stream.getTracks().forEach(function(t){t.stop();});stream=null;}}
function put(file){var dt=new DataTransfer();dt.items.add(file);el.files=dt.files;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));audio.src=URL.createObjectURL(file);audio.style.display='block';msg.textContent='تم التسجيل ✓ يمكنك سماعه، أو إعادة التسجيل.';}
function finish(blob){var fr=new FileReader();fr.onload=function(){var AC=window.AudioContext||window.webkitAudioContext;var ac=new AC();ac.decodeAudioData(fr.result,function(ab){put(new File([toWav(ab)],'recording.wav',{type:'audio/wav'}));try{ac.close();}catch(e){}},function(){var ext=blob.type.indexOf('mp4')>-1?'m4a':'webm';put(new File([blob],'recording.'+ext,{type:blob.type}));});};fr.readAsArrayBuffer(blob);}
btn.onclick=function(){
if(rec&&rec.state==='recording'){rec.stop();return;}
if(!navigator.mediaDevices||!window.MediaRecorder){msg.textContent='متصفحك لا يدعم التسجيل هنا، ارفع ملفًا صوتيًا بدلًا منه.';return;}
navigator.mediaDevices.getUserMedia({audio:true}).then(function(s){
stream=s;chunks=[];rec=new MediaRecorder(s);
rec.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data);};
rec.onstop=function(){stopAll();btn.textContent='🎙️ إعادة التسجيل';msg.textContent='جارٍ تجهيز التسجيل...';finish(new Blob(chunks,{type:rec.mimeType||'audio/webm'}));};
rec.start();sec=0;btn.textContent='⏹ إيقاف التسجيل';msg.textContent='جارٍ التسجيل... 0 ث';
timer=setInterval(function(){sec++;msg.textContent='جارٍ التسجيل... '+sec+' ث';if(sec>=MAX&&rec.state==='recording')rec.stop();},1000);
}).catch(function(){msg.textContent='لم نتمكن من استخدام الميكروفون. اسمح به من المتصفح، أو ارفع ملفًا صوتيًا.';});
};
}
var iv=setInterval(function(){tries++;try{var el=findInput();if(el){build(el);clearInterval(iv);}}catch(e){}if(tries>20)clearInterval(iv);},700);
})();
