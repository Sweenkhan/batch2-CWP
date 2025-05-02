// function in javascript
// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).
// console.log(name)
let name = "sween khan"




// A. function declaration
// key: it can be hoisted         console.log(greet())
// return is neccessary 

function greet(){
    return  "hello, welcome to our website"
}



//B. function expression
// key: it can't be hoisted.  
// better for conditionl scenario .
// return is neccessary 
// work with this keword

// console.log(greet2())
let greet2 = function(){
    return "hello, welcome to our website"
}



//c. arrow function
// key: it can't be hoisted.  
// return is not neccessory

let greet3 = () => "(arrow function) : hello, welcome to our website"




// -------------------------------------------------------------------------------------------
// function greet4(){
//     console.log( "hello, welcome to our website")
// }

// greet4()



// parameters in js :                when you are declaring a function, and giving some values.
function add(a, b){
          return a + b
}


// let a = 2
// let b = 4
// console.log(add(a, b))            //aarguments in js, when you are calling the function and sending some values
               
                //  OR 
// console.log(add(2, 4))  






// -----------------------------default parameter in js------------------------------------------

function multiply(a = 2, b = 4){
    return a * b
}
// console.log(multiply())



function welcome(name, age){
         return `${name}, welcome to our bog website. i think your age is ${age}.`
}

 
console.log(welcome("virat", 36))
  


