import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {

  return (
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
        </Routes>
        </div>
      <Footer />
      
      </BrowserRouter>
    
   </div> 
  )
}

export default App
