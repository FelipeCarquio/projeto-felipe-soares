let icone = document.getElementById('icone')
let menu = document.getElementById('menu')
let links = document.querySelectorAll('.links')

function clickMenu() {
      
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        icone.classList.replace('bi-x-lg', 'bi-list')
    }else {
        menu.style.display = 'block'
        icone.classList.replace('bi-list', 'bi-x-lg')
    }
}

links.forEach(link => {
  link.addEventListener('click', () => {
    const menuElement = document.getElementById('menu');
    menu.style.display = 'none' 
    icone.classList.replace('bi-x-lg', 'bi-list')
  });
});