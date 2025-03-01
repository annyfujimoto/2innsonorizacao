/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// header blur
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// Email JS 
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) => {
        e.preventDefault()

//Service ID
        emailjs.sendForm('service_30b239w', 'template_o3lpg8i', '#contact-form', '7jA3pvqu11W6BC3mR')
        .then(() => {
            contactMessage.textContent = 'Message sent succesfully'

//remove message after 5 sec
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // clean input fields 
            contactForm.reset()

        }, () => {
             contactMessage.textContent = 'Message not sent (service error)'
        })

    }

    contactForm.addEventListener('submit', sendEmail)

    // show scroll up 
    const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)


    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
