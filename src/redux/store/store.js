import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/userSlices";
import productReducer from "../slices/products/productSlices";
import categoryReducer from "../slices/categories/categoriesSlice";
import brandsReducer from "../slices/categories/brandsSlice";
import colorsReducer from "../slices/categories/colorsSlice";


//store
const store = configureStore({
    reducer:{
      users: usersReducer,
      products: productReducer,
      categories: categoryReducer,  
      brands: brandsReducer,    
      colors: colorsReducer,
    }
  });
  
  
  export default store;