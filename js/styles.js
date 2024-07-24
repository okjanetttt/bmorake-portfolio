document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Change 50 to the number of pixels after which you want the background to change
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
