
let data_boxs = [
    {icon:`<svg xmlns="http://www.w3.org/2000/svg" class=" fill-black dark:fill-[#f8f8f8b0] " viewBox="0 -960 960 960" width="50px" fill="#000">
<path d="M240-120v-80h200v-120H160q-33 0-56.5-23.5T80-400v-360q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H520v120h200v80H240Z"/>             </svg>`,
     titel:"Kiosk mode" ,
     text:"Restrict the functions of the device. Control what your users can see and use."
    },
    {icon:`<svg xmlns="http://www.w3.org/2000/svg" class=" fill-black dark:fill-[#f8f8f8b0] " viewBox="0 -960 960 960" width="50px" ><path d="M80-160v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Zm160 0q0-108-41-202.5t-111.5-165Q377-598 282.5-639T80-680v-40q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H600Z"/></svg>`,
 titel:"Remote Screen Mirroring" ,
 text:"Share the screen of device and remotely control it over the Internet."
},
{icon:`<svg xmlns="http://www.w3.org/2000/svg" class=" fill-black dark:fill-[#f8f8f8b0] " viewBox="0 -960 960 960" width="50px" fill="#000">

<path d="M280-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 120q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 46T506-560h335l79 79-140 160-100-79-80 80-80-80h-14q-25 72-87 116t-139 44Z"/>     </svg>`,
titel:"Remote Shell Access" ,
text:"Command execution on the remote device"
},
{icon:`<svg xmlns="http://www.w3.org/2000/svg" class=" fill-black dark:fill-[#f8f8f8b0] " viewBox="0 -960 960 960" width="50px" fill="#000">
<path d="M320-120v-40l80-80H160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H560l80 80v40H320ZM160-440h640v-320H160v320Zm0 0v-320 320Z"/>     </svg>`,
titel:"Web Console" ,
text:"Perform all actions on the device remotely from console"
},

{icon:`<svg xmlns="http://www.w3.org/2000/svg" class=" fill-black dark:fill-[#f8f8f8b0] " viewBox="0 -960 960 960" width="50px" fill="#000">
    <path d="m640-120-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-29 72-24 143t48 135H80Zm600-80q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
     </svg>`,
titel:"Multiple Access Levels" ,
text:"Access levels for users or hardware limitations"
},

{icon:`<svg xmlns="http://www.w3.org/2000/svg" class=" fill-black dark:fill-[#f8f8f8b0] " viewBox="0 -960 960 960" width="50px" fill="#000">
<path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z"/>     </svg>`,
titel:"Custom Hardware" ,
text:"Various device support based on customer need"
},


]

let delay = 0

    data_boxs.forEach(data =>{

delay+=100
        let box_template = `      
        <div class=" w-full   md:w-6/12 xl:w-4/12 p-2 intersect-once intersect:motion-preset-slide-up motion-delay-[${delay}ms]">
              <div class="bg-[#D8D8D8] p-5 h-full  rounded-[20px]  hover:bg-[#F7F7F7]  dark:bg-[#f8f8f810] dark:hover:bg-[#ffffff40]      ">
               <div class="flex  items-center gap-2.5   ">
                   
                   <div class="bg-[#00000013] w-fit p-3 rounded-full inset-shadow-sm    ">
       
       
                   ${data.icon}
                   </div>
       
                   <p class="font-bold text-2xl ml-2 text-[#1010106b]  dark:text-[#F8F8F8]   ">${data.titel}</p>
               </div>
         <p class="py-2.5  font-medium md:text-xl text-[#161616] dark:text-white ">${data.text


         }</p>
              </div>
           </div>`
       




        document.querySelector("#enter-box").insertAdjacentHTML("beforeend",box_template) 
    })



