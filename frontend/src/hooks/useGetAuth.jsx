import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthStatus } from '../store/reducers/auth.reducers';
// TODO: change this hook to get all auth info
function useGetAuth() {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  // const [auth, setAuth] = useState({ user: null, isAuthenticated: false });

  useEffect(() => {
    dispatch(getAuthStatus());
  }, [dispatch]);

  return { user, isAuthenticated };
}

export default useGetAuth;
