import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// TODO: change this hook to get all auth info
function useGetAuth() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [auth, setAuth] = useState({ user: {}, isAuthenticated: false });

  useEffect(() => {
    setAuth({ user, isAuthenticated });
  }, [isAuthenticated, user]);

  return auth;
}

export default useGetAuth;
