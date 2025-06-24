function add(a, b){
 return a + b
}



let a = 4 
let b =10
add(a, b)   //14
add(10, 15)  //25



let profile = {
    name: "sween",
    age: 23,
    email: "sween@gmail.com"
}

console.log(profile.name)

// object destructering 
let {name, age, email} = profile
console.log(name)