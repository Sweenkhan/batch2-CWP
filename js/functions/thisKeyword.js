// console.log(this) only work with function expression inside an object


let profile = {
    firstName: "kiran",
    lastName: "kher",
    age: 66, 

    fullName: function(){
         return this.firstName + " "+ this.lastName
    },
    about: function(){
        return `hello i am ${this.firstName}, and i am ${this.age} years old. i want to work with you`
    }
}

 



console.log(profile.about())