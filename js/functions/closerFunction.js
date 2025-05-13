 
function counting(){ 
    let count = 0
    count++ 
    return count
}

let result = counting() 
// console.log(result)        //1
// console.log(result)        //1
// console.log(result)        //1



//scope : its allow you to keep a variable private. and it will remind the current value 
function count2(){
    let count = 0

    return function(){
        count++
        return count
    }  
}



let result2 = count2()

console.log(result2())   //1
console.log(result2())   //2
console.log(result2())   //3
console.log(result2())   //4
console.log(result2())   //5 


 

 