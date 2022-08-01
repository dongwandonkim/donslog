import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Editor from './pages/Editor';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto font-sans">
        {/* <Nav isAuthenticated={isAuthenticated} /> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="register" element={} /> */}
          <Route path="write" element={<Editor />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
