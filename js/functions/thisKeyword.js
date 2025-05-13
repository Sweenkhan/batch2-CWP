// console.log(this) only work with function expression inside an object


// let profile = {
//     firstName: "kiran",
//     lastName: "kher",
//     age: 66, 

//     fullName: function(){
//          return this.firstName + " "+ this.lastName
//     },
//     about: function(){
//         return `hello i am ${this.firstName}, and i am ${this.age} years old. i want to work with you`
//     }
// }


let profile = {
    firstName: "rahul",
    lastName: "sharma",
    age: 66, 

    fullName: function(){
            console.log(this.firstName + " " + this.lastName)
    },

    greet: function(){
        console.log(`hello ${this.firstName} ${this.lastName}, welcome to our platform`)
    }
    
}

profile.fullName()
//  profile.greet()

