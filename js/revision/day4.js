// loop in js
// note: JavaScript loops are control structures that allow you to execute a block of code repeatedly.

// for loop
// syntax:      for(initialization, condition, inc/dec){
                    //    code for execution
//                   }

 

// for(let i = 50; i <= 100; i++){
//     console.log(i)
// }


// for(let i = 100; i >= 50;  i--){
//     console.log(i)
// }

 
let data = [
    {
    name: "anil",
    age: 22,
    score: 87
},
 {
    name: "vasu",
    age: 22,
    score: 97
},
 {
    name: "rahul",
    age: 22,
    score: 77
},
 {
    name: "akash",
    age: 21,
    score:  99
}, {
    name: "chanchal",
    age: 22,
    score: 100
},
 { 
    name: "kanha",
    age: 21,
    score:  98
}
]



// console.log(data[0])        //first value from an array
// console.log(data[0].score)
// console.log(data[1].score)
// console.log(data[2].score)
// console.log(data[3].score)


//taking all data
// for(let i = 0; i < data.length ; i++ ){
//     console.log("Name :", data[i].name)

//     console.log("Score :", data[i].score)
// }




// filtering data with name
// for(let i = 0; i < data.length ; i++ ){

//     if("chanchal" === data[i].name) { 

//         console.log(data[i].name)
//         console.log("Score :", data[i].score)
//     }

// }



//filtering data with score
for(let i = 0; i < data.length ; i++ ){

    if( data[i].score > 90) {  
        console.log(data[i].name)
        console.log("Score :", data[i].score)
        console.log("Grade A+")
    }

}
