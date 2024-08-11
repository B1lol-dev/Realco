const header = document.getElementById('header')

window.addEventListener('scroll' , () =>{
    let WinByY = window.scrollY;

    if (WinByY > 0) {
        header.style.background='#FFF'
    } else {
        header.style.background=''
    }
})

const navbar_collection = document.getElementById('navbar_collection')
const nav_menu = document.getElementById('nav_menu')
const nav_close = document.getElementById('nav_close')

let nav_open = false

nav_menu.addEventListener('click' , () =>{
    if (!nav_open) {
        navbar_collection.style.transform='translateX(0)'
        nav_open = true
    } else{
        navbar_collection.style.transform=''
        nav_open = false
    }
})

nav_close.addEventListener('click' , () =>{
    if (!nav_open) {
        navbar_collection.style.transform='translateX(0)'
        nav_open = true
    } else{
        navbar_collection.style.transform=''
        nav_open = false
    }
})