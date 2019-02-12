import React from 'react';
import './App.scss';


import { UserPage, HomePage, AboutPage } from './containers';
import { NavBar } from './components';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App =  () => (
  <Router>
    <div className='root'>
      <NavBar/>
      {/* <Dialog/> */}
      {/* App Content */}
      <Route path="/" exact component={HomePage} />
      <Route path="/users/" component={UserPage} />
      <Route path="/about/" component={AboutPage} />
    </div>
  </Router>
)
  


export default App;
