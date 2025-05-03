let string = "application"

let vowels = ["a", "e", "i", "o", "u"]

 
let count = 0
for(let i = 0; i < string.length; i++){
      
    if(vowels.includes(string[i])){
      count++

    }
}

console.log(count)








// remove duplicate numbers

let nums = [7, 8, 7, 7, 9, 11, 56, 11]

let filterNums= []

for(let i = 0; i < nums.length; i++){
 
    if(filterNums.includes(nums[i])){
         console.log("exist")
    } else {
        filterNums.push(nums[i])
    }

}


console.log(filterNums)