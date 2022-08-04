import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './reducers/auth.reducers';
import blogReducer from './reducers/blog.reducers';

const reducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export const store = configureStore({
  reducer,
});
