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
    <div className="flex pt-4 justify-between border-b-2 border-black h-14 text-xl">
      <div className="flex items-center justify-self-start">
        <div>Dongwan Kim</div>
      </div>
      <div className="hidden sm:flex items-center space-x-5">
        <button className="p-2">About Me</button>
        <button className="p-2" onClick={() => navigate('/blogs')}>
          Blogs
        </button>
        {isAuthenticated && role === 'admin' && (
          <button className="p-2" onClick={() => navigate('/write')}>
            Write
          </button>
        )}
      </div>

      <div className="hidden sm:flex items-center space-x-4">
        {isAuthenticated && <button onClick={onLogout}>Logout</button>}
        {!isAuthenticated && (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <div>Register</div>
          </>
        )}
      </div>

      <div className="flex sm:hidden items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
}

export default Nav;
