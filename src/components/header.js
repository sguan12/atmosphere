import React from 'react';
import './Header.css';
import Search from './Search.js';

function Header() {
    return (
        <div className="info">
            <p id="title"> atmosphere </p>
            <div className="city">
            <p id="location"> San Francisco </p>
            <Search/>
            </div>
        </div>
    );
}

export default Header;