let submitBtn = document.querySelector("button")
let mobileInput = document.querySelector("#mobile")
let firstNameInput = document.querySelector("#firstName")
let passwordInput = document.querySelector("#password")
let lastNameInput = document.querySelector("#lastName")
let emailInput = document.querySelector("#email")
let errorMassage = document.querySelector(".errorMessage") //errorMessage
 


// Regex
let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

     errorMassage.textContent = ""


    if(firstNameInput.value.length <= 3){
         errorMassage.textContent = "Error: Please enter your first name"
         return
    }

    if(lastNameInput.value === ""){
          errorMassage.textContent = "Error: Please enter your last  name"
         return
    }

    if(emailInput.value === ""){
          errorMassage.textContent = "Error: Please enter your email address"
         return
    }

     if(mobileInput.value.length < 10 || mobileInput.value.length > 10 ){
          errorMassage.textContent = "Error: Please add 10 digit in your mobile input"
          return
    }

    if(!pattern.test(passwordInput.value)){
        errorMassage.textContent = "Error: Please add at least one upper latter, lower latter, one digit, minimum 8 char"
        return
    }


    console.log("your form has been submitted")
    firstNameInput.value = ""
    lastNameInput.value = ""
    emailInput.value = ""
    mobileInput.value = ""
    passwordInput.value = ""
    
    
})