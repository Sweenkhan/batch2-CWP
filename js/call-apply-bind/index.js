let name = {
    firstName: "sween",
    lastName: "khan",

    printName: function(city, state){
      console.log(this.firstName + " " + this.lastName, "from " + city + "," + state)
    }
}
// name.printName()
// name.printName("hyderabad", "telangana")


//call method. its like borrowing method form other 
let name2 = {
       firstName: "ajay",
       lastName: "kumawat", 
}

let name3 = {
     firstName: "kanha",
       lastName: "pareek", 
}

name.printName.call(name2, "jaipur", "rajsthan")          
name.printName.apply(name3, ["jaipur", "rajsthan"] )    //if you want to pass multipel argument. it should be an array


let name3Print = name.printName.bind(name3, "jaipur", "rajsthan")  //it will bind your object with method
name3Print()






//---------------------------------------------keeping method outside of the object------------------------------

let profile =  {
      firstName: "Rahul",
      lastName: "jat",
      address: "b-12, 1st avenue"
}

let profile2 =  {
      firstName: "vasu",
      lastName: "pareek",
      address: "b-12, 1st avenue"
    }
    
    
    let greet = function(){
        console.log("Hello " + this.firstName + " " + this.lastName +  ", wlcome to our webiste ")
    }
    
    greet.call(profile)
    greet.call(profile2)
    