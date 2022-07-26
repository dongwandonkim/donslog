import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="login" element={} />
        <Route path="register" element={} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
