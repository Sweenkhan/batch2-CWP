import { useState } from "react"

 

function App() { 
 
 let [name, setName] = useState("")
 let [inputVal, setInputVal] = useState("")
 let [email, setEmail] = useState("")
 let [err, setErr] = useState("")

 

  function handleClick(){ 
    console.log("working")
    if(email.includes("@")){
      alert("add @ in your email address")
    }
    setName(inputVal)
    setInputVal("")
  }


  function handleChange(e){  
    let newEmail = e.target.value
    
    setEmail(newEmail)
       if(!newEmail.includes("@")){
         setErr("add @ in your email address")
       }else{
         setErr("")
       }
 
  }
 

  

  return (
    <>
    <div> 
 
      <input type="text" onChange={(e) => setInputVal(e.target.value)} placeholder="enter your name" value={inputVal} />
      <input type="email" onChange={handleChange} value={email} required />
      <p style={{color: "red"}}>{err}</p>

      <button onClick={handleClick}> save </button>
 
      <p>Name: {name.toUpperCase()}</p>

    </div>
    </>
  )
}

export default App
