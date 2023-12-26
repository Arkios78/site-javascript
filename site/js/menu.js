const menu = document.querySelector(".menu")
const interactive = document.querySelector(".interactive")

menu.addEventListener('click',()=>{
    interactive.classList.toggle('mobile-menu')
})