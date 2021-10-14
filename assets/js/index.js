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

// CONTACT ME
const connection = 'https://sheet.best/api/sheets/58e84b38-45ed-4943-9c8e-6891f3c783b6'
const form = document.querySelector('.contact-form');
const success = document.querySelector('.form-message.success');
const warning = document.querySelector('.form-message.warning');

form.addEventListener('submit', async(e) => {
	e.preventDefault();

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
        console.log(contenido)
		form.classList.toggle('hidden')
        success.classList.toggle('hidden')
	} catch(error){
        form.classList.toggle('hidden')
        warning.classList.toggle('hidden')
		console.log(error);
	}
});

const inputsArea = document.querySelectorAll('.inputs-content')
const inputs = document.querySelectorAll('.input-content')

console.log(inputs)
inputs.forEach( (input,i) => {

    inputs[i].addEventListener('focus', () => {
        inputsArea[i].classList.toggle('inputs-content-focus')
    })

    inputs[i].addEventListener('blur', () => {
        inputsArea[i].classList.remove('inputs-content-focus')
    })
})