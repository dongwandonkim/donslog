import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../store/reducers/auth.reducers';
import { useForm } from '../hooks/useForm';

function Login() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const { handleSubmit, handleChange, values } = useForm({ initialValues });

  const onSubmit = (values) => {
    console.log(values);
    dispatch(loginApi({ credentials: values }));
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 px-5">
              <div>
                <input
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-3 border-b-2  focus:outline-none focus:ring-2"
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full px-4 py-2 mt-3 border-b-2 focus:outline-none focus:ring-2"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-baseline justify-end space-x-5 mt-5">
                <button
                  type="submit"
                  className="mt-4 text-black rounded-xs hover:cursor-pointer"
                  onClick={handleSubmit(onSubmit)}
                >
                  Login
                </button>
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
