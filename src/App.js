import React from 'react';
import './App.scss';

import { UserPage, HomePage, AboutPage } from './containers';
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

import { NavBar } from './components';


const App =  () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <NavBar/>
        <div className="AppPage">
          <Route path="/" exact component={HomePage} />
          <Route path="/users/:username" component={UserPage} />
          <Route path="/about/" component={AboutPage} />
        </div>
      </div>
    </Router>
  </Provider>
)

export default App;
