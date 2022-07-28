import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthStatus } from '../../store/reducers/auth.reducers';

function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(getAuthStatus());
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex justify-center">
        <div>Home</div>
      </div>
    </>
  );
}

export default Home;
