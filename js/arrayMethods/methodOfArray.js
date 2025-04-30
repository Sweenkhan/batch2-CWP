let coins = [1, 2, 5, 10, 20, 50, 100, 500, 25 ]
// let billingOfTheDay = [450, 650, 8585, 58, 589]
let names = ["rahul", "ajay", "ravi", "rakesh"]
// console.log(coins[2])


// for(let i = 0; i < coins.length; i++){
//     // console.log(coins[i])
//     console.log(coins[i])
// }


//methods of an array       map(), filter(), reduce()


// for(let i = 0; i < names.length; i++){
//     console.log(i+ ":" + names[i])
// }


// array.map(() => {})  
    // key: 
    //  1. it will return a new array 
    //  2. it will not change your original array
let printNames = names.map( (name) => {
       return " hello " + name 
})




// array.filter(() => {})  
    // key:
    // 1. it will return you a new array.
let result = coins.filter((coin, i) => {
       return  coin < 50
})

// OR
let filterArray = coins.filter(coin => coin < 50) 
// console.log(filterArray)




// array.reduce(() => {}, initialValue)
// it will give return you a number
let reducer = coins.reduce((acc, curr, ) => {
       return    acc +=  curr
},1000)


// console.log(names)
// console.log(printNames)
// console.log(result)
// console.log(reducer)




//forEach(() => {})
    // it works like your for loop, but it will not give you any return 
// names.forEach((name, index) => {
//        console.log(name, "kumar")
// })




// for(let i = 0; i < coins.length; i++){
//     if(coins[i] >= 50){
//         console.log(coins[i])
//     }
// }



let totalMoney = 0
for(let i = 0; i < coins.length; i++){
    // totalMoney = totalMoney + coins[i]
    totalMoney += coins[i]
}
 
 
 






