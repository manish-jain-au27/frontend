import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";


//initialState
const initialState ={
    categories: [],
    category: {},
    loading: false,
    error: null,
    isAdded : false,
    isUpadted : false,
    isDeleted : false,


};


//create category action
export const createCategoryAction = createAsyncThunk(
'category/create',
async(payload,{rejectWithValue,getState,dispatch})=>{
    try {
        const {name,file} = payload;
            //form data
            const formData = new FormData();
            formData.append('name',name)
            formData.append('file',file)
            //token authenticated
            const token = getState()?.users?.userAuth?.userInfo?.token
            const config = {
                headers:{
                    Authorization: `Bearer ${token}`,

                }
            }
            //images
            const {data} = await axios.post(`${baseURL}/categories`,{FormData},config);
        return data;

    } catch (error) {
        return rejectWithValue(error?.response?.data)
    }
});


//fetch category action
export const fetchCategoriesAction = createAsyncThunk(
    'category/fetch',
    async(payload,{rejectWithValue,getState,dispatch})=>{
        try {
            
                //images
                const {data} = await axios.get(`${baseURL}/categories`);
            return data;
    
        } catch (error) {
            return rejectWithValue(error?.response?.data)
        }
    });


//slice
const CategorySlice = createSlice({
    name:"categories",
    initialState,extraReducers:(builder)=>{//create
        builder.addCase(createCategoryAction.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(createCategoryAction.fulfilled,(state,action)=>{
            state.loading = false;
            state.category = action.payload;
            state.isAdded = true;
        });
        builder.addCase(createCategoryAction.rejected,(state,action)=>{
            state.loading = false;
            state.category = null;
            state.isAdded = false;
            state.error = action.payload;
        });
        //fetch all
        builder.addCase(fetchCategoriesAction.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(fetchCategoriesAction.fulfilled,(state,action)=>{
            state.loading = false;
            state.categories = action.payload;
           
        });
        builder.addCase(fetchCategoriesAction.rejected,(state,action)=>{
            state.loading = false;
            state.categories = null;
            state.isAdded = false;
            state.error = action.payload;
        });
    //reset error action
    builder.addCase(resetErrAction.pending,(state,action)=>{
        state.error = null;
    })
     //reset success action
     builder.addCase(resetSuccessAction.pending,(state,action)=>{
        state.error = false;
    })
    }
})



//generate reducer
const categoryReducer = CategorySlice.reducer;
export default categoryReducer;