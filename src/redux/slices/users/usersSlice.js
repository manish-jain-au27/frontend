import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { data } from "autoprefixer";

const initialState = {
  loading : false,
  error : null,
  users : [],
  user: {},
  profile : {},
  userAuth :{
    loading : false,
    error : null,
    userInfo : {},

  }
}


//login action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async ({email,password},{rejectWithValue,getState,dispatch})=>{
    try {
      //make http request
      const res = await axios.post(`${baseURL}/users/login`,{
        email ,
        password  
      });
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
    builder.addCase(loginUserAction.pending,(state,action)=>{
      state.userAuth.loading = true;
    });
    builder.addCase(loginUserAction.fulfilled,(state,action)=>{
      state.userAuth.userInfo = action.payload;
      state.userAuth.laoding = false;
    });
    builder.addCase(loginUserAction.rejected,(state,action)=>{
      state.userAuth.userInfo = action.payload;
      state.userAuth.laoding = false;
    });
  }

});



//generate reducers
const usersReducer = usersSlice.reducer;

export default usersReducer;