const navHamburger = document.querySelector('.menu-hamburger')
const navMenu = document.querySelector('.nav-menu')
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.nav-menu-link')
const imgHamburger = document.querySelector('.menu-img')
const blocks = document.querySelectorAll('.block')
const titlesBlock = document.querySelectorAll('.title-block')
const arrows = document.querySelectorAll('.arrow')

// NAVBAR
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

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= screen.height - 100){
        nav.classList.add('nav--change')
    }else{
        nav.classList.remove('nav--change')
    }  
})

// ACCORDION
titlesBlock.forEach( (titleBlock,i) => {

    titlesBlock[i].addEventListener('click', () => {
        
        blocks.forEach( (block,j) => {
            if(i!==j){
                blocks[j].classList.remove('block--active')
                arrows[j].classList.remove('arrow--active')
            }
        })
        blocks[i].classList.toggle('block--active')
        arrows[i].classList.toggle('arrow--active')
    })
} )
