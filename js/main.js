//for navbar responsive
const nav = document.querySelector(".header-links nav");
console.log(nav);
const hamburge = document.querySelector(".hambIcon");
const navLinks = document.querySelector(".header-links .navbar");
const closeLink = document.querySelector(".header-links .close");
console.log(closeLink);

// on click hamburage 
hamburge .addEventListener('click' , () => {
    hamburge.classList.toggle('hidden');
    closeLink.classList.toggle('show');
    navLinks.classList.toggle('active');
});
// on click close btn
closeLink.addEventListener('click' , () => {
    closeLink.classList.toggle('show');
    hamburge.classList.toggle('hidden');
    navLinks.classList.toggle('active');
})