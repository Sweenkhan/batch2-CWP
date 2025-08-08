import {configureStore} from "@reduxjs/toolkit"
import prodcutReducer from "./features/productSlice"
import cartReducer from "./features/cartSlice"


export const store = configureStore({
    reducer: {
        products: prodcutReducer,
        cart: cartReducer
    }
})