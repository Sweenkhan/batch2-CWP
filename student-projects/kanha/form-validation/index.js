let submitBtn = document.querySelector(".submit")
let showPassword = document.querySelector(".showPassword")
let mobileInput = document.querySelector("#mobile")
let firstNameInput = document.querySelector("#firstName")
let passwordInput = document.querySelector("#password")
let lastNameInput = document.querySelector("#lastName")
let emailInput = document.querySelector("#email")
let allInputs = document.querySelectorAll("input")



// Regex
let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();    //it will stop the default behaviou of submit event. which is refresh the page


    if (firstNameInput.value.length <= 3) {
        document.querySelector("#firstNameError").textContent = "Write a valid Firstname"
        return
    }

    if (lastNameInput.value === "") {
        document.querySelector("#lastNameError").textContent = "Lastname is required"
        return
    }

    if (emailInput.value === "") {
        document.querySelector("#emailError").textContent = "Email is required"
        return
    }

    if (mobileInput.value.length < 10 || mobileInput.value.length > 10) {
        document.querySelector("#mobileError").textContent = "Mobile number should be 10 digit"
        return
    }

    if (!pattern.test(passwordInput.value)) {
        document.querySelector("#passwordError").textContent = "Password should include One upperCase letter, one lowercase, one special chracter. minimum 8 letter"
        return
    }

    console.log("your form has been submitted")
    //     firstNameInput.value = ""
    //     lastNameInput.value = ""
    //     emailInput.value = ""
    //     mobileInput.value = ""
    //     passwordInput.value = ""
    //OR 
    allInputs.forEach((input) => {
        input.value = ""
    })

})



//live clearing error from error div
allInputs.forEach((inputs) => {

    inputs.addEventListener("input", (e) => {
        e.target.nextElementSibling.textContent = ""
    })

})


showPassword.addEventListener("click", (e) => {
    e.preventDefault()
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password"
})



