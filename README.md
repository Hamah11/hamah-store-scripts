# سكربتات متجر hamh.sa

الملف `zid-custom-scripts.js` هو الكود الجاهز للصق في زد: الثيمات ← ⋮ ثيم إثار ← تعديل JS.

قاعدة ممنوعات داخل الكود: `<` و `>` و `//` و `=>` و `eval` و `fetch` و `location`. الحروف العربية تُكتب بصيغة \uXXXX.

لإجبار النشر من جديد: غيّر الرقم في `var hv=N;`.

زد ينشر custom-scripts.js بعد دقائق، وصفحة المنتج تبقى على `?v=` قديم حتى يُحفظ منتج. للتحقق افتح:
https://media.zid.store/static/a2fcf162-43b5-476a-bdf9-09216baee072/aeff3d80-0a4a-4642-933d-837e727be002/custom-scripts.js?v=<رقم عشوائي>

صفحة المنتج umrah-badal-share هي المنتج رقم 5988b9d4-f3fc-4918-8ddb-7b79aa7ccd6c.

`voice-record.js` نسخة مطابقة.

## Zid limit
Zid rejects theme JS over 20KB. hv=7 is 20190 bytes. Arabic text uses hzA() compact form (char code minus 1504). See project doc hamah/24.
