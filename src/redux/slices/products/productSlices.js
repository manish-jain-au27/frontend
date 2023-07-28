import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { Action } from "@remix-run/router";

//initialState
const initialState ={
    products: [],
    product: {},
    loading: false,
    error: null,
    isAdded : false,
    isUpadted : false,
    isDeleted : false,


};


//create product action
export const createProductAction = createAsyncThunk(
'product/create',
async(payload,{rejectWithValue,getState,dispatch})=>{
    try {
        const {name,description,category,sizes,brand,colors,price} = payload;
            //make request

            //token authenticated
            const token = getState()?.users?.userAuth?.userInfo?.token
            const config = {
                headers:{
                    Authorization: `Bearer ${token}`,

                }
            }
            //images
            const {data} = await axios.post(`${baseURL}/products`,{
                name,description,category,sizes,brand,colors,price
            },config);
        return data;

    } catch (error) {
        return rejectWithValue(error?.response?.data)
    }
})


//slice
const productSlice = createSlice({
    name:"products",
    initialState,extraReducers:(builder)=>{//create
        builder.addCase(createProductAction.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(createProductAction.fulfilled,(state)=>{
            state.loading = false;
            state.product = action.payload;
            state.isAdded = true;
        });
        builder.addCase(createProductAction.rejected,(state)=>{
            state.loading = false;
            state.product = null;
            state.isAdded = false;
            state.error = action.payload;
        });
    }
})



//generate reducer
const productReducer = productSlice.reducer;
export default productReducer;