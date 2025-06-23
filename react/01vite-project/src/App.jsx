import Profile from "./Profile"
 import profileImage1 from "../public/images/firstImage.avif"
 import profileImage2 from "../public/images/profileImage2.webp"
  import profileImage3 from "../public/images/profileImage3.webp"
   import profileImage4 from "../public/images/profileImage4.webp"


function App(){


    return (
        <div className="flex">
            
            <Profile name="rahul" age="22" emailAdd="rahul@gmail.com" imgAdd={profileImage1}/>
            <Profile name="anil" age="23" emailAdd="anil@gmail.com" imgAdd={profileImage2}/>
            <Profile name="akash" age="24" emailAdd="akash@gmail.com" imgAdd={profileImage3}/>
            <Profile name="sagar" age="25" emailAdd="sagar@gmail.com" imgAdd={profileImage4}/>
         
        </div>
    )
 }


 export default App