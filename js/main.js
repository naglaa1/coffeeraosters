const hamburge = document.querySelector(".hambIcon");
const navLinks = document.querySelector(".header-links .navbar");
const closeLink = document.querySelector(".header-links .close");
console.log(closeLink);

hamburge.addEventListener('click',() => {
    hamburge.classList.toggle("hidden");
    navLinks.classList.add("show");
    closeLink.classList.toggle("play");
})