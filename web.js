const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu-navegacion')


burger.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')&&  e.target != menu && e.target != burger){


        menu.classList.toggle("spread")
    }
})

