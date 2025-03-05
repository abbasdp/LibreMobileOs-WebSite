
let $ = document


/////////////////////dark mode //////////////////////////////////

$.querySelectorAll(".lightToggle").forEach(element => {
  element.addEventListener(`click`,e =>{
      $.querySelector(`html`).classList.toggle("dark")   
      $.querySelector(`.fa-sun`).classList.toggle("fa-moon")   
    })
})

///////////////////////////////////////////////////////////// nav links  //////////////////

let  ListMenu = [
  {href:"xx",text:"Home",},
  {href:"xx",text:"About",},
  {href:"xx",text:"Downloads",},
  {href:"xx",text:"LMODroid",},
  {href:"xx",text:"Enterprise",},
  {href:"xx",text:"Lega",}
]


ListMenu.forEach(es =>{
  let itemtemp = `<a href="${es.href}" class="bg-white block md:bg-transparent w-full p-4 rounded-lg  font-medium  dark:bg-zinc-900 md:dark:bg-transparent   dark:text-white  dark:hover:bg-[#fcf0ff] dark:hover:text-black  hover:bg-[#fcf0ff]  ">${es.text}</a>`
  $.querySelector(`#navbar-cta`).insertAdjacentHTML('beforeend',itemtemp)

})




$.querySelector("#ham-menu") .addEventListener(`click`,e =>{
 $.querySelector(`#navbar-cta`).classList.toggle("hidden")   
 $.querySelector(`.fa-sun`).classList.toggle("fa-moon")   
})

////////////////////////////////////// anime lb /////

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

/////////////////////// سه تا باکس شمارنده //////////////

const counters = document.querySelectorAll('.value');
const speed = 100; 
counters.forEach(counter => {
    let finalValue = +counter.getAttribute("akhi");
    let currentValue = 0; 

    const animate = () => {
        let increment = Math.max(1, Math.round(finalValue / speed)); 

        if (currentValue < finalValue) {
            currentValue += increment;
            counter.textContent = formatNumber(currentValue); 
            setTimeout(animate, 20); 
        } else {
            counter.textContent = formatNumber(finalValue); 
        }
    };

    animate();
});

function formatNumber(num) {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M"; 
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K"; 
    return num.toLocaleString("en-US");
}

//////////////////////////////////// محصولات ////////////////

let prudoct_list = [
  {img:"../images/phone.png" ,bgimg:'../images/bg-phone1.png', title : "LMODroid",link:"#", subTitle : 'Android AOSP Based Mobile Operating system ',  }
  ,{img:"../images/phone.png" ,bgimg:'../images/bg-phone2.png', title : "LMODroid",link:"#", subTitle : 'Android AOSP Based Mobile Operating system ',  }

]

prudoct_list.forEach( elm =>{

  let prodBox = `    <div class="w-full bg-[#EFF8FF] my-4  md:w-5/12 intersect:motion-preset-slide-right motion-delay-0 motion-duration-1500 dark:dark:bg-[url('${elm.bgimg}')]  bg-cover bg-no-repeat rounded-2xl  "  >
      <div class=" p-5 rounded-2xl   w-full  backdrop-blur-2xl   flex-col ">
        <img src="${elm.img}" class="w-9/12  m-auto " alt="">
        <h1 class="font-extrabold text-5xl dark:text-white    py-4 p-2 md:text-4xl xl:text-6xl     ">${elm.title}</h1>
        <p class="font-extralight  text-2xl dark:text-white  md:w-11/12   px-4 md:text-lg lg:w-8/12 xl:w-6/12  xl:text-xl     ">${elm.subTitle}
          system</p>
          <div class="flex justify-end my-4   ">

            <a href="">
              <button  class=" p-5  rounded-lg text-[#4F378A]  h-[106%]  bg-[#EADDFF] dark:text-white  shadow-sm  hover:cursor-pointer       dark:bg-[#353535]    "> 
                <i class="fa-duotone fa-light fa-arrow-turn-right mx-2  "></i>
                read more</button>
            </a>
            </div>      
    </div>
</div>`

$.querySelector("#prodList").insertAdjacentHTML("beforeend",prodBox)

})



///////////////////////لینک سورس کد ها ///////////////




    let suorce_link = [
      {img :"../images/lgit.png" , link:''},
      {img :"../images/frimor.png" , link:''},
      {img :"../images/jenkins-1 1.png" , link:''},
      {img :"../images/giticon.png" , link:''},

    ]
 



suorce_link.forEach( elm =>{


  let link_temp = `    <a  class="w-3/12 p-1 shrink-0  "  href="${elm.link}">

  <div class="bg-[#B3B3B3] h-full p-3 rounded-lg hover:bg-[#4f505196]   dark:bg-[#232323] " >
    <img src="${elm.img}" alt="" class="w-full">
  </div>
  
</a>`

$.querySelector("#link_s").insertAdjacentHTML("beforeend",link_temp

)

})

// async function ftch() {
//   try {
//     let response = await fetch("https://cors-anywhere.herokuapp.com/https://stats.libremobileos.com/model");

//     let data = await response.json();
//     console.log("Fetched Data:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// ftch();























let pros_img = [
  {img :"../images/Compatible/amlogic.png" , link:''},
  {img :"../images/Compatible/Allwinner.png" , link:''},
  {img :"../images/Compatible/broadcom.png" , link:''},
  {img :"../images/Compatible/amlogic.png" , link:''},
  {img :"../images/Compatible/amlogic.png" , link:''},
  {img :"../images/Compatible/amlogic.png" , link:''},
  {img :"../images/Compatible/amlogic.png" , link:''},
  {img :"../images/Compatible/amlogic.png" , link:''},
  {img :"../images/Compatible/amlogic.png" , link:''},


]

pros_img.forEach( elm =>{


  let pross_temp = `   <div class="bg-[#DDDDDD] p-2.5 rounded-lg  w-3/12 md:w-auto  dark:bg-[#212121] ">
    <img src="${elm.img}" alt="">
  </div>`

$.querySelector("#Compatible").insertAdjacentHTML("beforeend",pross_temp)

})