// let profile = {
//     name: "sween",
//     lastName: "khan"
// }
// console.log(profile["name"])



// let age = 23
// console.log("outer", age)

//--------------------------------------------scope in very basic way-------------------------
// function outer(){
//     console.log("function scope is here")
//     let firstName = "ajay"

//     console.log("inner" ,age)
//     console.log("inner", firstName)
// }

// outer()



//note. lexical scope
// child can access parents property. but parents cannot access child's property.
// and sibling does'nt share data with each other.


function outer(){
    let mobile = 58588558855

    function inner(){
        let tel = "040-44444"
        console.log("inner value" , mobile)
    }


    function inner2(){ 
        console.log("inner2 ", tel)
    }
    
    inner()
    inner2()
    console.log(tel)
    console.log("outer value", mobile)
}



outer()