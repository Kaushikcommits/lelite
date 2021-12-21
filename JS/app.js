
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // When Clicked
    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
    
        // Burger Animation
        hamburger.classList.toggle('toggle');
    })

}

navSlide();