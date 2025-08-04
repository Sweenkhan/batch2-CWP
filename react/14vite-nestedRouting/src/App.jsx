import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import SingleBlog from "./components/SingleBlog"
import BlogLayout from "./components/BlogLayout"
import BlogDetail from "./components/BlogDetail"

function App() {

  return (
    <>
      <BrowserRouter>
       <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />  
          <Route path="blog" element={<BlogLayout />} >

               <Route index element={<Blog />} />
               <Route path=":Id" element={<SingleBlog />} /> 
               <Route path="blogDetail" element={<BlogDetail />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
