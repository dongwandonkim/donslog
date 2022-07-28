import React from 'react';
import { useSelector } from 'react-redux';

function Nav() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="grid grid-cols-3 justify-items-center border-b-4 border-grey-500 h-16 text-xl">
      <div className="flex items-center justify-self-start">
        <div>Dongwan Kim</div>
      </div>
      <div className="flex items-center space-x-5">
        <div>About Me</div>
        <div>Blogs</div>
      </div>

      <div className="flex items-center space-x-4">
        {isAuthenticated && <div>Logout</div>}
        {!isAuthenticated && (
          <>
            <div>Login</div>
            <div>Register</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
