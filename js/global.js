
if(  !localStorage.getItem("theme")){
  localStorage.setItem("theme", "light")
}

let $ = document

nav_elements = `          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-0  ">

                <a href="" class=" w-12 md:mr-14           "><img class="" src="../images/lmo/image 1.svg" alt=""></a>
             <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
                 <button id="ham-menu" class="group inline-flex w-12  md:hidden h-12 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition" aria-pressed="false" onclick="this.setAttribute('aria-pressed', !(this.getAttribute('aria-pressed') === 'true'))">
                   <svg class="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                       <rect class="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]" y="7" width="9" height="2" rx="1"></rect>
                       <rect class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45" y="7" width="16" height="2" rx="1"></rect>
                       <rect class="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:-rotate-[225deg]" y="7" width="9" height="2" rx="1"></rect>
                   </svg>
               </button>
         
             </div>

             
             <div class="items-center justify-between py-5 md:py-2 hidden font-normal gap-2  flex flex-col md:flex-row  w-full md:flex md:w-auto md:order-1 text-[#5d616b]   dark:text-white " id="navbar-cta">
             </div>
 
             </div>`

    $.querySelector(`nav`).insertAdjacentHTML("beforeend",nav_elements)


let  ListMenu = [
    {href:"/docs/index.html",text:"Home",},
    {href:"/docs/about.html",text:"About",},
    {href:"xx",text:"Downloads",},
    {href:"/docs/lmodroid.html",text:"LMODroid",},
    {href:"/docs/enterprise.html",text:"Enterprise",},
    {href:"/docs/Niga.html",text:"Lega",}
  ]
  
  ListMenu.forEach(es =>{
    let itemtemp = `<a href="${es.href}" class="bg-white block md:bg-transparent w-full p-3  rounded-lg  font-medium  dark:bg-zinc-900 md:dark:bg-transparent    hover:text-white     hover:bg-[#7855a6]    ">${es.text}</a>`
    $.querySelector(`#navbar-cta`).insertAdjacentHTML('beforeend',itemtemp)
  
  })
  
  
  
  
  $.querySelector("#ham-menu") .addEventListener(`click`,e =>{
   $.querySelector(`#navbar-cta`).classList.toggle("hidden")   
   $.querySelector(`.fa-sun`).classList.toggle("fa-moon")   
   $.querySelector(`nav`).classList.toggle("rounded-full")  
  })



  $.querySelectorAll(".lightToggle").forEach(element => {
    element.addEventListener(`click`,e =>{
        $.querySelector(`html`).classList.toggle("dark")   
        $.querySelector(`.fa-sun`).classList.toggle("fa-moon")   



        lg = localStorage.getItem("theme")

        if (lg =="dark") {
          localStorage.setItem("theme" , "light") 
        }else{
          localStorage.setItem("theme" , "dark") 
  
        }

      })



  })








const userPref = localStorage.getItem("theme");
const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userPref === "dark" || (!userPref && systemPref)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
