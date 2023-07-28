import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlice"
import productReducer from "../slices/products/productSlices";
productReducer
//store
const store = configureStore({
  reducer:{
    users: usersReducer,
    products:productReducer,
  }
});


export default store;