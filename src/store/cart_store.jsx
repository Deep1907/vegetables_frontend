import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./cart_slice.jsx"

const cart_store = configureStore({
    reducer : {
        carts : productSlice
    }
})

export default cart_store;

