import React,{useState} from 'react'


function App() {
 
    const [count, setCount] = useState(0)

    
    function inc(){ 
       setCount(count + 1)
    }

    function dec(){
        if(count > 0){
            setCount(count - 1)
        }
    }



  return (
    <div className='bg-red-400 min-h-screen flex item-center justify-center flex-col'>

        <button onClick={inc} className='border border border-solid text-2xl text-white w-xs self-center'>Increment</button>
       
        {/* <button onClick={() => setCount(count + 1)} className='border border border-solid text-2xl text-white w-xs self-center'>Increment</button> */}
       

        <p className='text-center'>{count}</p>


        {/* <button onClick={() => count > 0 ?  setCount(count - 1) : ""} className='border border border-solid text-2xl text-white w-xs self-center'>Decrement</button> */}
       
       
        <button onClick={dec} className='border border border-solid text-2xl text-white w-xs self-center'>Decrement</button>
    </div>
  )
}

export default App