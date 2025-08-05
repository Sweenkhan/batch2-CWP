import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return ( 
    <div>
        <nav style={{display: "flex", gap: "50px", justifyContent: "center"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link> 
        </nav>
    </div>
  )
}

export default NavBar