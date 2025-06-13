// closure A closure in JavaScript is a function that remembers and has access to variables 
// from its outer (enclosing) function's scope, even after the outer function has finished executing


// let btn = document.querySelector("button")
// let resultEle = document.querySelector("p")


function likes(){
    let countingLikes = 0;

   return function incr(){
        countingLikes++
        return countingLikes
    }
}



// let likeResult = likes() 

// btn.addEventListener("click", ()=>{
//     console.log("likes")
//         resultEle.innerText =  likeResult()
// })



//---------------------------------------------------hoisting concept in js--------------------------------------
//Note:  var vairable name and function decleration along with data will be hoisted

// console.log(address)            //it will give you result undefined
// console.log(add)                //you will get error


let add = "tutujjtttuut"
var address = "tuturaratuturara"    //it will be hoisted

// greet()


function greet(){
    console.log("hello and welcome")
}






//-------------------------------------------------this concepts-----------------------------------------
//this refer to current context. current context can change
console.log(this)   

let profile1 = {
    courseFees : 28000,
    courseDuration: "6 months",

    message: function(){ 
        console.log(`hello ajay you coursefees ${this.courseFees}, and you course duration will be ${this.courseDuration}`)
    }
}

  
profile1.message()