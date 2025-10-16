let inputtext = document.querySelector ("input");
let p = document.getElementById("pelement");

 inputtext.addEventListener ("input",(e)=>{
     p.innerText = e.target.value;
     p.style.color = "blue"
 });


let omg = document.getElementById("omg");
let ul = document.querySelector("ul")

omg.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "Hello";
    ul.appendChild(li);
});



let omg1 = document.getElementById("omg1");
let omege = document.getElementById("omege");

omg1.addEventListener("click", () => {
    omege.textContent += "Hello";
});