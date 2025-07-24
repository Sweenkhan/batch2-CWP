 import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import First from './First'
import Second from './Second'
import Header from './Header' 
import { createContext, useState } from 'react'

export const ProfileContext = createContext()


function App() { 

const [profileData, setProfileData]  = useState({name: "sween khan", age : 24})


  return ( 
    <ProfileContext.Provider  value={{profileData, setProfileData}}> 

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/first" element={<First />}  />
        <Route path='/second' element={<Second />} /> 
      </Routes>
      </BrowserRouter>

      </ProfileContext.Provider>
  
  )
}

export default App
