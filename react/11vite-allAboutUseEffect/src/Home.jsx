import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Testing from './Testing'
import App from './App'


function Home() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/testing' element={<Testing />} />
    </Routes>
    </BrowserRouter> 
  )
}

export default Home