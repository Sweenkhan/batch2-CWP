import React, { useEffect, useState, useContext, useRef } from "react";
import "./Header.css";
import { Link , useNavigate} from "react-router-dom";  
import { ProfileContext } from "../App";  
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";


function Header() { 

    
  const [showsearchInput, setShowsearchInput] = useState(false)
  const {query, setQuery} = useContext(ProfileContext)
  const {cartItems} = useSelector(state => state.cart)
  const [menuOpen, setMenuOpen] = useState(false)


  const navigate =  useNavigate()
  const inputRef = useRef()

  function handlonMouseOver(){  
     inputRef.current.focus()
      setShowsearchInput(true)
  }


  function handlonMouseOut(){
    inputRef.current.blur()
    setShowsearchInput(false)
  }

  
  function handleChange(e){ 
         navigate("/products")
         setQuery(e.target.value) 
  }
 


  return (
    <> 
    <div className="header">
      <h2 className="logo"><Link to={"/"}>E-commerce</Link></h2>
       
       {/* mobile menu */}
        <div className="menu-toogle" >

       <button   onClick={() => setMenuOpen(!menuOpen) }>
        {menuOpen ? "X" : "☰"}
       </button>


             {  menuOpen &&
             
             <div className="sideBar" style={{position: "absolute", right: "-1.2rem", top: "2rem", minHeight: "100vh"}}>
              <ul className="mobile-ul">
             <li> <Link to="/products" className='text-black'>Products</Link> </li>
             <li> <Link to="/about">About</Link> </li>
             <li> <Link to="/sign-up">Sign-up</Link> </li>
            
                 </ul>
               </div>
             }
             </div>

 

       {/* desktop navbar */}
      <div className="headerRight"  >

      <div className="formDiv"> 
        <form onMouseEnter={() => handlonMouseOver()} onMouseLeave={handlonMouseOut} >

           <input ref={inputRef} type="text" className={(showsearchInput) ? "showInput" : "closeInput" } placeholder="Search..."
           onChange={(e) => {handleChange(e)}} value={query}/>
        </form>
        </div>

        <ul className="headerUl relative">
             <li> <Link to="/products" className='text-black'>Products</Link> </li>
             <li> <Link to="/about">About</Link> </li>
  
             <li> <Link to="/sign-up">Sign-up</Link> </li>
            <li style={{position: "relative"}}> <Link to="/cart"><ShoppingCartIcon sx={{fontSize: 30}}/>
             <span 
             style={{position: "absolute", right: "12px", top:"-5px", backgroundColor: "black", color: "white", 
              width: "25px", height: "25px", borderRadius: "50%", padding: "3px 6px 0", border: "1px solid white"
             }}>{cartItems.length}</span></Link> </li>
        </ul>
      </div>
    </div>

    <div className="min-h-[80px]"></div>
    </>
  );
}

export default Header;



//  import { Link } from 'react-router-dom'

 
// function Header() {
//   return (
//     <div className='container'> 
//         <div className='section' style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "grey",}}>
//           <h2>meesho</h2>
          
//           <form>
//             <input type='text' />
//             <button>search</button>
//           </form>
 
//           <nav>
//             <ul className='text-white'>
//                 <li> <Link to="/products" className='text-black'>Products</Link> </li>
//                 <li> <Link to="/sign-up">Sign-up</Link> </li>
//                 <li> <Link to="/about">about</Link> </li>
//             </ul>
//           </nav>
//         </div>
        
//     </div>
//   )
// }

// export default Header