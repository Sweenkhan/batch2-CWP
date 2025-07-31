import { useRef } from 'react'
import './App.css'
import OtpGenenrator from './OtpGenenrator'

function App() { 

  const inputRef = useRef(null)

  
  function handleCLick(){
    inputRef.current.focus()
  }

  function handleBlur(){
    inputRef.current.blur()
    console.log(inputRef.current.value)
    inputRef.current.value = "" 
  }


  return ( 
     <div>
      {/* <h3> useRef </h3>
      <input type="text" ref={inputRef} />

      <button onClick={handleCLick}>focus</button>
      <button onClick={handleBlur}>blur</button> */}

      <OtpGenenrator />
     </div>
  )
}

export default App
