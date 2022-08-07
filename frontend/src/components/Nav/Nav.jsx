import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuthStatus, logoutApi } from '../../store/reducers/auth.reducers';
import useGetRole from '../../hooks/useGetRole';

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const role = useGetRole();

  const onLogout = () => {
    dispatch(logoutApi());
    navigate('/');
  };

  useEffect(() => {
    dispatch(getAuthStatus());
  }, [isAuthenticated]);

  return (
    <div className="grid grid-cols-3 pt-4 justify-items-center border-b-2 border-black h-14 text-xl">
      <div className="flex items-center justify-self-start">
        <div>Dongwan Kim</div>
      </div>
      <div className="flex items-center space-x-5">
        <button className="p-2">About Me</button>
        <button className="p-2">Blogs</button>
        {isAuthenticated && role === 'admin' && (
          <button className="p-2" onClick={() => navigate('/write')}>
            Write
          </button>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {isAuthenticated && <button onClick={onLogout}>Logout</button>}
        {!isAuthenticated && (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <div>Register</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
