function evenOrOddNumber(number){
 
    if(number % 2 === 0){
        return "yes this is an even number"
    } else {
        return "yes this is an odd number"
    }

}



function isOddNumber(number){
    if(number % 2 !== 0 ){
        return "yes this is an odd number"
    } else {
        return "not odd number"
    }
}



console.log(evenOrOddNumber(12))
// console.log(isOddNumber(12))