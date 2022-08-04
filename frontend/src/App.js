import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Editor from './pages/Editor';
import useGetRole from './hooks/useGetRole';

function App() {
  const role = useGetRole();

  return (
    <div className="App h-screen">
      <div className="container mx-auto font-sans">
        <div className="flex flex-col">
          {/* <Nav isAuthenticated={isAuthenticated} /> */}
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="register" element={} /> */}
            <Route
              path="write"
              element={role === 'admin' ? <Editor /> : <>Not allowed</>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
