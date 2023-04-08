let menu = document.getElementById('menu');
let navbar = document.getElementsByClassName('nav-links')[0];
let menu_icon = document.getElementById('menu_icon');
let state = 0;

// Navbar Access (Mobile)
function show_links() {
    if (state == 0) {
        navbar.style.display = "block";
        menu_icon.classList.remove('fa-bars');
        menu_icon.classList.add('fa-xmark');
        state = 1;
    } else {
        navbar.style.display = "none";
        menu_icon.classList.remove('fa-xmark');
        menu_icon.classList.add('fa-bars');
        state = 0;
    }
}