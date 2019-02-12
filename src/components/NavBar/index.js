import React from 'react';
import { Link } from "react-router-dom";
import  Logo from '../../assets/logo.png';
import './style.scss';

class NavBar extends React.Component {
  constructor(){
    super();
    this.state ={
      favorites: []
    }
  }
  
  render() {
    return (
    <nav className="navbar">
      <a href="/">
        <img src={Logo} alt="Logo here" width="50" height="40">
      </img>
      </a>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/users">User Page</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/">Favorites</Link>
        </li>
      </ul>
    </nav>
    )
  }
}
  



export default NavBar;