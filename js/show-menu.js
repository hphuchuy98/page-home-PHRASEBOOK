const arrows = document.querySelectorAll(".arrow")
const showSubMenu = document.querySelector('.sub-menu-phone')
const addRotate = document.querySelector('.menu-phone-icon')
const hideSubMenus = document.querySelectorAll('.menu-text')


function show_Submenu () {
    showSubMenu.classList.add('show-menu');
}

function hide_Submenu () {
    showSubMenu.classList.remove('show-menu')
}


function add_Rotate () {
    addRotate.classList.add('rotate');
}

function remove_Rotate () {
    addRotate.classList.remove('rotate');
}


for (const arrow of arrows ) {
    arrow.addEventListener('click', show_Submenu);
    arrow.addEventListener('click', add_Rotate);
}


for (const hideSubMenu of hideSubMenus ) {
    hideSubMenu.addEventListener('click', hide_Submenu);
    hideSubMenu.addEventListener('click', remove_Rotate);
}


