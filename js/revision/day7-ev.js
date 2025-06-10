// what is callback?
//note: callback is a function, which passes to another function as an argument.


function add(){
    console.log("hi i will add the two numbers")
}


function greet(callback){
    console.log("welcome to our website") 
   callback() 
}


// greet(add)




// -----------------------------------------------setInterval and settimeout----------------

// console.log("hiiiii")
// setTimeout(()=>{
    
//     console.log("hi welcome to our website")

// }, 2000)




let count = 0

let intervalID = setInterval(() =>{

    let date = new Date()
    console.log(date.toLocaleTimeString())

    count++
    console.log(count)

    if(count === 20){
        clearInterval(intervalID)
    }

}, 1000)



