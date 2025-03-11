

let box_vis =[
    `At LibreMobileOS, we envision a world where technology is truly open, empowering users and developers to innovate, collaborate, and thrive. We believe in breaking down barriers, creating mobile operating systems that prioritize freedom, privacy, and adaptability.`,
    `Our mission is to redefine the mobile experience by offering a platform that is transparent, customizable, and inclusive—providing users with complete control over their devices. By fostering a global community of developers and enthusiasts, we aim to drive progress through shared knowledge and creativity.`
]



let Our_li =[
`Open Source is not just an option but the foundation of trust and progress.`,
`Privacy and user control are fundamental rights, not premium features.`,
`Technology adapts to the needs of individuals and businesses, removing restrictions and unlocking potential.`,
`Innovation is fueled by collaboration, uniting diverse perspectives to create something extraordinary.`,


]

let targets = [
    {title:"Empowering Users with Freedom and Innovation", text:"LibreMobileOS is designed for those who value choice, control, and creativity in their mobile experience. By leveraging the power of open-source technology, we empower users and developers alike to customize, enhance, and innovate without restrictions. Our mission is to provide a platform that combines cutting-edge features with the freedom to explore and create."},
    {title:"Freedom-Driven Mobile Innovation", text:"At the heart of LibreMobileOS is a commitment to openness and progress. We believe in a mobile ecosystem where users and developers can thrive, unburdened by limitations. Our open-source approach ensures transparency, adaptability, and a future driven by collaboration and innovation."},
    {title:"A Smarter, Open Mobile Future", text:"LibreMobileOS is more than just an operating system—it’s a vision for a better, smarter mobile world. With open-source at its core, we’re paving the way for a future where technology adapts to users’ needs, encourages creativity, and fosters a community-driven evolution of mobile experiences."},
    {title:"Open Source. Limitless Possibilities.", text:"With LibreMobileOS, the boundaries of what’s possible are constantly being redefined. By embracing open-source principles, we’ve created a platform where innovation knows no limits. Developers, businesses, and users can work together to build a mobile ecosystem that’s adaptable, transparent, and endlessly creative."},

]

let services = [
    {title:"Store", text:"We utilize F-Droid, an open-source app store, as the core of our application distribution. It provides access to a curated selection of free and open-source apps, ensuring transparency, security, and user trust."},
    {title:"Text-to-Speech ", text:" For text-to-speech capabilities, we use PicoTTS, an open-source solution designed for lightweight and efficient voice synthesis. This ensures seamless functionality while staying true to our open-source principles."},
    {title:"Cloud Services", text:"Our cloud platform is built on Nextcloud, a self-hosted, secure solution for file storage, sharing, and collaboration. Users can enjoy complete privacy and control over their data via our cloud platform."},
    {title:"Network Location Provider ", text:" We leverage MozillaNLP as the foundation for our Network Location Provider service. It ensures accurate location services without relying on proprietary systems, reinforcing our commitment to user privacy. Learn more at our NLP platform."},

]



let history = [
{title:"The First Steps: LMODroid 1.0", text:"Our journey began with LMODroid 1.0, a project rooted in the Android Open Source Project (AOSP). Released alongside Android 10, this early version served as a testing ground for our ideas—a bold experiment laying the groundwork for the future."},
{title:"Challenges and Resilience: LMODroid 2.0", text:"In 2021, we embarked on the development of LMODroid 2.0, our adaptation of Android 11. However, the year wasn’t without challenges. Facing significant hurdles in the final months, our foundation temporarily disbanded, forcing us to pause and regroup."},
{title:"A New Beginning: Rising from the Ashes", text:"While the temporary dissolution was a setback, it wasn’t the end of our journey. The desire to create something meaningful burned brighter than ever. At the start of 2022, we chose to rebuild—not just the project, but our vision for the future. It wasn’t just a restart; it was a rebirth. Armed with hard-learned lessons and relentless determination, we embraced the challenge once again. This time, failure was not an option."},
{title:"A New Era: LMODroid 3.0", text:"With renewed energy and focus, we turned to Android 12 and welcomed Nick to the team. His expertise became a catalyst for innovation, and together we launched LMODroid 3.0—our first official release. Compatible with over 150 devices, this version marked a turning point, earning recognition and trust from users worldwide."},
{title:"Stability and Growth: LMODroid 4.0", text:"In 2023, we achieved another milestone with the stable release of LMODroid 4.0, built on Android 13. This version was a testament to our community’s dedication and the evolving capabilities of our platform."},
{title:"Continuing the Journey: LMODroid 5.0", text:"By 2024, our story had grown richer. Dhina joined our core team, bringing fresh insights and ideas. Together, we launched LMODroid 5.0, marking another leap forward."},
{title:"Where We Are Now", text:"Today, the LMODroid core team stands strong with four dedicated members, supported by a thriving developer community of over 80 contributors. We are more passionate than ever about shaping the future of open-source mobile systems—and the story continues."},
]


