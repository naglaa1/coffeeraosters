//for navbar responsive
const nav = document.querySelector(".header-links nav");
console.log(nav);
const hamburge = document.querySelector(".hambIcon");
console.log(hamburge);
const navLinks = document.querySelector(".header-links .navbar");
console.log(navLinks);
const closeLink = document.querySelector(".header-links .close");
console.log(closeLink);

// on click hamburage 
hamburge.addEventListener('click' , () => {
    hamburge.classList.toggle('hidden');
    closeLink.classList.toggle('show');
    navLinks.classList.toggle('active');
    nav.classList.toggle('full');
    // nav.style.backgroundImage = 'linear-gradient(to bottom, rgba, yellow)';
});
// on click close btn
closeLink.addEventListener('click' , () => {
    closeLink.classList.toggle('show');
    hamburge.classList.toggle('hidden');
    navLinks.classList.toggle('active');
    nav.classList.toggle('full');
    // nav.style.backgroundImage = 'none'
});