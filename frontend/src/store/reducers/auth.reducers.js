import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../api/auth';

const authState = {
  isAuthenticated: false,
  user: null,
};

export const loginApi = createAsyncThunk(
  'auth/login',
  async ({ credentials }, thunkApi) => {
    const { email, password } = credentials;
    const response = await login(email, password);

    if (response.error) {
      return thunkApi.rejectWithValue(response.error);
    }
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  extraReducers: {
    [loginApi.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.data;
    },
    [loginApi.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
