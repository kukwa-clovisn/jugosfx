

// working on menu bar



let menuBtn = document.getElementById("menu-btn");
let menuCloseBtn = document.getElementById("menu-close-btn")
let menuHeader = document.getElementById("menu-header")

menuBtn.addEventListener('click', () => {
    menuHeader.classList.add('show')
    menuBtn.style.display = 'none'
    menuCloseBtn.style.display = 'flex'
})

menuCloseBtn.addEventListener('click', () => {
    menuHeader.classList.remove('show')
    menuBtn.style.display = 'flex'
    menuCloseBtn.style.display = 'none'
})


