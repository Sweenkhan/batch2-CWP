import { useState, useEffect } from 'react' 
import axios from "axios"
import './App.css'




function App() { 

const [data, setData] = useState({}) 


 function fectData(){
  
       axios.get('https://randomuser.me/api/')
    .then((res) => { 
         setData(res.data.results[0])
    })
    .catch((error) => console.log(error))
    }
     

  useEffect( () => {
 
  fectData() 

  }, [])



  return (
    <>
       <h3>learning about axios library</h3>
        {data.name !== undefined ? 
    
    <div>
        <img src={data.picture.large} />
        <p>{data.name.first}</p>
        <p>{data.email}</p>
      </div>   : "" 
    }
       
    </>
  )
}

export default App
