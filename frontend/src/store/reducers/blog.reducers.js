import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const blogState = {
  title: '',
  content: '',
  isPublished: false,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState: blogState,
  reducers: {
    createBlog: (state, action) => {
      console.log(action.payload);
      state.content = { ...state, ...action.payload };
    },
  },
});
export const { createBlog } = blogSlice.actions;
export default blogSlice.reducer;
