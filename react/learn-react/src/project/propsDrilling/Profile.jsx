import React from 'react'



function Profile({userData}) {
  return (
    <div>
        <p>name :{userData.name} </p>
        <p>age: {userData.age}</p>
     
    </div>
  )
}

export default Profile