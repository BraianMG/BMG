const navHamburger = document.querySelector('.menu-hamburger')
const navMenu = document.querySelector('.nav-menu')
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.nav-menu-link')
const imgHamburger = document.querySelector('.menu-img')

navHamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu--active')
    nav.classList.toggle('nav--light')
    imgHamburger.classList.toggle('menu-img--light')
});

links.forEach( link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu--active')
        nav.classList.toggle('nav--light')
        imgHamburger.classList.toggle('menu-img--light')
    });
})
