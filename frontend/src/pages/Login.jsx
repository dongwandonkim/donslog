import React from 'react';

function Login() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="flex w-1/2">
          <div className="grow px-8 py-6 mt-4 text-left bg-white">
            <h3 className="text-2xl font-bold text-center">
              Login to your account
            </h3>
            <form action="">
              <div className="mt-4">
                <div>
                  <label className="block" for="email">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 "
                  />
                </div>
                <div className="mt-4">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 "
                  />
                </div>
                <div className="flex items-baseline justify-end space-x-4">
                  <div className="mt-4 text-black  rounded-xs hover:cursor-pointer">
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
    </div>
  );
}

export default Login;
