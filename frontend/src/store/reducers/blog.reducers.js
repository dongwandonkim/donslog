import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createBlog } from '../../api/blog';

const blogState = {
  blog: { title: '', content: '', isPublished: false },
  isSubmitting: false,
};

export const postBlog = createAsyncThunk(
  'blog/create',
  async ({ blogData }, thunkApi) => {
    const response = await createBlog(
      blogData.title,
      blogData.content,
      blogData.isPublished
    );
    if (response.error) {
      return thunkApi.rejectWithValue(response.error);
    }
  }
);

export const getAllBlogs = createAsyncThunk(
  'blog/getAllBlogs',
  async (_, thunkApi) => {}
);

const blogSlice = createSlice({
  name: 'blog',
  initialState: blogState,
  reducers: {},
  extraReducers: {
    [postBlog.pending]: (state, action) => {
      state.isSubmitting = true;
    },
    [postBlog.fulfilled]: (state, action) => {
      state.isSubmitting = false;
    },
    [postBlog.rejected]: (state, action) => {
      state.isSubmitting = false;
    },
  },
});
// export const { createBlog } = blogSlice.actions;
export default blogSlice.reducer;
