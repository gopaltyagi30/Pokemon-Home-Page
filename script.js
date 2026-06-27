let inp1 = document.querySelector("#name");
let inp2 = document.querySelector("#email");
let btn = document.querySelector("button")
let cards = document.querySelector(".cards")
let form = document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault(); // Page ko reload hone se rokta h
    if(inp1.value.trim()=="" || inp2.value.trim()=="") return
    cards.innerHTML += `<div class="card">
                <img src="https://thf.bing.com/th/id/OIP.gzV9GOxA4OGWfUbnqX8VCgHaHa?w=188&h=188&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3" alt="image">
                <h3>Name - ${inp1.value}</h3>
                <p>Email - ${inp2.value}</p>
            </div>`
    form.reset(); // input values ko khali kar deta h   
             
})