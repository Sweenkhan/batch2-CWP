// console.log(Math.floor(4.7))     //4   //it will come down and give you first digit before the decimal
// console.log(Math.ceil(4.1))      //5   // it will go up and give you one number above
// console.log(Math.round(4.6))     //5   //it will round your decimal number


// console.log(Math.max(2, 20, 56, 11))   //56
// console.log(Math.min(2, 0, 20, 56, 11)) //0

// console.log(Math.random())

 
let randomNumber = Math.ceil(Math.random() * 100)
let randomNumber2 = Math.floor(Math.random() * 100) + 1

// console.log(randomNumber2)



function mobileNumberGenrate(){
    let mobileNumber = ""
    
    for(let i = 1; i <= 10; i++){
        // let randomNumber = Math.ceil(Math.random() * 9) 
        // mobileNumber += randomNumber
        mobileNumber += Math.ceil(Math.random() * 9) 
    }

    return mobileNumber
     
}

console.log(mobileNumberGenrate())