import React from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <Header />
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
