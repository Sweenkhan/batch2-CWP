import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Testing() {

   

    useEffect(() => {

      let timeOutID = setInterval(() => {
        
            console.log("hello")
        }, 1000);


        return () => clearInterval(timeOutID)

    },[])


  return (
    <> 
    <div>Testing</div>
    <Link to="/">Home</Link>
    </>
  )
}

export default Testing