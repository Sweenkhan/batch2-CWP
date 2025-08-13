import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'


function CartPage() {

 
  const {cartItems} = useSelector(state => state.cart)
  const {items} = useSelector(state => state.products)

  const [cartItemsData, setCartItemData] = useState([])

  

  useEffect(() => {

   if(cartItems.length > 0 && items.length > 0) { 
    
     let filterData =  items.filter(item => 
        cartItems.some(cartItem => cartItem.id === item.id)
      ) 
     setCartItemData(filterData)
    } 

  },[])
  

  
  return (
    <div>
         { cartItems.length > 0 ? 
          <div> {
               cartItemsData.map((cartItemData) => {
                return(
                 <ProductCard productData={cartItemData} />
                )
               })
            }</div> 
          : <div style={{margin: "6rem"}}> Your card is empty</div>
        }
     
    </div>
  )
}

export default CartPage