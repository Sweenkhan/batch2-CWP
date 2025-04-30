let profile = {
    firstName: "sween",
    lastName: "khan",
    age: 24, 
}

console.log(profile["age"])




for(let key in profile){
    console.log(key, ":" + profile[key] )
}