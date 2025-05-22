let input = document.querySelector("input")
let saveBtn = document.querySelector(".save")
let ul = document.querySelector("ul")


// saveBtn.addEventListener("click", ()=>{
        
//   if(input.value.trim() === ""){
//           alert("please fill out the input")
//           return
//   } 

//   let li =  document.createElement("LI") 
//    li.innerHTML = `${input.value}<button class="delete">delete</button>`
//    ul.appendChild(li)
 
//    li.firstElementChild.addEventListener("click", (e)=>{
//     li.remove()
//    })

//    input.value = "" 
// })


//  OR

let lists = []

saveBtn.addEventListener("click", ()=>{

       if(input.value.trim() === ""){
          alert("please fill out the input")
          return
     } 

     lists.push(input.value.trim())
     createLi()
     input.value = ""
})



function createLi(){
  ul.innerHTML = ""

   lists.forEach((list)=>{

   let li =  document.createElement("LI") 
   li.innerHTML = `${list}<button class="delete">delete</button>`
   ul.appendChild(li)
 
   li.firstElementChild.addEventListener("click", (e)=>{
    li.remove()
   })  

   })
}
