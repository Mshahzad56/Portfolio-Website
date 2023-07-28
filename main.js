// ============= toggle icon navbar =================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ============= scroll section=================

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

windows.onscroll =() =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + hight ){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelectorAll('header nav a[herf*='+ id +']').classList.add('active');
            });
        };
    });
    // stucky navbar

    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.screenY > 100);

    // remove toggle icons and navbar when click ///////
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// scroll reveal 

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal() .reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal() .reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal() .reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal() .reveal('.home-content p, .about-content', { origin: 'right' });


// typed js 

const typed = new Typed('multiple-text0', {
    String: ['Frontend Developer','UX/UI Designer','Gamer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})