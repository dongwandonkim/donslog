import apiClient from './index';

export const login = async (email, password) => {
  try {
    return await apiClient.post('/users/login', { email, password });
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
};

export const getAuth = async () => {
  try {
    return await apiClient.get('users/login');
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
};

export const logout = async () => {
  try {
    return await apiClient.get('users/logout');
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
};
