import apiClient from './index';

export const login = async (email, password) => {
  try {
    return await apiClient.post(
      '/users/login',
      { email, password },
      { withCredentials: true }
    );
  } catch (error) {
    return error.response.data;
  }
};
