import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { resetErrAction } from "../../globalActions/globalAction";

const initialState = {
    loading : false,
    error : null,
    users : [],
    user: {},
    profile : {},
    userAuth :{
      loading : false,
      error : null,
      userInfo : localStorage.getItem('userInfo') 
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,

  
    },
  }


  //register action
  export const registerUserAction = createAsyncThunk(
    "users/register",
    async ({email,password,fullname},{rejectWithValue,getState,dispatch})=>{
      try {
        //make http request
        const {data} = await axios.post(`${baseURL}/users/register`,{
          email ,
          password,
          fullname  
        });
   
        return data;
  
      } catch (error) {
        return rejectWithValue(error?.response?.data)
      }
    });



    //update user shipping address
  export const updateUserShippingAddressAction = createAsyncThunk(
    "users/update-shipping-address",
    async ({firstName,lastName,address,city,postalCode,province,phone,country},
      {rejectWithValue,getState,dispatch})=>{

      try {
        //get token
        const token = getState()?.users?.userAuth?.userInfo?.token;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
        
          },
        };
        //make http request
        const {data} = await axios.put(`${baseURL}/users/update/shipping`,{
          firstName,lastName,address,city,postalCode,province,phone,country 
        },config
        );
   
        return data;
  
      } catch (error) {
        return rejectWithValue(error?.response?.data)
      }
    });


   //user  profile action
   export const getUserProfileAction = createAsyncThunk(
    "users/profile-fetched",
    async (payload ,
      {rejectWithValue,getState,dispatch})=>{

      try {
        //get token
        const token = getState()?.users?.userAuth?.userInfo?.token;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
        
          },
        };
        //make http request
        const {data} = await axios.get(`${baseURL}/users/profile`, config
        );
   
        return data;
  
      } catch (error) {
        return rejectWithValue(error?.response?.data)
      }
    });





  //login action
export const loginUserAction = createAsyncThunk(
    "users/login",
    async ({email,password},{rejectWithValue,getState,dispatch})=>{
      try {
        //make http request
        const {data} = await axios.post(`${baseURL}/users/login`,{
          email ,
          password  
        });
        //save user to local storage
        localStorage.setItem('userInfo',JSON.stringify(data))
        return data;
  
      } catch (error) {
        return rejectWithValue(error?.response?.data)
      }
    });

    

    //users Slice
const usersSlice = createSlice({
    name:"users",
    initialState,
    extraReducers: (builder)=>{
      //handle async action
      //login
      builder.addCase(loginUserAction.pending, (state, action)=>{
        state.userAuth.loading = true;
      });
      builder.addCase(loginUserAction.fulfilled,(state,action)=>{
        state.userAuth.userInfo = action.payload;
        state.userAuth.loading = false;
      });
      builder.addCase(loginUserAction.rejected,(state,action)=>{
        state.userAuth.error = action.payload;
        state.userAuth.loading = false;
      });

      //register
      builder.addCase(registerUserAction.pending, (state, action)=>{
        state.loading = true;
      });
      builder.addCase(registerUserAction.fulfilled,(state,action)=>{
        state.user = action.payload;
        state.loading = false;
      });
      builder.addCase(registerUserAction.rejected,(state,action)=>{
        state.error = action.payload;
        state.loading = false;
      });
      //profile
      builder.addCase(getUserProfileAction.pending, (state, action)=>{
        state.loading = true;
      });
      builder.addCase(getUserProfileAction.fulfilled,(state,action)=>{
        state.profile = action.payload;
        state.loading = false;
      });
      builder.addCase(getUserProfileAction.rejected,(state,action)=>{
        state.error = action.payload;
        state.loading = false;
      }); 
       
            //update shipping address
            builder.addCase(updateUserShippingAddressAction.pending, (state, action)=>{
              state.loading = true;
            });
            builder.addCase(updateUserShippingAddressAction.fulfilled,(state,action)=>{
              state.user = action.payload;
              state.loading = false;
            });
            builder.addCase(updateUserShippingAddressAction.rejected,(state,action)=>{
              state.error = action.payload;
              state.loading = false;
            }); 


     //reset error action
     builder.addCase(resetErrAction.pending, (state) => {
      state.error = null;
    });
    },
});




//generate reducers
const usersReducer = usersSlice.reducer;

export default usersReducer;