const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    //toggle to add or remove a class
    search.classList.toggle('active')
    input.focus()
})