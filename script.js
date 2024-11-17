
let button = document.querySelector("button")

let  raj = document.querySelector(".joke-box")
button.addEventListener("click" ,()=>{
    raj.textContent = "";
    let box = document.createElement("div")
    box.classList.add('active');
    let API =  " https://official-joke-api.appspot.com/random_joke"
    fetch(API)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        let setup = data.setup
        let punchline = data.punchline
       
        box.innerHTML=`
         <p>${setup}</p>
         <p>${punchline}</p>
        `
        raj.append(box)
    })
})
