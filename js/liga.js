let list_Lega =[
    {title :"1. License Grant" , text:"The LibreMobileOS project team grants you to use the Software in accordance with the terms and conditions of this Agreement."},
    {title :"2. Termination" , text:"This Agreement is effective until terminated. You may terminate this Agreement at any time by destroying all copies of the Software in your possession. This Agreement will also terminate if you fail to comply with any term or condition of this Agreement. Upon termination, you must destroy all copies of the Software in your possession."},
    {title :"3. Disclaimer of Warranty" , text:`THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. THE LIBREMOBILEOS PROJECT TEAM DISCLAIMS ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING THE WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.`},
    {title :"4. Limitation of Liability" , text:`IN NO EVENT SHALL THE LIBREMOBILEOS PROJECT TEAM BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, LOST PROFITS, BUSINESS INTERRUPTION, OR LOST INFORMATION) ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE, EVEN IF THE LIBREMOBILEOS PROJECT TEAM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`},
    {title :"5. Entire Agreement" , text:`This Agreement constitutes the entire agreement between you and the LibreMobileOS project team and supersedes any prior agreements or understandings, whether oral or written.`},
    {title :"6. Waiver" , text:`No waiver of any term or condition of this Agreement shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition.`},
    {title :"7. Severability" , text:`If any provision of this Agreement is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions shall remain in full force and effect.`},

]




        list_Lega.forEach(lg =>{

            let lega_tempelate = `    <div class="card p-1   ">

            <div class="bg-[#DCD2FF] p-9 rounded-2xl dark:bg-[#0E0C15] intersect-once intersect:motion-preset-slide-up    ">
                <p class="text-[#352020] text-4xl font-semibold md:text-4xl dark:text-white      ">${lg.title}</p>

                <p class="mt-7 text-2xl leading-11  text-[#2d2c30]   font-light  md:text-2xl dark:text-[#bdbdbd]    ">${lg.text}</p>

            </div>
        </div>`

            document.querySelector("#legas").insertAdjacentHTML("beforeend",lega_tempelate)



        })