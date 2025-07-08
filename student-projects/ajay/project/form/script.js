
let firstNameInput = document.querySelector("#firstName")
let lastNameInput = document.querySelector("#lastName")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let showPassword = document.querySelector(".showPassword")
let mobileInput = document.querySelector("#mobileNumber")
let allInputs = document.querySelectorAll("input")
let submitBtn = document.querySelector(".submit")
let chakBox = document.querySelector("#checkDefault")
 

let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(firstNameInput.value.length <= 3){
        document.querySelector("#firstNameError").textContent = "write a valid firstname"
    return
    }


    if(lastNameInput.value === ""){
        document.querySelector("#lastNameError").textContent = "lastname is required"
return
    } 


if(emailInput.value === "") {
    document.querySelector("#emailError").textContent = "Email is required"
return
}

console.log(mobileInput)
if(mobileInput.value.length !== 10 ) {
    document.querySelector("#mobileError").textContent = "Mobile number must be 10 digits long"
    
return
}


if(!pattern.test(passwordInput.value)){
        document.querySelector("#passwordError").textContent = "Password should include One upperCase letter, one lowercase, one special chracter. minimum 8 letter" 
    return
}

console.log("your form has submitted")

firstNameInput.value = ""
    lastNameInput.value = ""
    emailInput.value = ""
    mobileInput.value = ""
    passwordInput.value = ""
})


allInputs.forEach((inputs) => {
    // console.log(inputs)
inputs.addEventListener("input", (e) =>{
e.target.nextElementSibling.nextElementSibling.textContent = ""
console.log( e.target.nextElementSibling)
}) 
})





showPassword.addEventListener("click", (e) => {
    e.preventDefault()
if(passwordInput.type === "text"){
        showPassword.classList.add(".hide")
        showPassword.classList.remove(".hide")
}
    passwordInput.type = (passwordInput.type === "password" ) ? "text": "password"
})

