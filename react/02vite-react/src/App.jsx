import { useState } from "react"

 

function App() { 
 
  const [inputVal, setInputVal] = useState("")

  // const [list, setList] = useState([])



  function handleClick(){
          setInputVal('')
 
          console.log(list)
  }


  // function handleChange(e){ 
  //   setInputVal(e.target.value)
  // }
 

  return (
    <>
    <div>
      {/* <input onChange={handleChange} value={inputVal} /> */}

      <input onChange={ (e) => setInputVal(e.target.value) }  value={inputVal} />
      
      <button onClick={handleClick} >click me </button>

      <p>{inputVal}</p>
    </div>
    </>
  )
}

export default App
