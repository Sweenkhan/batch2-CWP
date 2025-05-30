// let btn = document.querySelector("button")
let form = document.querySelector("#create-account")
let mobileInput = document.querySelector("#mobile")
let firstNameInput = document.querySelector("#firstName")
let passwordInput = document.querySelector("#password")
let lastNameInput = document.querySelector("#lastName")
let emailInput = document.querySelector("#email")



form.addEventListener("submit", createAccount)

function createAccount(e){
    e.preventDefault();
    
    
    fetch("https://67fa4b3b8ee14a5426274c3c.mockapi.io/api/student/employe", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            firstname: firstNameInput.value,
            lastname: lastNameInput.value, 
            mobile: mobileInput.value,
            email: emailInput.value,
            password: passwordInput.value,
                        })
    }).then((res) =>{
               return res.json()
    }).then((response) => {
            console.log(response)
    })
}