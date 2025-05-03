// scope in javascript

let a = 5;
// var b = 6;
const c = 7


if(true){
    let a = 15;
       var b=16
    const c = 7
   // console.log("inner", a)    //15             //because we have variable in block scope, it will automaticaly give you local vlaue
}
// console.log(b)


// if(true){  
//     console.log("inner", a)    //6               //in block scope we have access of global vairable
// }



let sum = 0
for(let i = 1; i<=10; i++){
    let name1 = "chancal"
    sum += i
}

// console.log(sum)
// console.log(name1)           //it will give you an error. at this time we dont have name1 variable




// -------------------------------nested function with scope-----------------------------------

let lastName = "kumar"

function one(){
    let firstName = "anil"

    function two(){
        let fullName = "sachin singh"
        console.log(firstName)
    }

    two()
    // console.log(fullName)
}

// one()




// calling function inside a function----------------------------------------------

function byeBye(){
    console.log("bye bye user")
}

function greet(){
    console.log("hello, welcome user")
    byeBye()    
}

// greet()





// function scope with:                          in functional scope declared variable(let, const, var).
                                              // you dont have access in global scope
 function printing(){

    var age = 22
    console.log("inner", age)
 }

// printing()
// console.log("outer" , age)


let phone = 55555555555
for(let i = 0; i< 5; i++){

    let phone = 588585885
    console.log(i)
}


for(let i = 0; i< 5; i++){
    let phone =474757585858
    console.log(i)
}

console.log(phone)



