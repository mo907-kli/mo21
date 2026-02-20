// ==========================================
// ملف إعدادات نظام الشرطة - Police Department
// ==========================================

const SystemConfig = {
    // بيانات تسجيل الدخول
    username: "Ahmed Alfahd",        // اسم المستخدم
    password: "123",            // كلمة المرور

    // بيانات الملف الشخصي (تظهر في الزاوية العلوية اليسرى)
    fullName: "احمد الفهد", 
    
    // الرتبة الحالية (يجب كتابتها بالضبط كما في القائمة بالأسفل)
    // غير الرتبة هنا لتجربة صلاحيات الحذف (الضباط يحذفون، الأفراد لا)
    rank: "L.S.P.D Chief" 
};

// قائمة الرتب المصنفة كـ "ضباط" (لهم صلاحية الحذف)
const OfficerRanks = [
    "Minister of Interior",
    "Deputy Minister of Interior",
    "A. Minister of Interior",
    "Police Commander",
    "L.S.P.D Chief",
    "Deputy L.S.P.D Chief",
    "Cheif of SASP",
    "Deputy Cheif of SASP",
    "Advisor Cheif of SASP",
    "Colonel",
    "Major",
    "Captain",
    "First Lieutenant",
    "Lieutenant"
];

// قائمة الأفراد (للعلم فقط، ليس لهم صلاحية حذف)
const EnlistedRanks = [
    "Staff Sergeant", "First Sergeant", "Sergeant",
    "Senior Lead Officer", "Senior Officer", "Officer III",
    "Officer II", "Officer I", "Solo Cadet", "Cadet"

];
