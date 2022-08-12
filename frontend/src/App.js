import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Editor from './pages/Editor';
import useGetAuth from './hooks/useGetAuth';
import BlogList from './components/Blogs/BlogList';

function App() {
  const { user, isAuthenticated } = useGetAuth();

  return (
    <div className="App h-screen">
      <div className="container mx-auto font-sans">
        <div className="flex flex-col">
          <Nav user={user} isAuthenticated={isAuthenticated} />
          <div className="container mt-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login user={user} />} />
              {/* <Route path="register" element={} /> */}
              <Route path="/blogs" element={<BlogList />} />
              <Route
                path="write"
                element={user?.role === 'admin' ? <Editor /> : <>Not allowed</>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
