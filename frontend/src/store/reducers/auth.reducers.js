import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, getAuth, logout } from '../../api/auth';

const authState = {
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

export const getAuthStatus = createAsyncThunk(
  'auth/status',
  async (_, thunkApi) => {
    const response = await getAuth();

    if (response.error) {
      return thunkApi.rejectWithValue(response.error);
    }

    return response.data;
  }
);

export const logoutApi = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    const response = await logout();

    if (response.error) {
      return thunkApi.rejectWithValue(response.error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  extraReducers: {
    [loginApi.fulfilled]: (state, action) => {
      state.user = action.payload.data;
    },
    [loginApi.rejected]: (state, action) => {
      state.user = null;
    },
    [getAuthStatus.fulfilled]: (state, action) => {
      state.user = action.payload.data || null;
    },
    [getAuthStatus.rejected]: (state, action) => {
      state.user = null;
    },
    [logoutApi.fulfilled]: (state, action) => {
      state.user = null;
    },
  },
});

export default authSlice.reducer;
