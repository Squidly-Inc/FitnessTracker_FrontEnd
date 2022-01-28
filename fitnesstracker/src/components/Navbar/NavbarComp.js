import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <div id="navLinks">
                <Link to='/'>Home</Link>
                <Link to='/activities'>Activities</Link>
            </div>

            <div id='loginItems'>
                <Link to='/login' id='login'>Login</Link>
                <Link to='/register' id='register'>Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;