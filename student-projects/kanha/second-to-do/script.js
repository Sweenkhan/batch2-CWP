 let input = document.querySelector("input");
let btn = document.querySelector("button");
let unOrderList  = document.querySelector("ul");

btn.addEventListener("click",()=>{
    if(input.value.trim()===""){
        alert("please fill out the input");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${input.value} <i class="bi bi-archive-fill"></i>`;
    unOrderList.appendChild(li);
    li.lastElementChild.addEventListener("click",()=>{
        li.remove();
    })
    input.value = "";
})


 



 