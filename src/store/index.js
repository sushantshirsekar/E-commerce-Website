import { configureStore } from "@reduxjs/toolkit";
import admin from "./admin-slice";
import cart from "./cart-slice";

let store = configureStore({
    reducer:{
        cart : cart, 
        admin: admin
    }
})

export default store; 