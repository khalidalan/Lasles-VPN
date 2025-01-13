function showSidebar(){
    const sidebar = document.querySelector('.sidebar'); 
    sidebar.classList.add('show');
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar'); 
    sidebar.classList.remove('show');
}


const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // لمنع الانتقال الفوري
        const targetId = link.getAttribute('href').substring(1); // استخراج id من الرابط
        const targetSection = document.getElementById(targetId); // العثور على القسم المستهدف
        
        // التمرير إلى القسم
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // إخفاء الـ Sidebar بعد الانتقال
        hideSidebar();
    });
});