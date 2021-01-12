import React from 'react';
import './header.css';

function header() {
    return (
        <div className="info">
            <p id="title"> atmosphere </p>
            <div className="city">
            <p id="location"> San Francisco </p>
            <input type="text" id="search" placeholder="search another city..."/>
            </div>
        </div>
    );
}

export default header;