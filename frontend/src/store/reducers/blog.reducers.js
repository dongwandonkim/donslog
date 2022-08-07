import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createBlog } from '../../api/blog';

const blogState = {
  title: '',
  content: '',
  isPublished: false,
};

export const postBlog = createAsyncThunk(
  'blog/create',
  async ({ blogData }, thunkApi) => {
    console.log(blogData);
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

const blogSlice = createSlice({
  name: 'blog',
  initialState: blogState,
  reducers: {},
});
// export const { createBlog } = blogSlice.actions;
export default blogSlice.reducer;
