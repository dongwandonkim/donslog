import React from 'react';
import { useSelector } from 'react-redux';

// TODO: change this hook to get all auth info
function useGetRole() {
  const { user } = useSelector((state) => state.auth);
  return user && user.role;
}

export default useGetRole;
