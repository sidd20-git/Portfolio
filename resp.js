burger = document.querySelector('.burger')
navbar = document.querySelector('nav')
navlist = document.querySelector('nav ul')



burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})