// // let, var, const

// //----------------------------------------------7 PRMITIVE DATA TYPE-----------------------------------------
// // string data type
// let name = "ajay"                  //double quote string
// let name1 = '23'                   //singl quote string
// let name2 = `sagar`                // template literal


// // number data type:
// let age = 646464.000                   //number data type


// // undefined data type
// let mobile ;                         //undefined


// // null data type
// let telephone = null                 //its a null data type:-> but when you check it will show an object

 
// //bollean data type
// let marriage = false                 // boolean has only two values:=> either true or false


// //bigInt data type
// let cardNumber  = BigInt(7757575777757757557557)


// //symbol data type
// let mobile1 = Symbol("ranjit")
// let mobile2 = Symbol("ranjit")



// //-----------------------------------------3 NON  PRIMITVE DATA TYPE----------------------

// //OBJECT data type
// let user = {
//     name : "anil",
//     age : 22
// }



// //Array data type
// let students = ["chanchal", "akash", "sagar", "ajay"]
// // note : its an array data type, but if you will check with typeof keyword, it will you object in return


// //function data type
// function greet(){
//     return "hi welcome to our website"
// }


// // console.log(typeof students)
 

// // const lastName = "kumar"


// // Questions
// let firstName = "sandeep";
// lastName = "sharma"
// car = "maruti"



// // console.log(userone)                        //error
// let userone ;
// // console.log(userone)                       //udefined


// userone = "ankit"
// // console.log(userone)                        //ankit




// usertwo = "rakesh"
// console.log(usertwo)                           //rakesh

// var usertwo;  //or   var usertwo = "rakes"



// let date1 = new Date("2025-06-01");
// let date2 = new Date("2025-06-09");

// let diffMs = date2 - date1;
// let diffDays = diffMs / (1000 * 60 * 60 * 24);
// console.log(diffDays);  // 8
let days = ["sunday", "monday", "tuesday", "wednesday"]

let date = new Date()
let currentYear = date.getFullYear()

let born = new Date("2002-06-01") 
born.getFullYear()


// console.log( days[date.getDay()])
// console.log(currentYear - born.getFullYear())
console.log(date.setDate(1) )