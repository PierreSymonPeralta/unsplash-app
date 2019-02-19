import React from 'react';
import './App.scss';

import { UserPage, HomePage, AboutPage } from './containers';
import { NavBar } from './components';
import { HashRouter as Router, Route } from "react-router-dom";


const App =  () => (
   <Router>
    <div className="App">
      <NavBar/>
      <div className="AppPage">
        <Route path="/" exact component={HomePage} />
        <Route path="/users/" component={UserPage} />
        <Route path="/about/" component={AboutPage} />
      </div>
    </div>
  </Router>
)

export default App;
