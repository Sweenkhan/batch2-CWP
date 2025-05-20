let input = document.querySelector("input")
let saveBtn = document.querySelector("button")
let ul = document.querySelector("ul") 



saveBtn.addEventListener("click", () => {

    if(input.value === ""){
        alert("please fill out the input ")
        return
    }
 
      let li = document.createElement("LI")
    //   li.textContent = input.value
     li.innerHTML = `${input.value} <button class="delete">x</button>`
 
     ul.appendChild(li)
     input.value = ""

     li.firstElementChild.addEventListener("click", ()=>{
        li.remove()
     })
    
})