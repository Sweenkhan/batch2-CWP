// fetch api 
// note: it will give you a promise in return.

// request api type
// GET, POST, PUT, PATCH, DELETE

// syntax :    fetch(url, options)
// fetch(url, {method,  headers, body})


//get request (by default)
fetch("http://randomuser.me/api/?request= 20")
.then((data)=>{
return data.json()
}).then((data) => {
   console.log(data)
})



fetch("http://randomuser.me/api/", {
    method: "POST",
    headers: { "Content-Type" : "application/json"},
    body: JSON.stringify({
       name: "sween khan",
       age: 24,
       mobile: 7005900543
    })
})
.then( res => res.json())
.then((response) =>{
    console.log(response)
})