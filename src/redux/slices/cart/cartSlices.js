import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//initialState
const initialState ={
    cartItems: [],
    loading: false,
    error: null,
    isAdded : false,
    isUpadted : false,
    isDeleted : false,


};

//add product to care
export const addOrderToCartaction = createAsyncThunk('cart/add-to-cart',
async()=>{
    const cartItems = localStorage.getItem('cartItems')
    ?JSON.parse(localStorage.getItem('cartItems'))
    :[];
    //save to local storage
    cartItems.push(cartItems)
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
});

const cartSlice = createSlice({
    name:"cart",
    initialState,extraReducers:(builder)=>{
        //add to cart
        builder.addCase(addOrderToCartaction.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(addOrderToCartaction.fulfilled,(state,action)=>{
            state.loading = false;
            state.cartItems = action.payload;
            state.isAdded = true;
        });
        builder.addCase(addOrderToCartaction.rejected,(state,action)=>{
            state.loading = false;
            state.cartItems = null;
            state.isAdded = false;
            state.error = action.payload;
        });
        
    }
})



//generate reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;