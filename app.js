const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close')
console.log(navToggle);
console.log(navMenu);

if (navToggle) {
    navToggle.addEventListener('click', function () {

        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu')
    })

}


