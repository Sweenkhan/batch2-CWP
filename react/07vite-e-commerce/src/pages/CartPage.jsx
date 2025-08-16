import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import CartPageitems from '../components/CartPageitems'


function CartPage() {

 
  const {cartItems} = useSelector(state => state.cart)
  const {items} = useSelector(state => state.products)

  const [cartItemsData, setCartItemData] = useState([])

  

  useEffect(() => {

   if(cartItems.length > 0 && items.length > 0) { 
     
    let filterData = []
    for(let i = 0; i< items.length; i++){
      for(let j = 0; j < cartItems.length; j++){
        if(items[i].id === cartItems[j].id){  
           filterData.push({...items[i], totalPrice: cartItems[j].totalPrice, totalQuantity: cartItems[j].quantity})
        }
      }

    }
    setCartItemData(filterData)
  }

  },[cartItems])
  

  
  return (
    <div>
         { cartItems.length > 0 ? 
          <div> {
               cartItemsData.map((cartItemData) => {
                return( 
                 <CartPageitems productData={cartItemData} key={cartItemData.id} />    
                            )
               })
            }</div> 
          : <div style={{margin: "6rem"}}> Your card is empty</div>
        }
     
    </div>
  )
}

export default CartPage