import React from 'react'
import Login from './Login'

function Headers({userData}) {

  return (
    <div>
        <h4>this is our header </h4> 
        <Login  userData={userData}/>
         </div>
  )
}

export default Headers