// find the biggest and smallest number in array
let coins = [1, 2, 5, 10, 20, 50, 100, 500, 25, -120, 0 ]


let bigNumber = 0;
let smallNumber = coins[0]

for(let i = 0; i < coins.length; i++){
    if(bigNumber < coins[i]){
        bigNumber = coins[i]
    }

    if(smallNumber > coins[i]){
        smallNumber = coins[i]
    }

}

console.log("big Number", bigNumber)
console.log("small Number", smallNumber)




//


