import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react';

import Homepage from './pages/Homepage';
import Navbar from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path = "/" component = {Homepage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
