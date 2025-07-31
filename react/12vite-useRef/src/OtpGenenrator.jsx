import React,{useRef, useState} from 'react'


function OtpGenenrator() {

    let inputs = useRef([]);
    let paraRef = useRef(null) 

    const [otpValue, setOtpValue] = useState('')


    function handleChange(e, index){
       const value = e.target.value;

       if(value.length === 1 && index < inputs.current.length - 1){
        inputs.current[index + 1].focus()
       } 

       updateOtp() //adding otp value in stateVariable
    }

 
    function handleKeyDown(e, index){
       if(e.key === "Backspace" && !e.target.value && index > 0){
        inputs.current[index - 1].focus()
       }
    }

    
 //create the funcnality for saving otp
    function updateOtp(){
       let otpdata =  inputs.current.map((input) => input.value).join('')
       setOtpValue(otpdata)
    }


    function handleSubmit(){
        console.log("Entered Otp is", otpValue)  
        inputs.current.map((input) => input.value = "")
    }



// function handleClick(){
//         // console.log(paraRef.current.innerHTML)
//         paraRef.current.innerHTML = "yes i have changed you"
//         paraRef.current.style.color = "red"
//         paraRef.current.classList.add("paragraph")
//     }


    return (
        <div>
            <p ref={paraRef}>OtpGenenrator</p>

            <div   >
              {
                [0, 1, 2, 3].map((_, index) => {
                    return(
                      <input   
                       key={index}
                       type='text'
                       maxLength="1"
                       style={{
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        fontSize: "20px"
                       }}

                       onChange={(e) => handleChange(e, index)}
                       onKeyDown={(e) => handleKeyDown(e, index)}

                       ref={(el) => (inputs.current[index] = el)}
                      />
                    )
                })
              }

              <button onClick={handleSubmit} style={{display: "inline-block"}}>submit</button>
              {/* <button onClick={handleClick}>para ref</button> */}
            </div>
        </div>
    )
}

export default OtpGenenrator