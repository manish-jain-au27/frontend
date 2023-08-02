import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { data } from "autoprefixer";
import { resetErrAction, resetSuccessAction } from "../../globalActions/globalAction";

//initial state
const initialState = {
    coupons : [],
    coupon : null,
    loading : false, 
    error : null,
    isAdded : false,
    isUpdated : false,
    isDeleted : false
}

//create coupons action
export const createCouponAction = createAsyncThunk('coupons/create',
async({code,discount,startDate,endDate},{rejectWithValue,getState,dispatch})=>{
    try {
   
        //make request

        //token-authenticated
        const token = getState()?.users?.userAuth?.userInfo?.token;
        const config ={
            headers: {
                Authorization: `Bearer ${token}`,
               
              },
        }
        //Images

        const {data} = await axios.post(`${baseURL}/coupons`,{
            code,discount,startDate,endDate
        },
        config
        );
        return data;
    } catch (error) {
        return rejectWithValue(error?.response?.data);
    }
});

///fetch coupons action
export const fetchCouponsAction = createAsyncThunk(
    "coupons/fetch-All",
    async (payload, { rejectWithValue, getState, dispatch }) => {
      try {
        const { data } = await axios.get(`${baseURL}/coupons`);
        return data;
      } catch (error) {
        return rejectWithValue(error?.response?.data);
      }
    }
  );
  
///fetch coupon action
export const fetchCouponAction = createAsyncThunk(
    "coupons/single",
    async (code, { rejectWithValue, getState, dispatch }) => {
      try {
        const { data } = await axios.get(`${baseURL}/coupons/single?code=${code}`,{code});
        return data;
      } catch (error) {
        return rejectWithValue(error?.response?.data);
      }
    }
  );
  









  //create coupons
const couponsSlice = createSlice({
    name: "coupons",
    initialState,extraReducers:(builder)=>{
        //create
        builder.addCase(createCouponAction.pending, (state)=>{
            state.loading = true;
    });
      
    builder.addCase(createCouponAction.fulfilled, (state,action)=>{
        state.loading = false;
        state.coupon = action.payload;
        state.isAdded = true;
    });
    builder.addCase(createCouponAction.rejected, (state,action)=>{
        state.loading = false;
        state.coupon = null;
        state.isAdded = false;
        state.error = action.payload;
    });
    
    //fetch all
    builder.addCase(fetchCouponsAction.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchCouponsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
      });
      builder.addCase(fetchCouponsAction.rejected, (state, action) => {
        state.loading = false;
        state.coupons = null;
        state.error = action.payload;
      });
          //fetch single coupon
    builder.addCase(fetchCouponAction.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchCouponAction.fulfilled, (state, action) => {
        state.loading = false;
        state.coupon = action.payload;
      });
      builder.addCase(fetchCouponAction.rejected, (state, action) => {
        state.loading = false;
        state.coupon = null;
        state.error = action.payload;
      });
  
      //reset error action
      builder.addCase(resetErrAction.pending,(state,action)=>{
       
        state.isAdded = false;
        state.error = null;
      });
        //reset success action
        builder.addCase(resetSuccessAction.pending,(state,action)=>{
       
          state.isAdded = false;
          state.error = null;
        });
      },
});



//generate reducer
const couponsReducer = couponsSlice.reducer;
export default couponsReducer;