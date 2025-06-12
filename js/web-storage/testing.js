//local storage: With web storage, applications can store data locally within the user's browser.
//Note: it takes data only in json format

// let firstname = "sween"
// let age = 25

let profile = {
    name: "ajay",
    age: 22,
    course: "full stack "
}

let objToString = JSON.stringify(profile)



//save items in localestorage
localStorage.setItem("firstName", "sween")
localStorage.setItem("lastName", "khan")                           // set item in localestorage

localStorage.setItem("userProfile", objToString) 


//get items from localstorage
console.log(localStorage.getItem("firstName"))

let stringToObj = JSON.parse(localStorage.getItem("userProfile"))

console.log(stringToObj) 









localStorage.removeItem("lastName")        //remove item from localStorage 
// localStorage.clear()                       //clear all items from localstorage

 