import React from 'react'
import Profile from './Profile'

function Login({userData}) {

  return (
    <div>
        <h3>login page</h3>
        <Profile userData={userData} />
    </div>
  )
}

export default Login