import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../store/reducers/auth.reducers';

function Login() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginApi({ credentials }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <div className="flex justify-center">
      <div className="flex w-1/2">
        <div className="grow px-8 text-left bg-white">
          <h3 className="text-2xl text-center">Login to your account</h3>
          <form action="">
            <div className="mt-4 px-5">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="w-full px-4 py-2 mt-3 border-b-2  focus:outline-none focus:ring-2"
                  value={credentials.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full px-4 py-2 mt-3 border-b-2 focus:outline-none focus:ring-2"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-baseline justify-end space-x-5 mt-5">
                <div
                  className="mt-4 text-black  rounded-xs hover:cursor-pointer"
                  onClick={handleSubmit}
                >
                  Login
                </div>
                <div className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
