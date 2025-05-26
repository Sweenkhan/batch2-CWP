// 🔸 What is a Callback?
// A callback is a function passed as an argument to another function.
//  It is called after the first function finishes its task.


// 🔸 Why use Callbacks?
// To handle asynchronous operations, like:


// API requests 
// Reading files 
// Timers (setTimeout, setInterval)



//basic callback

// function greet(name, cb){
//     console.log(`hello ${name}, welcome to our shop`)
//     cb()
// }

// function goodBye(){
//     console.log("good bye")
// }

// greet("ajay", goodBye)

 
function sum(a, b, callback){
  console.log('your sum is', a + b)

  callback()
}


function done(){
    console.log("your task has been completed")
}

sum(5, 10, done)


 
 


//-------------------------------------callback with async task (setTimeout)-------------------------------

// setTimeout(()=>{
//     console.log("set timout is working")
// }, 1000)

//               //or
function greet1(){
    console.log( "hi welcome to our website")
}

setTimeout(greet1, 2000)

 

 