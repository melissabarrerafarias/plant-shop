import logo from './logo.svg';
import './App.css';

import React from 'react';

import Homepage from './pages/Homepage';
import Navbar from './components/Nav';

function App() {
  return (
    <div>
       <Navbar />
      <Homepage />
     </div>
  );
}

export default App;
