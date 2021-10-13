const navHamburger = document.querySelector('.menu-hamburger')
const navMenu = document.querySelector('.nav-menu')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.logo')
const links = document.querySelectorAll('.nav-menu-link')
const imgHamburger = document.querySelector('.menu-img')
const blocks = document.querySelectorAll('.block')
const titlesBlock = document.querySelectorAll('.title-block')
const arrows = document.querySelectorAll('.arrow')
const scrollup = document.querySelector('.scrollup')
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

// NAVBAR
navHamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu--active')
    nav.classList.toggle('nav--light')
    imgHamburger.classList.toggle('menu-img--light')
});

logo.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu--active')
    nav.classList.remove('nav--light')
    imgHamburger.classList.remove('menu-img--light')
});

links.forEach( link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu--active')
        nav.classList.toggle('nav--light')
        imgHamburger.classList.toggle('menu-img--light')
    });
})

// NAV Y SCROLLUP
window.addEventListener('scroll', () => {
    if(window.pageYOffset >= screen.height - 100){
        nav.classList.add('nav--change')
        scrollup.classList.add('scrollup--show')
    }else{
        nav.classList.remove('nav--change')
        scrollup.classList.remove('scrollup--show')
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

// QUALIFICATIONS
tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach( tabContent => {
            tabContent.classList.remove('qualification--show')
        })
        target.classList.add('qualification--show')

        tabs.forEach( tab => {
            tab.classList.remove('qualification--show')
        })
        tab.classList.add('qualification--show')
    })
})