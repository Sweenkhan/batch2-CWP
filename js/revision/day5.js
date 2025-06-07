let names = ["chanchal", "ajay"]

names.push("anil", "akash")          //adding name in array from last
names.push("vasu")
names.pop()                          // removing value from last side

names.unshift("sagar")               //adding value from first side
names.shift()                        //removing value from first side


let takingName = names.slice(0, 3)    //taking values form array. but it will not change you original array
let takingNames = names.slice(0)      // all values from given index number
 

// let extracingValue = names.splice(1, 2)   //it will change your original array
// note starting index and removing count value


// let replacingValue = names.splice(2, 2, "kanha")

// console.log(replacingValue)

 
// console.log(names.indexOf("anil"))
// names.splice(2, 1, "kanha")
// console.log(names)



//-------------------------------------------object revision---------------------------------
let profile = { 
    name: "sween",
    age: 23,
    mobile: 5885858858,
    address: "b-12, 1st avenue"
}

profile.age = 25                              //updating previous value
profile.email = "khansween@gmail.com"         //adding new value

// console.log(profile.name)                   //accessing value
// delete profile.age                          //deleting property from an object


// let profile2 = profile                       //it will give you original reference, (means changing in one object, reflect in other object also)
// profile2.name = "shabir"

// let profile3 = {...profile}                    //spread operator. it is creating new space                 
// profile3.name = "lokesh"


// console.log(profile.age)
// console.log(profile["email"])





//-----------------------------------------------loop for object------------------------------------------------- 
for(let keys in profile){
    //  console.log(keys )
     console.log(keys," " + profile[keys])
}

