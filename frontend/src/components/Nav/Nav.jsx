import React from 'react';

function Nav() {
  return (
    <div className="grid grid-cols-3 justify-items-center border-b-4 border-grey-500 h-16 text-xl">
      <div className="flex items-center justify-self-start">
        <div>Dongwan Kim</div>
      </div>
      <div className="flex items-center space-x-4">
        <div>About Me</div>
        <div>Blogs</div>
      </div>

      <div className="flex items-center space-x-4">
        <div>Login</div>
        <div>Logout</div>
        <div>Register</div>
      </div>
    </div>
  );
}

export default Nav;
