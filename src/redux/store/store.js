import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/userSlices";
import productReducer from "../slices/products/productSlices";
import categoryReducer from "../slices/categories/categoriesSlice";
import brandsReducer from "../slices/categories/brandsSlice";
import colorsReducer from "../slices/categories/colorsSlice";
import cartReducer from "../slices/cart/cartSlices";
import couponsReducer from "../slices/coupons/couponsSlice";
import orderReducer from "../slices/orders/orderSlices";
import reviewsReducer from "../slices/reviews/reviewsSlice";

//store
const store = configureStore({
    reducer:{
      users: usersReducer,
      products: productReducer,
      categories: categoryReducer,  
      brands: brandsReducer,    
      colors: colorsReducer,
      carts: cartReducer,
      coupons: couponsReducer,
      orders: orderReducer,
      reviews:reviewsReducer,
    }
  });
  
  
  export default store;