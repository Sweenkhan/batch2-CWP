import {configureStore} from "@reduxjs/toolkit"
import prodcutReducer from "./features/productSlice"


export const store = configureStore({
    reducer: {
        products: prodcutReducer
    }
})