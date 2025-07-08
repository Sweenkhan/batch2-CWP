import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='container'> 
        <div className='section ' style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "grey",}}>
          <h2>meesho</h2>
          
          <form>
            <input type='text' />
            <button>search</button>
          </form>

          <nav>
            <ul className='text-white'>
                <li  > <Link to="/products" className='text-black'>Products</Link> </li>
                <li> <Link to="/sign-up">Sign-up</Link> </li>
                <li> <Link to="/about">about</Link> </li>
            </ul>
          </nav>
        </div>
        
    </div>
  )
}

export default Header