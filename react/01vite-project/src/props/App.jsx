import Profile from "./Profile" 
import firstImage from "/images/firstImage.avif"


function App() {
  return (
    <> 
        <h2 className="text-center font-size-[36px]">This is our home page</h2>
    <div className="flex gap-2">

        <Profile imageAdd={firstImage} userName="rahul" userAge="22" userEmail="rahul@gmail.com" />

        <Profile imageAdd={firstImage} userName="kanha" userAge="23" userEmail="kanha@gmail.com" />
         
        <Profile imageAdd={firstImage} userName="sagar" userAge="24" userEmail="sagar@gmail.com" />

         <Profile imageAdd={firstImage} userName="anil" userAge="25" userEmail="anil@gmail.com" />

    </div>
    </>
  )
}

export default App