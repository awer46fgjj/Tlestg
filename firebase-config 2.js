// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyCQ1wiVu3VDKTNmdq-3bKxu78tyP5bm8Tc",  // مفتاح API
  authDomain: "rdsfa-475c0.firebaseapp.com",  // نطاق المصادقة
  projectId: "rdsfa-475c0",                   // معرف المشروع
  storageBucket: "rdsfa-475c0.appspot.com",    // حاوية التخزين
  messagingSenderId: "596157270463",           // معرف مرسل الرسائل
  appId: "1:596157270463:web:a489ee7db22e5b7260a1bb",  // معرف التطبيق
  measurementId: "G-XXXXXX"                    // معرف القياس (اختياري)
};

// تهيئة Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();  // للوصول إلى خدمة التوثيق
const db = firebase.firestore();  // للوصول إلى قاعدة بيانات Firestore
const storage = firebase.storage();  // للوصول إلى Firebase Storage
