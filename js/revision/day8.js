// // A. ----------------------syncronous programming-----------------------(blocking - code)
// // Note: it will finish first task then go for next task.


// // console.log("start")

// // for(let i = 0; i < 40; i++){
// //     console.log(i)
// // }
// // console.log("end")




// //B. ----------------------------------asyncronous programming---------------------(none blocking - code)
// // Note: it allow us to execute next line.

// // console.log("start")

// // setTimeout(() => {
// //     console.log("processing")
// // }, 0)

// // console.log("end")






















// // What is promises in js?

// // The Promise object represents the eventual completion (or failure) of an asynchronous operation 
// // and its resulting value.
// //note: promise has three states ("pending", "fullfilled," "rejected")




// //What is api?
// //An API (Application Programming Interface) is a set of rules and specifications that allows 
// // different software components or programs to communicate and share data

// let data ;

// fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad &appid=1a4e51c7377e8cf939cbc51bb433a57f" )
// .then((result) => {
//     return result.json() 
// })
// .then((response) => {
//     console.log(response)  
//   console.log ( Math.round(response.main.temp - 273)) 
// })
// .catch((err) => {
//    console.log(err)
// })



// console.log(data)



 