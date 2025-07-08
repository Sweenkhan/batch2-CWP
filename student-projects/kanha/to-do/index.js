
let input = document.querySelector("input")
let savebtn = document.querySelector("button")
let ul = document.querySelector("ul")


savebtn.addEventListener("click",()=>{
    if (input.value=== ""){
        alert("please enter a task")
        return
    }

    let li = document.createElement("LI")
    li.innerHTML = `${input.value}<button class="delete">x</button>`
    ul.appendChild(li)
    input.value = ""
    li.firstElementChild.addEventListener("click",()=>{
        li.remove()
    })

})



