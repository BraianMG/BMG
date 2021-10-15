// NAVBAR
const navHamburger = document.querySelector('.menu-hamburger')
const navMenu = document.querySelector('.nav-menu')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.logo')
const links = document.querySelectorAll('.nav-menu-link')
const imgHamburger = document.querySelector('.menu-img')
// NAV Y SCROLLUP
const scrollup = document.querySelector('.scrollup')
// ACCORDION
const blocks = document.querySelectorAll('.block')
const titlesBlock = document.querySelectorAll('.title-block')
const arrows = document.querySelectorAll('.arrow')
// QUALIFICATIONS
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')
// CONTACT ME (FORM)
const connection = 'https://sheet.best/api/sheets/58e84b38-45ed-4943-9c8e-6891f3c783b6'
const form = document.querySelector('.contact-form');
const submitButton = document.querySelector('form .button')
const success = document.querySelector('.form-message.success')
const warning = document.querySelector('.form-message.warning')
const notice = document.querySelector('.notice')
const loader = document.querySelector('.loader')
const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letters and spaces, may have accents
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Standard email format
}
// CONTACT ME (EFFECTS)
const inputsArea = document.querySelectorAll('.inputs-content')
const inputs = document.querySelectorAll('.input-content')



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
    if(window.pageYOffset >= screen.height*2/3){
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


// CONTACT ME (FORM)
form.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    loader.classList.toggle('hidden')
    submitButton.classList.toggle('hidden')

    const name_validation = expressions.name.test(form.name.value)
    const email_validation = expressions.email.test(form.email.value)

    // VALIDATION
    if (form.name.value==='' || form.email.value==='' || form.project.value==='' || form.message.value===''){
        notice.innerHTML="All fields are required"
        loader.classList.toggle('hidden')
        submitButton.classList.toggle('hidden')
        notice.classList.remove('hidden')

    }else if (!name_validation){
        notice.innerHTML="Invalid name"
        loader.classList.toggle('hidden')
        submitButton.classList.toggle('hidden')
        notice.classList.remove('hidden')
    
    }else if (!email_validation){
        notice.innerHTML="Invalid email"
        loader.classList.toggle('hidden')
        submitButton.classList.toggle('hidden')
        notice.classList.remove('hidden')

    }else{
        notice.classList.add('hidden')

        try {
            const respuesta = await fetch(connection, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Name": form.name.value,
                    "Email": form.email.value,
                    "Project": form.project.value,
                    "Message": form.message.value
                })
            });
    
            const contenido = await respuesta.json();
            
            form.classList.toggle('hidden')
            success.classList.toggle('hidden')
        } catch(error){
            form.classList.toggle('hidden')
            warning.classList.toggle('hidden')
            console.log(error);
        }
    }
});

// CONTACT ME (EFFECTS)
inputs.forEach( (input,i) => {

    inputs[i].addEventListener('focus', () => {
        inputsArea[i].classList.toggle('inputs-content-focus')
    })

    inputs[i].addEventListener('blur', () => {
        inputsArea[i].classList.remove('inputs-content-focus')
    })
})
