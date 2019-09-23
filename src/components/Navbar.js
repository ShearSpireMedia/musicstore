import React, {Component} from 'react';
//import logo from '../images/logo.png';
import {FaBars} from 'react-icons/fa';
import {Link,NavLink} from 'react-router-dom';

class Navbar extends Component {
    state={isOpen:false};
    handleToggle = () => {
      this.setState({isOpen:!this.state.isOpen});
    };

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="nav-header-link">Musical Instruments</Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaBars className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><NavLink exact to="/" activeStyle={{color:"#900"}}>Home</NavLink></li>
                        <li><NavLink exact to="/products" activeStyle={{color:"#900"}}>Products</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;