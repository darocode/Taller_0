'use strict'



const icon = document.querySelector('.icon_menu')

const menu = document.querySelector('.menu_nav')


icon.addEventListener("click",()=>{

    menu.classList.toggle("active")
})




