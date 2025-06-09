// // find the biggest and smallest number in array
// let coins = [1100, 2, 5, 10, 20, 50, 100, 500, 25, 120, 0 ]
// let coinsNotes =  [ 2, 5, 10, 20, 50, 100, 25, [100, 200, 500, 1000, [0, 2, [5555]]] ]


// let bigNumber = 0;
// let smallNumber = coins[0]

// for(let i = 0; i < coins.length; i++){
//     if(bigNumber < coins[i]){
//         bigNumber = coins[i]
//     }

//     if(smallNumber > coins[i]){
//         smallNumber = coins[i]
//     }

// }

// // console.log("big Number", bigNumber)
// // console.log("small Number", smallNumber)



// //sum of an array
// let reduceArray = coins.reduce((acc, curr) => acc += curr)
// // console.log(reduceArray)


// //sorting an array
// let sortingArray = coins.sort((a, b) => a - b)     //sorting an array form of accendign      
// // let sortingArr = coins.sort((a, b) => b - a)     //sorting an array form of desc
 

// //reverse()                                        //it will reverse your array
// // console.log(sortingArray.reverse())

// // console.log("original array", coinsNotes)

// let flating = coinsNotes.flat()                   //one level flatting array
// let flating2 = coinsNotes.flat(2)                 //two level flatting an array
// let infiniteFlatting = coinsNotes.flat(Infinity)  //infinite flatting
 

// //sum of an array
// let sum = 0;
// for(let i = 0; i< infiniteFlatting.length; i++){
//  sum += infiniteFlatting[i]
// }
// // console.log("sum of an array", sum)




// //numbers which are greater than 500
// let result = []
// for(let i = 0; i< infiniteFlatting.length; i++){
//       if(infiniteFlatting[i] <= 500){
//         result.push(infiniteFlatting[i])
//       }
//    }

//    console.log(result)






 //convertionh strin to array, adding new value. and again conver array to string
    let students = 'ajay,rakesh,ravi,ranjit,raju'

    let splitArray = students.split(",")            //convert string to array based on given character

    // let lastItem = splitArray.splice(4, 1, "raju-kumar")

    let arrayToString = splitArray.join("-kumar ")           //conver array to a string 
    console.log(arrayToString)


    
 
    //   console.log(date.setDate(5))
 
 


