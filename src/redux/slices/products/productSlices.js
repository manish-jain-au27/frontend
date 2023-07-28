import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { act } from "react-dom/test-utils";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";


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


//fetch products action
export const createProductAction = createAsyncThunk(
'product/create',
async(payload,{rejectWithValue,getState,dispatch})=>{
    try {
        const {name,description,category,sizes,brand,colors,price,totalqty,files} = payload;
            //make request

            //token authenticated
            const token = getState()?.users?.userAuth?.userInfo?.token
            const config = {
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",

                },
            };
            //form data
            const formData = new FormData();
            formData.append('name',name);
            formData.append('description',description);
            formData.append('category',category);
           
            formData.append('brand',brand);
            
            formData.append('price',price);
            formData.append('totalqty',totalqty);
            
        sizes.forEach((size)=>{
            formData.append('sizes',sizes);
        })
        colors.forEach((color)=>{
            formData.append('colors',colors);
        })
        files.forEach((file)=>{
            formData.append('files',files);
        })
            //images
            const {data} = await axios.post(`${baseURL}/products`,{
                name,description,category,sizes,brand,colors,price
            },config);
        return data;

    } catch (error) {
        return rejectWithValue(error?.response?.data)
    }
})



//fetch products action
export const fetchProductsAction = createAsyncThunk(
    'product/list',
    async(payload,{rejectWithValue,getState,dispatch})=>{
        try {
            
    
                //token authenticated
                const token = getState()?.users?.userAuth?.userInfo?.token
                const config = {
                    headers:{
                        Authorization: `Bearer ${token}`,
                       
    
                    },
                };
                
                //images
                const {data} = await axios.get(`${baseURL}/products`,config)
            return data;
    
        } catch (error) {
            return rejectWithValue(error?.response?.data)
        }
    });


//fetch product action
export const fetchProductAction = createAsyncThunk(
    'product/details',
    async(productId,{rejectWithValue,getState,dispatch})=>{
        try {
            
    
                //token authenticated
                const token = getState()?.users?.userAuth?.userInfo?.token
                const config = {
                    headers:{
                        Authorization: `Bearer ${token}`,
                       
    
                    },
                };
                
                //images
                const {data} = await axios.get(`${baseURL}/products/${productId}`,config)
            return data;
    
        } catch (error) {
            return rejectWithValue(error?.response?.data)
        }
    });

//slice
const productSlice = createSlice({
    name:"products",
    initialState,extraReducers:(builder)=>{
        //create
        builder.addCase(createProductAction.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(createProductAction.fulfilled,(state,action)=>{
            state.loading = false;
            state.product = action.payload;
            state.isAdded = true;
        });
        builder.addCase(createProductAction.rejected,(state,action)=>{
            state.loading = false;
            state.product = null;
            state.isAdded = false;
            state.error = action.payload;
        });

        //fetchall
        builder.addCase(fetchProductsAction.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(fetchProductsAction.fulfilled,(state,action)=>{
            state.loading = false;
            state.producta = action.payload;
            state.isAdded = true;
        });
        builder.addCase(fetchProductsAction.rejected,(state,action)=>{
            state.loading = false;
            state.products = null;
            state.isAdded = false;
            state.error = action.payload;
        });
        

        //fetchall
        builder.addCase(fetchProductAction.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(fetchProductAction.fulfilled,(state,action)=>{
            state.loading = false;
            state.product = action.payload;
            state.isAdded = true;
        });
        builder.addCase(fetchProductAction.rejected,(state,action)=>{
            state.loading = false;
            state.product = null;
            state.isAdded = false;
            state.error = action.payload;
        });

        //reset error
        builder.addCase(resetErrAction.pending,(state,action)=>{
            state.error = null;
        });
        //reset success
        builder.addCase(resetSuccessAction.pending,(state,action)=>{
            state.isAdded = false;
        })
        
    }
})



//generate reducer
const productReducer = productSlice.reducer;
export default productReducer;