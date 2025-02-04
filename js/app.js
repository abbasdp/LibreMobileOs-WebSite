
let $ = document




$.querySelectorAll(".lightToggle").forEach(element => {
  
  element.addEventListener(`click`,e =>{
  
  
  
  
  
      $.querySelector(`html`).classList.toggle("dark")   
      $.querySelector(`.fa-sun`).classList.toggle("fa-moon")   
    })
})



$.querySelector("#ham-menu") .addEventListener(`click`,e =>{
 $.querySelector(`#navbar-cta`).classList.toggle("hidden")   
 $.querySelector(`.fa-sun`).classList.toggle("fa-moon")   
})



const text = "LibreMobileOS";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    $.querySelector(`#libertext`).textContent += text[index];
    index++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect()


// const counters = document.querySelectorAll('.value');
// const speed = 100; 
// counters.forEach(counter => {
//     let finalValue = +counter.getAttribute("akhi");
//     let currentValue = 0; 

//     const animate = () => {
//         let increment = Math.max(1, Math.round(finalValue / speed)); 

//         if (currentValue < finalValue) {
//             currentValue += increment;
//             counter.textContent = formatNumber(currentValue); 
//             setTimeout(animate, 20); 
//         } else {
//             counter.textContent = formatNumber(finalValue); 
//         }
//     };

//     animate();
// });

// function formatNumber(num) {
//     if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M"; 
//     if (num >= 1_000) return (num / 1_000).toFixed(1) + "K"; 
//     return num.toLocaleString("en-US");
// }

