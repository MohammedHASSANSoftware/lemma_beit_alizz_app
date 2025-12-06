لمة بيت العز - حزمة المشروع النهائية (مبدئي)

محتويات الحزمة:
- flutter_app/   -> مشروع Flutter مبدئي جاهز للتهيئة
- functions/     -> Cloud Functions لالتحقق من موقع الطلب وإنشاءه

ملاحظات مهمة:
1) google-services.json و GoogleService-Info.plist مضافة كما أرسلت.
2) لتشغيل التطبيق محليًا تحتاج إلى Flutter SDK على كمبيوتر. إذا ليس لديك كمبيوتر، يمكنك استخدام خدمات بناء APK عبر GitHub Actions أو Codemagic أو FlutterFlow.
3) لنشر Cloud Functions:
   - ثبت firebase-tools: npm install -g firebase-tools
   - سجل الدخول: firebase login
   - انتقل إلى مجلد functions ثم: npm install
   - ثم: firebase deploy --only functions:createOrder

4) إذا تريد APK جاهز، أقدر أجهز الملفات لعملية البناء لكن بيئة هذه الجلسة لا تبني APK. أستطيع إرشادك أو تنسيق مع خدمة بناء.

5) لإضافة المنيو لاحقًا، استخدم لوحة التحكم Admin أو أنا أساعدك أدخل الأصناف.

اذا تريد ZIP جاهز للتحميل اكتب "هات ZIP" أو اذا تريد APK اكتب "ابني APK" (سأشرح الخطوات المطلوبة).
