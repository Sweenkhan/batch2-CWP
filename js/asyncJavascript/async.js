// console.log("one")
 
// setTimeout(()=>{
//     console.log("two")
// },0)


// console.log("three")
// console.log("four")



// for(let i = 0; i< 100; i++){
//     console.log(i)
// }

// note: bydefault javascript is a syncronous programing language
//         its a single thread language





// syncronous (blocking code)                                            asyncronous(non blocking code)

                                                                        // setInterval, setTimeout
                                                                        // dom api
                                                                        // fetch




function one(){
    two()
    console.log("one")
}

function three(){
    console.log("three")
}

function two(){
    three()
    console.log("two")
}


// one()



// blocking code : syncronous programming
console.log("filling the form")
// .........processing.......
console.log("your form has been submitted")         // or (this email is already registred)




