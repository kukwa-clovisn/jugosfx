

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



const formEl = document.querySelector('#form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);

    const data = Object.fromEntries(formData)
    console.log(data)

    let jsonData = {
        id: Math.random(9).toString(30),
        email: data.email,
        message: data.message,
        imageUrl: data.image,
        checked: true ? data.showTestimonials : false
    }

    fetch('http://localhost:3000/Testimonials', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    }
    ).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
})


