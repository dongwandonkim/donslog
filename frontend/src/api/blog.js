import apiClient from './index';

export const createBlog = async (title, content, isPublished) => {
  //
  try {
    return await apiClient.post('blogs/', { title, content, isPublished });
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
};
