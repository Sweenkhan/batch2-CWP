let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let mobile = document.querySelector("#mobile")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let showPassword = document.querySelector(".showPassword")
let submitBtn = document.querySelector(".submitBtn")
 let allInputs = document.querySelectorAll("input");
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/
submitBtn.addEventListener('click',(e) => {
         //it will stop the default behaviou of submit event. which is refresh the page
     e.preventDefault(); 
         if(firstName.value.length <= 3){
       document.querySelector("#firstNameError").textContent = "Enter Firstname"
       return
    }

    if(lastName.value === ""){
       document.querySelector("#lastNameError").textContent = "Enter Lastname"
       return
    }
   
    if(mobile.value.length < 10 || mobile.value.length > 10){
        document.querySelector("#mobileError").textContent = "mobile should be 10 digit"
        return
    }

    if(email.value === ""){
        document.querySelector("#emailError").textContent = "Email is required"
        return
    }


    if(!passwordPattern.test(password.value)){
         document.querySelector("#passwordError").textContent = "Password should include one upperCase letter, one lowerCase letter, one special character. minimum 8 letter password is required"
        return
        }
    
         
        allInputs.forEach((input) => {
              input.value = ""
 })
        
})

// live clearing error from error div
 allInputs.forEach((inputs) => { 

     inputs.addEventListener("input", (e)=>{ 
      e.target.nextElementSibling.textContent = ""
     }) 

})

showPassword.addEventListener('click',(e)=>{
    e.preventDefault()
    document.querySelector("#password").type = (document.querySelector("#password").type === "password")? "text":"password";
})