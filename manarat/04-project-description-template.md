# قالب وصف المشروع (معتمد من هامة 2026-11-06/07) — نسخة عامة لأي جمعية

يُطبَّق على كل فرصة. البيانات بين «» تؤخذ من الملف 01. التفصيل الأصلي الكامل: `hamah/05-umrah-zid-plate-format.md` و`hamah/06-project-description-template.md` (في مشروع هامة).

## الترتيب داخل الوصف
1. شارة «مشروع خيري مستدام» (خلفية #DFF3E6، نص #2F8F63، زوايا 999px).
2. h2 العنوان، h3 الفرعي، فقرة قصيرة.
3. الصندوق الأخضر (#0E6B58، زوايا 14px): «ساهم الآن بـ» + المبلغ بالذهبي الفاتح #F2D58A + جملة الأثر.
4. بطاقة التكلفة (إطار #EAF0ED، زوايا 18px) أو بطاقة حديث/آية مكانها.
5. «أثر مساهمتك» + جملة.
6. بطاقة البنك (رأس #F5F8FD بزوايا 18px علوية، جسم بإطار #E6EDF7): المصرف، اسم الحساب، رقم الحساب، الآيبان.
7. جملة التوثيق: «لتوثيق مساهمتك، أرسل إيصال التحويل عبر واتساب، ويمكنك طلب الإهداء من خلاله.»
8. زر الواتساب (#128C5C، نص أبيض، زوايا 999px، سطر واحد).
9. الذيل: اسم الجمعية (#8A6D0B) + «مرخّصة برقم «الترخيص»» + رابط النطاق.

## ما يتغير بين مشروع وآخر
العنوان والفرعي والفقرة والمبلغ وعدد المساهمات والتكلفة. الثابت: بيانات البنك والترخيص ورابط الواتساب والنطاق.

## المقاسات المعتمدة
| العنصر | الخط | الحشوة | ملاحظة |
|---|---|---|---|
| الشارة | 15px | 6px عموديًا، clamp(7px,1.5vw,10px) جانبيًا | طبقتان متداخلتان |
| زر الواتساب | clamp(11px,3.3vw,22px) | clamp(3px,0.8vw,5px) / clamp(6px,1vw,9px) | ثلاث طبقات، سطر واحد |
| الصندوق الأخضر | clamp | 14px 12px | زوايا 14px |
| بطاقة التكلفة | clamp | 12px 18px | إطار 1px، زوايا 18px |
| بطاقة البنك | clamp | 6px 16px | الرأس بزوايا علوية |

قواعد: حشوات جانبية بصيغة clamp؛ زد يحذف white-space/outline/box-shadow؛ الحواف تُكمَّل من JS الثيم بحسب ألوان الخلفية (لا تغيّر الألوان إلا مع تعديل الملف 05).

## طريقة التطبيق (اللوحة الجديدة)
1. عبّئ كل حقول الفرصة والسيو أولًا (حتى يتفعّل زر الحفظ).
2. افتح «معلومات متقدمة عن فرصة التبرع».
3. من أدوات المتصفح: المحرر هو `[data-slate-editor]` رقم 1 (رقم 0 للوصف المختصر). `Object.keys(el).find(k=>k.startsWith('__reactFiber'))` ثم اصعد بـ `.return` حتى `memoizedProps.editor` وخزّنه في `window.__pe`.
4. نفّذ الكود أدناه بعد تغيير النصوص، ثم احفظ مرة واحدة. لا تحفظ من المحرر المرئي بعدها.

## الكود (الشارة + من «أثر مساهمتك» إلى النهاية)
```js
const FS=a=>`clamp(${a})`;
const T=(text,o={})=>({text,...o});
const P=(align,ch,o={})=>({type:'p',align,children:ch,...o});
const H=(type,text,fs,color)=>({type,align:'center',lineHeight:'1.5',children:[T(text,{fontSize:FS(fs),color,bold:true})]});
const cell=(bg,ch)=>({type:'td',background:bg,children:ch});
const tbl=rows=>({type:'table',children:rows.map(r=>({type:'tr',children:r}))});
const tx='#1f2937';
// «» = من الملف 01
const ORG='«اسم الجمعية الكامل»', LIC='«الترخيص»', WA='https://wa.me/«واتساب دولي»', DOMAIN='«النطاق»', BANK='«المصرف»', ACC='«رقم الحساب»', IBAN='«الآيبان»';
const nodes=[
P('center',[T('مشروع خيري مستدام',{fontSize:'15px',color:'#2F8F63',backgroundColor:'#DFF3E6;display:inline-block;line-height:1.6;padding:6px clamp(7px, 1.5vw, 10px);border-radius:999px'})]),
/* هنا h2 وh3 والفقرة والصندوق الأخضر وبطاقة التكلفة (انظر المرجع بالأسفل) */
H('h3','أثر مساهمتك','19px,5.2vw,24px','#0E6B58'),
P('center',[T('«جملة أثر المساهمة»',{fontSize:FS('16px,4.2vw,19px'),color:tx,bold:true})]),
tbl([
[cell('#F5F8FD;border:hidden;border-radius:18px 18px 0 0;padding:6px 16px;text-align:right',[P('right',[T('بيانات التحويل البنكي',{fontSize:FS('16px,4.4vw,20px'),color:'#0A4EA3',bold:true}),T(' — '+BANK,{fontSize:FS('13px,3.6vw,15px'),color:'#4b5563'})])])],
[cell('transparent;border:1px solid #E6EDF7;padding:6px 16px;text-align:right',[
P('right',[T('اسم الحساب',{fontSize:FS('13px,3.6vw,15px'),color:'#6b7280'})]),
P('right',[T(ORG,{fontSize:FS('15px,4.2vw,19px'),color:tx,bold:true})]),
P('right',[T('رقم الحساب',{fontSize:FS('13px,3.6vw,15px'),color:'#6b7280'})]),
P('right',[T(ACC,{fontSize:FS('15px,4.2vw,19px'),color:tx,bold:true})]),
P('right',[T('رقم الآيبان (IBAN)',{fontSize:FS('13px,3.6vw,15px'),color:'#6b7280'})]),
P('right',[T(IBAN,{fontSize:FS('15px,4.2vw,19px'),color:tx,bold:true})])])]]),
P('center',[T('لتوثيق مساهمتك، أرسل إيصال التحويل عبر واتساب، ويمكنك طلب الإهداء من خلاله.',{fontSize:FS('16px,4.2vw,19px'),color:'#6B7280',bold:true})]),
P('center',[{type:'a',url:WA,target:'_blank',children:[T('تواصل معنا عبر واتساب',{bold:true,color:'#ffffff',fontSize:'clamp(11px, 3.3vw, 22px)',backgroundColor:'#128C5C;display:inline-block;line-height:1.6;padding:clamp(3px, 0.8vw, 5px) clamp(6px, 1vw, 9px);border-radius:999px;text-align:center'})]}]),
P('center',[T(ORG,{fontSize:FS('16px,4.4vw,20px'),color:'#8A6D0B',bold:true})]),
P('center',[T('مرخّصة برقم ',{fontSize:FS('14px,3.8vw,16px'),color:'#4b5563'}),T(LIC,{fontSize:FS('14px,3.8vw,16px'),color:'#0E6B58',bold:true})]),
P('center',[{type:'a',url:'https://'+DOMAIN+'/',target:'_blank',children:[T(DOMAIN,{bold:true,color:'#0E6B58',fontSize:FS('16px,4.4vw,20px')})]}])
];
const addId=n=>{n.id=Math.random().toString(36).slice(2,12);(n.children||[]).forEach(c=>{if(c.type)addId(c)})};
nodes.forEach(addId);
window.__pe.tf.setValue(nodes);
```

## مرجع: الصندوق الأخضر وبطاقة التكلفة
```js
tbl([[cell('#0E6B58;border:hidden;border-radius:14px;padding:14px 12px;text-align:center',[
P('center',[T('ساهم الآن بـ',{fontSize:FS('16px,4.4vw,20px'),color:'#ffffff',bold:true})]),
P('center',[T('«المبلغ» ريالًا',{fontSize:FS('28px,7.5vw,34px'),color:'#F2D58A',bold:true})],{lineHeight:'1.5'}),
P('center',[T('أو بما تجود به نفسك،',{fontSize:FS('14px,3.8vw,17px'),color:'#E6F4EE',backgroundColor:'transparent;display:inline-block'}),T(' ',{fontSize:FS('14px,3.8vw,17px'),color:'#E6F4EE'}),T('«جملة الأثر».',{fontSize:FS('14px,3.8vw,17px'),color:'#E6F4EE',backgroundColor:'transparent;display:inline-block'})])])]]),
tbl([[cell('#FBFDFC;border:1px solid #EAF0ED;border-radius:18px;padding:12px 18px;text-align:right',[
P('right',[T('«عنوان التكلفة»',{fontSize:FS('14px,3.8vw,16px'),color:'#0E6B58',bold:true})]),
P('right',[T('«التكلفة» ريال',{fontSize:FS('22px,6vw,28px'),color:tx,bold:true})]),
P('right',[T('«ما تشمله»',{fontSize:FS('13px,3.6vw,15px'),color:'#4b5563'})])])]]),
```
