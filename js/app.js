
let $ = document


$.querySelector("#lightToggle") .addEventListener(`click`,e =>{
 $.querySelector(`html`).classList.toggle("dark")   
 $.querySelector(`.fa-sun`).classList.toggle("fa-moon")   
})

$.querySelector("#ham-menu") .addEventListener(`click`,e =>{
 $.querySelector(`#navbar-cta`).classList.toggle("hidden")   
})