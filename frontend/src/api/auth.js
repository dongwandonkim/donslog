import apiClient from './index';

export const login = async (email, password) => {
  try {
    return await apiClient.post('/auth/login', { email, password });
  } catch (error) {
    return error;
  }
};
