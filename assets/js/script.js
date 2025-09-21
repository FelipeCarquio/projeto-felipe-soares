let icone = document.getElementById('icone')

function clickMenu() {
    let menu = document.getElementById('menu')    
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        icone.classList.replace('bi-x-lg', 'bi-list')
    }else {
        menu.style.display = 'block'
        icone.classList.replace('bi-list', 'bi-x-lg')
    }
}

let
