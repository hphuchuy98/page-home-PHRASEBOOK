const openMenus = document.querySelectorAll('.js-open-menu')
const showMenu = document.querySelector('.js-show-menu');
const closeMenu = document.querySelector('.js-close-menu');

function showMenu_modal () {
    showMenu.classList.add('open');
}

function hideMenu_modal () {
    showMenu.classList.remove('open');
}

for (const openMenu of openMenus ) {
    openMenu.addEventListener('click', showMenu_modal)
}

closeMenu.addEventListener('click', hideMenu_modal)

