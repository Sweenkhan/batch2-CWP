import studentData from "./data.js";

let input = document.querySelector("input")
let btn = document.querySelector("button") 
let nameEle = document.querySelector(".name")
let ageELe = document.querySelector(".age")
let mobileEle = document.querySelector(".mobile")
let scoreEle = document.querySelector(".score")



btn.addEventListener("click", () =>{
    // console.log(input.value.trim())

   let allnames = studentData.map((student) =>{
         return student.name
   })

//    console.log(allnames)
    if(!allnames.includes(input.value)){
       alert("user not found")
       input.value = ""
       return
   }


   let filterData =  studentData.filter((student) =>{
        return student.name === input.value
    })


   nameEle.innerText = `Name:  ${filterData[0].name}`
   ageELe.innerText =`Age:  ${filterData[0].age}`
   mobileEle.innerText =`Mobile:  ${filterData[0].mobile}`
   scoreEle.innerText = `Score:  ${filterData[0].score}`

   input.value = ""

})




// let firstName = "vasu"
// let lastName = "pareek"

// // let fullName = firstName + " " + lastName
// // let fullName = firstName + " pareek"


// // `hi how are you ${firstName}`
// let greet1 = "hello " + " " + firstName + " " + lastName + ", how are you"


// //templater literal
// let greet = `hello ${firstName} ${lastName}, how are you.`


// console.log(greet1)

// let coins = [8, 49, 11]

// console.log(!coins.includes(10))