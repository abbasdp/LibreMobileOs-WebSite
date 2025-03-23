let datas = [
    {icon:"fa-highlighter-line" , title:"Highlights" ,
         slide:[
            {img:"../images/lmo/lmodroid/highlights/1.gamespace.png" , title :"Game Space" , minititle:"Provides zero interruptions with useful floating actions for the games. It will take your gaming experience to the next level"},
            {img:"../images/lmo/lmodroid/highlights/2.parallelspace.png" , title :"Parallel Space" , minititle:"With LMODroid's Parallel Space feature, you can run multiple instances of the same application in parallel"},
            {img:"../images/lmo/lmodroid/highlights/3.microg.png" , title :"MicroG" , minititle:"Full compatibility with microG or official Google Play Services"},
            {img:"../images/lmo/lmodroid/highlights/4.OpenEUICC.png" , title :"OpenEUICC" , minititle:"Open source solution for eSIM compatible devices"},
            {img:"../images/lmo/lmodroid/highlights/5.seedvault.png" , title :"Seed Vault" , minititle:"Open source application to backup and encrypt your data"},
            {img:"../images/lmo/lmodroid/highlights/6.chargingcontrol.png" , title :"Charging Control" , minititle:"Limit your battery charging with custom actions to extend battery life and maintain optimal performance"},
            {img:"../images/lmo/lmodroid/highlights/7.refreshrate.png" , title :"Dynamic refresh rate" , minititle:"Adjusts screen refresh rate for smoother visuals and better battery life"},
            {img:"../images/lmo/lmodroid/highlights/8.hotspot.png" , title :"Hotspot Manager" , minititle:"Manage connected devices and block unwanted connections"},
            {img:"../images/lmo/lmodroid/highlights/9.glidekeyboard.png" , title :"Glide Keyboard" , minititle:"Gesture Typing on AOSP keyboard"},
            {img:"../images/lmo/lmodroid/highlights/10.edgelight.png" , title :"Ambient edge light" , minititle:"Ambient Edge Light glows on screen edges for notifications, with customizable colors and settings"},
         ]
        },

    {icon:"fa-shield" , title:"Security & Privacy" , slide:[

        {img:"../images/lmo/lmodroid/security/1.faceunlock.png" , title :"FOSS Face Unlock" , minititle:"100% open-source: LMODroid features face unlock built with TensorFlow and keras-VGGFace VGG16"},

        {img:"../images/lmo/lmodroid/security/2.applock.png" , title :"App Lock" , minititle:"Protect sensitive content with native AppLock, featuring biometric unlock for extra security"},
        {img:"../images/lmo/lmodroid/security/3.dns.png" , title :"Private DNS" , minititle:"Supports private DNS setup and Cloudflare DNS"},
        {img:"../images/lmo/lmodroid/security/4.pattern.png" , title :"Custom Lockscreen Layouts" , minititle:"Provides custom lockscreen pattern sizes and scrambled PIN layouts"},
        {img:"../images/lmo/lmodroid/security/5.restrict-usb.png" , title :"Restrict USB" , minititle:"Provides USB restriction until the device is unlocked or at all times"},
        {img:"../images/lmo/lmodroid/security/6.auto-reboot.png" , title :"Auto Reboot" , minititle:"Provides scheduled auto-reboot for the device"},
        {img:"../images/lmo/lmodroid/security/7.globalvpn.png" , title :"Global VPN" , minititle:"Forces all device traffic through a VPN, including work profiles and other users"},
        {img:"../images/lmo/lmodroid/security/8.restrict-cleartext-network.png" , title :"Restrict Cleartext Network" , minititle:"Block all non-TLS network traffic"},
        {img:"../images/lmo/lmodroid/security/9.vpn-tethring.png" , title :"VPN Tethring" , minititle:"Allows hotspot clients to use the device’s VPN for upstream connectivity"},
        {img:"../images/lmo/lmodroid/security/10.network-monitor.png" , title :"Network Traffic" , minititle:"Show current network traffic levels in the status bar"},


    ] },


    {icon:"fa-light-emergency-on" , title:"Panic Trigger" , slide:[{img:"img3" , title :"data1" , minititle:""}] },

    {icon:"fa-swatchbook" , title:"Design & UI" , slide:[
        {img:"img4" , title :"data1" , minititle:""}
    ] },
]


datas.forEach((item, index) => {
    let elemli = `
        <li class=" p-3.5 rounded-xl font-bold  hover:bg-[#0000001c]   text-[#525050c7]    flex gap-2.5 text-2xl menu-item w-fit text-lg md:w-full  " data-index="${index}">
            <i class="fa-solid ${item.icon}"></i>   
            <p>${item.title}</p>
        </li>
    `;

    document.querySelector("#items").insertAdjacentHTML("beforeend", elemli);
});




let setclick = document.querySelectorAll(".menu-item");

setclick.forEach(item => {
    item.addEventListener("click", function () {
        let index = this.getAttribute("data-index");

        document.querySelectorAll(".menu-item").forEach(el =>{   el.classList.remove("bg-[#0000001a]",  "text-black") 
            el.classList.add("text-[#525050c7]")
        },

        document.querySelectorAll(".menu-item")[0].classList.add("bg-[#0000001a]")
    );      

        item.classList.toggle("bg-[#0000001a]");  
  item.classList.toggle("text-black");   
  item.classList.remove("text-[#525050c7]"); 


  

        setslider(index);
    });

    document.querySelectorAll(".menu-item")[0].classList.add("bg-[#0000001a]")
    document.querySelectorAll(".menu-item")[0].classList.add("text-black")  

  
});



let currentSlide = 0;
let activeIndex = 0;

function setslider(index) {
    activeIndex = index; 
    const slider = document.querySelector("#slider");
    const dotsContainer = document.querySelector("#dots");

    slider.innerHTML = "";
    dotsContainer.innerHTML = "";

    datas[index].slide.forEach((obg, i) => {
        let slelem = `
            <div class="slide w-full shrink-0 p-4 ${i === 0 ? "block" : "hidden"}">
                <img src="${obg.img}" class="rounded-lg w-4/12 m-auto" alt="Slide">
                <h2 class="text-center mt-2 text-black font-black text-3xl mt-5">${obg.title}</h2>
                <p class="text-center my-5 font-medium text-[#494949]">${obg.minititle}</p>
            </div>`;

        slider.insertAdjacentHTML("beforeend", slelem);

        const dot = document.createElement("span");
        dot.className = `dot w-3 h-3 rounded-full cursor-pointer ${i === 0 ? "bg-[#525050c7]" : "bg-gray-400"}`;
        dot.addEventListener("click", () => showSlide(i));
        dotsContainer.appendChild(dot);
    });

    currentSlide = 0;
    updateSlider();
}

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
        dots[i].classList.toggle("bg-[#525050c7]", i === index);
        dots[i].classList.toggle("bg-gray-400", i !== index);
    });

    currentSlide = index;
}

function updateSlider() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? "block" : "none";
        dots[i].classList.toggle("bg-[#525050c7]", i === currentSlide);
        dots[i].classList.toggle("bg-gray-400", i !== currentSlide);
    });
}

document.getElementById("next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % datas[activeIndex].slide.length;
    updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + datas[activeIndex].slide.length) % datas[activeIndex].slide.length;
    updateSlider();
});

setslider(0);