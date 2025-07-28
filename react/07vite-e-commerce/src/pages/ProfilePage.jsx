import React from 'react'
import ProflieContext from "../App"
import { useContext } from 'react'


function ProfilePage() {
  
  const {profileData} = useContext(ProflieContext)


  return (
    <div className='flex flex-col gap-2 p-2 border border-solid rounded'>
    <h4>{profileData.name}</h4>
    <p>{profileData.email}</p>

    </div>
  )
}

export default ProfilePage