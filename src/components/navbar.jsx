import React, { Component } from 'react';
import logo from '../images/sc.png';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() { 
        return (
            <div className="home">
                {/* <div className="cursor" id="cursor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.014" height="22.049" viewBox="0 0 18.014 22.049">
                        <path id="cursor" d="M12.213,10.211a.91.91,0,0,1,1.406-.864L27.8,19.317a.983.983,0,0,1-.4,1.767l-7.451.9a.9.9,0,0,0-.627.385l-4.461,6.418a.9.9,0,0,1-1.636-.517Z" transform="translate(-11.21 -8.158)" fill="#122d34" stroke="#fff" stroke-width="2"/>
                    </svg>
                </div>
                <div className="cursor-follower" id="cursor-follower"></div>
                 */}
                <div className="navbar">
                    <img src={logo} alt="logo" />
                    <div className="menu">
                    <Link className="menu-bg menu-bg-active active-menu" to="/">Work</Link>
                    <Link className="menu-bg" to="/resume">Resume</Link>
                    <Link className="menu-bg" to="/contact"> Contact</Link>
                    <Link className="menu-bg" to="/about">About Me</Link>
                </div>
                </div>
                
                </div>
            
        );
    }
}
 
export default NavBar;