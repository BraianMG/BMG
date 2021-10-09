const navHamburger = document.querySelector('.menu-hamburger')
const navMenu = document.querySelector('.nav-menu')
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.nav-menu-link')
const imgHamburger = document.querySelector('.menu-img')
const blocks = document.querySelectorAll('.block')
const titlesBlock = document.querySelectorAll('.title-block')

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
        console.log('oscurecer')
        nav.classList.add('nav--change')
    }else{
        console.log('transparente')
        nav.classList.remove('nav--change')
    }  
})

// ACCORDION
titlesBlock.forEach( (titleBlock,i) => {

    titlesBlock[i].addEventListener('click', () => {
        
        blocks.forEach( (block,j) => {
            if(i!==j){
                blocks[j].classList.remove('active')
            }
        })
        blocks[i].classList.toggle('active')
    })
} )
