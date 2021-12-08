const burgerbtn = document.querySelector('.burger')
const barsIcon = document.querySelector('i.fa-bars')
const crossIcon = document.querySelector('i.fa-times')
const nav = document.querySelector('nav ul')
function burgerMenu()
{
    nav.classList.toggle('active')
    burgerbtn.classList.toggle('active')
    crossIcon.classList.toggle('hide')
    barsIcon.classList.toggle('hide')
}
burgerbtn.addEventListener('click' , burgerMenu)