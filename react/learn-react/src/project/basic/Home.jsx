 
import Header from "./Header.jsx"
import HeeroSection from './HeeroSection'
import Footer from './Footer'


function Home() {
  return (
     //empty fragments
    // <>
    <div style={{minHeight: "100vh", backgroundColor: "black", color: "white", padding: "20px", display: "flex", justifyContent: "space-between", flexDirection: "column"}}> 
    <Header />
    <HeeroSection />
    <Footer />
    </div>
  )
}

export default Home