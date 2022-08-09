import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuthStatus, logoutApi } from '../../store/reducers/auth.reducers';
import useGetRole from '../../hooks/useGetRole';
import { Dropdown } from 'flowbite-react';

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
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
        <Dropdown label="Menu" inline={true}>
          <Dropdown.Header>
            <div>Welcome,</div>
            <div>{user.email}</div>
          </Dropdown.Header>
          <Dropdown.Item onClick={() => navigate('/')}>About Me</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/blogs')}>
            Blogs
          </Dropdown.Item>

          {isAuthenticated && role === 'admin' && (
            <Dropdown.Item onClick={() => navigate('/write')}>
              Write
            </Dropdown.Item>
          )}
          <Dropdown.Divider />
          {isAuthenticated ? (
            <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
          ) : (
            <>
              <Dropdown.Item onClick={() => navigate('/login')}>
                Login
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/register')}>
                Register
              </Dropdown.Item>
            </>
          )}
        </Dropdown>
      </div>
    </div>
  );
}

export default Nav;
