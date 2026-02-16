document.addEventListener("DOMContentLoaded", function () {
    const menuToggler = document.querySelector(".menu-toggler");
    const menuClose   = document.querySelector(".menu-close");
    const headerNav   = document.querySelector(".header-nav");

    menuToggler.addEventListener("click", function (e) {
        e.stopPropagation();
        headerNav.classList.add("active");
    });
    menuClose.addEventListener("click", function () {
        headerNav.classList.remove("active");
    });

    document.addEventListener("click", function (e) {
        if (!headerNav.contains(e.target) && !menuToggler.contains(e.target)) {
            headerNav.classList.remove("active");
        }
    });
});



const header = document.querySelector('.header-area');

window.addEventListener('scroll', () => {
    header.classList.toggle('nav-fixed', window.scrollY > 50);
});



