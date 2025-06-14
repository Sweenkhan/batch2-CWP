let programStart = "starting one"
console.log(programStart)

setTimeout(() =>{
console.log("proccessing two")
}, 0)

let programEnd = "ending three"
console.log(programEnd)



// note: global execution context. last in first out

// function greet() {
//   console.log("welcome");

//   function stay() {
//     console.log("waiting");

//     function goodBye() {

//       console.log("good bye"); 
//     }

//     goodBye();
//   }

//   stay();
// }

// greet();
