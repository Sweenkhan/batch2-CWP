import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
   <div style={{minHeight: "100vh"}}> 
      <BrowserRouter >

      <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} /> 
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
      
      </BrowserRouter>
    
   </div> 
  )
}

export default App
