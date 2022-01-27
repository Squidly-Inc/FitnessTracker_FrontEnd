import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../App';

function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>Profile</Link>
            <Link to='/activities'>Activities</Link>

            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>

        </nav>
    );
}

export default Navbar;