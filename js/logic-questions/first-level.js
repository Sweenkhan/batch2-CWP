//find the given number, its even or add
function evenOdd(num){
    if(num % 2 === 0){
        return "its an even number"
    } else {
        return "its an odd number"
    }
}

// console.log(evenOdd(11))
 

//2. REVERSE A STRING------------------------------------------------
function reverseString(val){
   let reverse = val.split("").reverse().join("")
    return reverse
}

// console.log(reverseString("sween"))
 


//3. sum of number from 1 to n----------------------------------------
function sum(num){

    let result = 0
     for(let i = 0; i < num; i++){
          result += i
     }

     return result
}

// console.log(sum(10))




//4.Find largest number in array--------------------------------------
 
function largestNum(arr){ 
    let largest = 0

     for(let i = 0; i < arr.length; i++){

        if (largest < arr[i] ){
            largest = arr[i]
        }
     }

     return largest
}

// console.log(largestNum([2, 4, 88, 90, 5, 7000, 6, 3, 55]))



//5. check for palindrome----------------------------------------------------

function palindrome(str){
  let reverseString = str.split("").reverse().join("") 
  return str === reverseString
}

console.log(palindrome("brother"))
 






































































// function primeNumber(num){
//     if(num <= 1){
//         return false
//     } 

//     for(let i = 2; i<= Math.sqrt(num); i++){
//         console.log(i)
//         if(num % i === 0) return false 
//     }

//     return true
// }

// // primeNumber(82)
// console.log(primeNumber(82))