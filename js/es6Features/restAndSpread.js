// rest and spread operator

let firstname = "rahul"
let lastName  = "kumar"

let name = firstname  
name = "rakesh" 
// console.log(name, firstname)             // so primitive values takes a refrence from old variables

 

let profile = {
    name : "sween",
    age: 23,
    email: "khansween@gmailc.com", 
    address: {
        curr: "b-12, 1st avenue",
        per: "b-13, 2nd avenue"
    }
}

let profile2 = profile
    profile2.age = 24               //it will change the value of both object. means it will original values


//array basic rule.    
let arr = [2, 4, 6, 8] 
let arr1 = [100, 200, 300]
let arr2 = arr
arr2.push(10)                          //it will change also first array's value


 
 //spread opertaor    ...arr               :it takes the values from existing array.
let mergingArray = [...arr, ...arr1]
let arr3 = [...arr, 15, 20, 30]      
// console.log(arr3)                 // [2, 4, 6, 8, 10, 15, 20, 30]


let newProfile = {
    ...profile,
    mobile: 7005858985
}

// console.log(newProfile)






// rest operator in js

// it will take your all arguments in one parameter only  
function printNames(...a){
      console.log(a)
}

printNames("reema", "seema", "geeta", "seeta")