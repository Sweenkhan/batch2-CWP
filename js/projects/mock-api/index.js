let form = document.querySelector("#create-account")
let firstNameInput = document.querySelector("#firstName")
let lastNameInput = document.querySelector("#lastName")
let emailInput = document.querySelector("#email")
let mobileInput = document.querySelector("#mobile")
let passwordInput = document.querySelector("#password")

let getData = document.querySelector(".get-data")
let deletData = document.querySelector(".delete-data")

let url = "https://67fa4b3b8ee14a5426274c3c.mockapi.io/api/student/employe"



function registerAccount(e){

    e.preventDefault()  // it will prevent the default behaviour.(whih is stop to refreshing the page)
    let employe = {
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        email: emailInput.value,
        mobile: mobileInput.value,
        password: passwordInput.value
    }
 

    fetch(url, {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body : JSON.stringify(employe)
    })
    .then((res) =>{
        return res.json()
    })
    .then((response) => {
          console.log(response)
    })
    .catch((err)=>{
       console.log(err)
    })

}


form.addEventListener("submit", registerAccount)



// fetchind data with get request
// getData.addEventListener("click", ()=>{
//     fetch(url)
//     .then(res => res.json())
//     .then((response) => {
//         console.log(response)
//     })
// })



//delete request
// deletData.addEventListener("click", ()=>{

//     fetch("https://67fa4b3b8ee14a5426274c3c.mockapi.io/api/student/employe/4", {method: "DELETE"})
//     .then(res => res.json())
//     .then((response) => {
//         console.log(response)
//     })

// })

