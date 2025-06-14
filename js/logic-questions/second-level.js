//intermedia level question---------------------------------
//Write a program that prints the numbers from 1 to a specified number. However, for multiples of 3, print "Fizz" 
// instead of the number. For multiples of 5, print "Buzz" instead of the number. 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz". 


//1. fizzbuzz 
function fizzBuzz(num){

    for(let i = 1; i <= num; i++){
        
         if(i % 3 === 0 &&  i % 5 === 0){
            console.log("fizzBuzz")

        }  else if(i % 5 === 0 ) {
             console.log("buzz")

        } else  if(i % 3 === 0){
            console.log( "fizz")

        }else {
            console.log(i)
        }
    }
}

// fizzBuzz(70)


//2.count vowels---------------------------------------------------------
function countVowels(str){
    let vowels = ["a", "e", "i", "o", "u"] 
    let count = 0
    
    for(let i = 0; i < str.length; i++){ 

        if(vowels.includes(str[i])){
            count++
        }
       
    }
    return count
}

// console.log(countVowels("educations"))



//3. remove duplicate from array-------------------------------
let arr = [5, 6, 5, 6, 77, 88, 4, 0, 4, 3, 11, 22, 0, 0]


function removeDuplicate(arr){
   let result = []

   for(let i = 0; i<arr.length; i++ ){

     if(!result.includes(arr[i])){ 
         result.push(arr[i]) 
     } 
   } 
   return result 
}
 
// console.log(removeDuplicate(arr))




//4. counte each diffrent value from array-----------------------------------------------------------
function countEacvalue(arr){
    let result = {}

    for(let i= 0; i < arr.length; i++){
        if(result[arr[i]] === undefined){
             
            result[arr[i]] = 1
        }else{

            ++result[arr[i]]  
        } 
         
    }
      
    return result
}

 
console.log(countEacvalue(arr))

