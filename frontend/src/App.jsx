import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/SignUp/login';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
