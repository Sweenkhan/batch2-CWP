import {createSlice} from "@reduxjs/toolkit"
import { act } from "react"
 

const cartSlice = createSlice({
    name: "cart",
    initialState : {
    cartItems : []
    },

    reducers: {
        addToCart: (state, action) => {
            // let existingItems = state.cartItems.find(items => items == action.payload)
            // if(existingItems){
            //     cartItems.push(existingItems)
            // }
            state.cartItems.push({id: action.payload.id, quantity: 1, totalPrice: action.payload.price})
        },

        removeFromCart: (state, action) =>{
          state.cartItems = state.cartItems.filter(item => item !== action.payload)
        }
    }
})


export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer