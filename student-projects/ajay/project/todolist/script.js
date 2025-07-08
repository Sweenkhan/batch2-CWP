let input = document.querySelector("input")
let saveBtn = document.querySelector("button")
let ul = document.querySelector("ul")



saveBtn.addEventListener("click", () => {

    if(input.value.trim() === ""){
        alert("plese enter the value")
        return ;
    };

    let li = document.createElement("LI")
     li.innerHTML = `${input.value} <button class="delete">x</button>`

     console.log(li.innerHTML);

     ul.appendChild(li)
     input.value = ""

     li.firstElementChild.addEventListener("click", ()=>{
        li.remove()
     })

    li.addEventListener("dblclick", () => {

    }) 
})