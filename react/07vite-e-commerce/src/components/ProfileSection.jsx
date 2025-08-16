 import { useContext } from 'react'

function ProfileSection() {

    const { profileData } = useContext(ProfileContext)
    console.log(profileData)
    return (
        <div>
            <h3>Name: {profileData.name }</h3>
        </div>
    )
}

export default ProfileSection