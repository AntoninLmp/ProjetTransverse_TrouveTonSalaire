const hamburger = document.querySelector(".menu_burg");
const navsub = document.querySelector(".sous_nav");
let menu = document.querySelector(".menu_pages");
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change")
    navsub.classList.toggle("nav-change")
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});  