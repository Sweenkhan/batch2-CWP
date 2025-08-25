import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Products from "./pages/Products" 
import ProductDatail from "./components/ProductDetail"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { createContext, useState } from "react"
import CartPage from "./pages/CartPage"

export const ProfileContext = createContext()


function App() {

const [profileData, setProfileData] = useState({...JSON.parse(localStorage.getItem("userData"))})
const [productDetail, setProductDetail] = useState({})
const [query, setQuery] = useState("")
 

  return (
    <ProfileContext.Provider value={{profileData, setProfileData, productDetail, setProductDetail, query, setQuery}} > 

   <div className="min-h-[100vh] flex flex-col items-center"> 
      <BrowserRouter > 
      <Header />
       <div className ="w-full max-w-[1460px] flex-grow px-4" > 
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/productDetail" element={<ProductDatail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </div>
      <Footer /> 
      </BrowserRouter> 
   </div>

   </ProfileContext.Provider> 
  )
}

export default App
