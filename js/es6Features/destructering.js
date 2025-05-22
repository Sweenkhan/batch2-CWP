let profile = {
    name : "sween",
    age: 23,
    email: "khansween@gmailc.com",
    courseName: "mern stack developer",
    duration: "6 months",
    debitCardNumber: "4775-5858-4444"
}
// console.log(profile.name)
// console.log(profile.age) 
// console.log(profile.email) 


//OBJECT destructring   :its allows you to save the object property into short name
let { age, email, name, debitCardNumber, courseName} = profile


let {debitCardNumber : card} = profile                           //giving new name of our exsiting property from an object
console.log(card)


//Array destructering
let names = ["rakesh", "rahul", "ravi"]
  .at.