let team = [
    {img:"../images/about/avatars/image.png",  name:"Erfan Abdi", teamPosition:"Founder", link:"erfanoabdi"},
    {img:"../images/about/avatars/image-1.png",  name:"Mohammad Hasan Keramat Jahromi ", teamPosition:"Co-Founder", link:"ikeramat"},
    {img:"../images/about/avatars/image-2.png",  name:"Nick", teamPosition:"Core Developer", link:"nift4"},
    {img:"../images/about/avatars/image-3.png",  name:"Dhina", teamPosition:"Core Developer", link:"dhina17"},

]









box_vis.forEach(text=>{

    let temp_vision=`
        <div class="md:w-6/12 motion-blur-in-sm    p-2">
            <div class="bg-[#d9d9d9cc] dark:bg-[#403e3e70]    p-4 h-full  rounded-2xl h-auto  ">
                <p class="text-xl  text-[#252525]  dark:text-white  leading-8  ">${text}</p>
            </div>
        </div>
`
document.querySelector(`#Vision`).insertAdjacentHTML("beforeend",temp_vision)
})




Our_li.forEach(text=>{

    let temp_vision=`
 <li class="text-xl my-5.5  font-medium text-[#1e1e1ecf] md:text-2xl dark:text-white ">${text}</li>
   
`
document.querySelector(`#li`).insertAdjacentHTML("beforeend",temp_vision)
})


targets.forEach(targts=>{

    let target_temp = `           <div class=" md:w-6/12 p-2 intersect-once intersect:motion-preset-slide-up   ">
    <div class="bg-[#d0d0d073] h-full   p-3.5 rounded-2xl dark:bg-[#6a6a6a3a]   ">
        <h3 class="text-[#424242] font-extrabold text-2xl dark:text-[#D0D0D0]  ">${targts.title}</h3>

        <p class="text-[#424242]  mt-2.5  text-xl 2xl:w-10/12 dark:text-[#939393]  font-normal  mt-6   leading-9  ">${targts.text}</p>
    </div>
</div>
`
document.querySelector(`#targets`).insertAdjacentHTML("beforeend",target_temp)
})

let delay = 0

services.forEach(service=>{

    delay+100  

    let ser_temp = ` <div class="md:w-6/12 lg:w-4/12 xl:w-3/12 p-1 intersect-once  intersect:motion-preset-slide-up motion-delay-[${delay}ms]         ">

    <div class="p-3  text-center py-7  rounded-2xl xl:p-5  2xl:p-8  h-full      bg-[#e3e3e3] dark:bg-[#6a6a6a36] ">

        <h3 class="text-2xl mb-6  font-bold text-[#302f2f] dark:text-[#D0D0D0]  ">${service.title}</h3>
        <p class="my-2 text-[#646464]   font-normal   leading-8 text-xl lg:[font-size:15px] 2xl:[font-size:18px]  dark:text-[#FFFFFF]  ">${service.text} </p>
    </div>

</div>
`
document.querySelector(`#service1`).insertAdjacentHTML("beforeend",ser_temp)
})



history.forEach(story=>{
    let stry_temp = ` <div class="p-4  bg-[#72727217] dark:bg-[#2C2C2C]  intersect-once intersect:motion-preset-slide-up   rounded-xl ">
    <h2 class="text-2xl font-black dark:text-white intersect-once intersect:motion-preset-slide-up  ">${story.title}</h2>
    <p class="text-[#212121]  mt-2.5  text-lg   leading-9 font-light  2xl:text-2xl    dark:text-[#dbdbdb]    intersect-once intersect:motion-preset-slide-up  ">${story.text}</p>
</div>    
`
document.querySelector(`#history`).insertAdjacentHTML("beforeend",stry_temp)
})

temaD = 0

team.forEach(person=>{

    temaD+=100

    
    let team_temp = `    <div class="md:w-6/12  lg:w-3/12 p-5">
    <div class="bg-[#54545617] p-4.5  rounded-2xl    flex flex-col gap-5.5 dark:bg-[#282828d9]   h-full   intersect:motion-preset-slide-up motion-delay-[${temaD}ms]        ">
        <img src="${person.img}"  alt="">
        <h2 class="font-bold text-xl text-[#2E2E2E]    pl-2.5 dark:text-[#F8F8F8D6] ">${person.name}</h2>
            <p class="text-xl pl-2.5   dark:text-[#f8f8f8bd] ">${person.teamPosition}</p>
                <div class="flex items-center  gap-2  pl-2.5 mb-2.5    dark:text-white  ">
                    <i class="fa-brands fa-github text-2xl    "></i>
                    <a href="https://github.com/${person.link}" class="text-xl  ">${person.link}</a>
                </div>
    </div>        
</div>`
document.querySelector(`#team`).insertAdjacentHTML("beforeend",team_temp)
})