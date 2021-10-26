import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Homepage from './pages/Homepage';
import Navbar from './components/Nav';
import Shop from './pages/Shop'; 
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path = "/" component = {Homepage}/>
        <Route exact path = "/shop" component = {Shop} />
        <Route exact path = "/contact" component = {Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
