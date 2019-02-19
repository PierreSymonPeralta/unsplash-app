import React from 'react';
import { Link } from "react-router-dom";
import  Logo from '../../assets/logo.png';
import './style.scss';

class NavBar extends React.Component {
  constructor(){
    super();
    this.state = {
      showNavbar: false
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  
  render() {
    return (
    <div className="navbar">
      <button className="navbar__menu" onClick={this.onMenuClick}></button>
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="Logo here" width="50" height="40"/>
        </Link>
      </div> 
      <ul onClick={this.onMenuClick}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/about">Collections</Link></li>
        <li><Link to="/">Favorites</Link></li>
      </ul>
    </div>
    )
  }

  // ******** CUSTOM METHODS *********** //

  onMenuClick(){
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle('navbar--visible');
  }
}
  
export default NavBar;