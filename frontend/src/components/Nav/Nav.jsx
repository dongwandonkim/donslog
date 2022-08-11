import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '../../store/reducers/auth.reducers';
import { Dropdown } from 'flowbite-react';

function Nav({ user, isAuthenticated }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logoutApi());
    navigate('/');
  };

  useEffect(() => {
    console.log('render Nav');
  });

  // TODO: change Nav to use Flowbite Nav component
  return (
    <div className="flex pt-4 justify-between border-b-2 border-black h-14 text-xl">
      <div className="flex items-center justify-self-start">
        <div>Dongwan Kim</div>
      </div>
      <div className="hidden md:flex items-center space-x-5">
        <button className="p-2">About Me</button>
        <button className="p-2" onClick={() => navigate('/blogs')}>
          Blogs
        </button>
        {user && user.role === 'admin' && (
          <button className="p-2" onClick={() => navigate('/write')}>
            Write
          </button>
        )}
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {user && <button onClick={onLogout}>Logout</button>}
        {!user && (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <div>Register</div>
          </>
        )}
      </div>

      <div className="flex md:hidden items-center">
        <Dropdown label="Menu" inline>
          {user && (
            <Dropdown.Header>
              <div>Welcome,</div>
              <div>{user.email}</div>
            </Dropdown.Header>
          )}

          <Dropdown.Item onClick={() => navigate('/')}>About Me</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/blogs')}>
            Blogs
          </Dropdown.Item>

          {user && user.role === 'admin' && (
            <Dropdown.Item onClick={() => navigate('/write')}>
              Write
            </Dropdown.Item>
          )}
          <Dropdown.Divider />
          {user ? (
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
