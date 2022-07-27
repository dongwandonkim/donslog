import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const authState = {
  isAuthenticated: false,
  user: null,
};

const login = createAsyncThunk(
  'auth/login',
  async (email, { rejectWithValue }) => {
    if (email === '') {
      return rejectWithValue('Please enter an email');
    }
    if (password === '') {
      return rejectWithValue('Please enter a password');
    }
    return {
      isAuthenticated: true,
      user: {
        email,
        password,
      },
    };
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
