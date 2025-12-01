// 1. تعريف العناصر
const menuBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const icon = menuBtn.querySelector('i'); // الأيقونة داخل الزر

// 2. عند الضغط على الزر
menuBtn.addEventListener('click', () => {
    
    // أضف/أزل كلاس 'active' للقائمة (يظهرها ويخفيها)
    mobileMenu.classList.toggle('active');

    // منطق تحويل الأيقونة
    if (mobileMenu.classList.contains('active')) {
        // لو القائمة مفتوحة، حول الأيقونة لـ X
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        // لو القائمة تسكرت، رجعها شرطات
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// 3. وظيفة إضافية: إغلاق القائمة عند الضغط على أي رابط
function toggleMenu() {
    mobileMenu.classList.remove('active');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
}