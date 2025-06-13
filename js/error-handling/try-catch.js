//  try{ 
//     // whatever you want to write code which is going to execute. that will be here
//      let name = "sween"
//      console.log(name, age)

//  }catch(eror){
//     //if above task is giving any sort of error that will be handle here
//     console.log(eror.message)
//  }



let allInput = document.querySelectorAll("input")
let btn = document.querySelector("button")
let resultELe = document.querySelector("p")


//you can create your own error
function divide(a, b){
    if(Number(b) === 0)throw new Error("Cannnot divide by zero, please write some another number")
    
        return a / b
}

 

btn.addEventListener("click", () =>{
try{
        let firstValue = allInput[0].value
        let secondValue = allInput[1].value 
 
        resultELe.innerText = `Result: ${divide(firstValue, secondValue)}`
        resultELe.style.color = "black"

    }catch(err){
        // console.log(err.message)
        resultELe.innerText =`Error: ${err.message}`
        resultELe.style.color = "red"
    }
})
 