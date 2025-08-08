import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function CartPage() {


  // const [cartItemFilter] = useState([])
  const cartItems = useSelector(state => state.cart)
  const items = useSelector(state => state.products)


  // useEffect(() => {
  //   let data = items.filter()

  // }, [])

  console.log(cartItems , items)
  return (
    <div>
         <h3>cart</h3>

    </div>
  )
}

export default CartPage