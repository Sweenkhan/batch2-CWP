let names = ["rakesh", "rahul", "ajay", "ranjit", "priya", "akash"]


// console.log(names)
// console.log(names[0])        // "rakesh"        // giving first value in you array
// console.log(names.length)    // 4               //its counting the items in your array
// console.log(names[names.length-1] ) 


// to add new value in our existing array,
// push()

names.push("soniya")
names.push("rabia")


// to remove last value from an array
//pop()

names.pop()
names.pop()


// to remove value from first index
// shift()

names.shift()
names.shift()


//to add value in first index
names.unshift("chanchal", "minakshi")
// console.log(names)





// slice, splice, split, join 

// slice           //slice(initialize, before the index)           //you can take only the values from the array
// key point:   it will give you new value


let names2 = ["rakesh", "rahul", "ajay", "ranjit", "priya", "akash"]
let sliceNum = names2.slice(2, 4)

// console.log(names2.slice(4))
// console.log(sliceNum)

 
//splice       splice(startingIndex, how many value you want to remove,   adding new values)
// key point:  it will change your original array 

 names2.splice(2, 3) 
 console.log(names2)

