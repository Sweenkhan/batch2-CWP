// square root
// for(let i = 1; i < 10; i++){
//     console.log(i*i) 
// }


//optional
// for(let i = 1; i <= 5; i++){

//     for(let j = 1;  j <= i; j++){
//         console.log(j)
//     }
// }

 

let data = [
    {
    name: "anil",
    age: 18,
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

// data[0]
//   array.foreach(()=>{} )
// note: this loop will run only on your existing array. it will iterate every value

// data.forEach( (student) => {
//       console.log("Name: ", student.name)
//       console.log("Score: ", student.score)
// })



// optional
// let result = []
// data.forEach((student) => {
//          result.push(student.score)
// })
// console.log(result)




//MAP method of js   
// notes:  it will give you an array in return
//         iterate every single value

let scoreOfstudents = data.map((student) => {
        return student.score 
})
 





//-----------------------------------------------FILTER method of js----------------------------
// note: it will also you give an array in return, and give all the data based on your condition

let filterScore = data.filter((student) => {
      return student.score > 99
})      
                //    or
let filterScore1 = data.filter( student => student.score < 90 )

 








let totalSale = [200, 400, 600, 700, 800, 45, 66, 77, 90, 100]
let sum = 0

// for(let i = 0 ; i < totalSale.length; i++){
//     // sum = sum + totalSale[i]
//     sum += totalSale[i]
// }
// console.log(sum)
 
//-----------------------------------------REDUCE METHOD--------------------------------------------
// NOTE: it will give you in return a number, which will total sum of your array
let sum1 = totalSale.reduce((acc, curr) => {
    return acc += curr
})


console.log(sum1)