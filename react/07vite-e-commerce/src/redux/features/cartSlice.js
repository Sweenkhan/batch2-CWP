import {createSlice} from "@reduxjs/toolkit"
import { act } from "react"
 

const cartSlice = createSlice({
    name: "cart",
    initialState : {
    cartItems : []
    },

    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        },

        removeFromCart: (state, action) =>{
          state.cartItems = state.cartItems.filter(item => item !== action.payload)
        }
    }
})


export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer