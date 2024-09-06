import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginApi } from '../../api/LoginApi';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const userData = await loginApi(email, password);

      if (userData.status){
          console.log("user data :::", userData)
          const access_token = userData?.response?.access_token
          console.log("Access token ::", access_token)
          localStorage.setItem('access_token', access_token)
          return userData?.response?.message

      }else{
        console.log("User login failed")
        return {"message":"user login faild"}
      }
      return userData;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle', 
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
