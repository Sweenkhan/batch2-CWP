let allInputs = document.querySelectorAll("input") 
let btn = document.querySelector("button")
let allP = document.querySelectorAll("p")


// localStorage.clear()
btn.addEventListener("click", ()=>{
   let name =  allInputs[0].value
   let age = allInputs[1].value

   localStorage.setItem("name", name)
   localStorage.setItem("age", age)

   allInputs[0].value = ""
   allInputs[1].value = ""

   showData()
 
})



showData()

function showData(){
allP[0].innerText =`Name: ${localStorage.getItem("name")}`
allP[1].innerText =`Age:  ${localStorage.getItem("age")}`
}
