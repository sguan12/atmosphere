import React from 'react';
import './Current.css';
import DisplayDate from './Date.js';
import Button from './Button.js';

function Current() {
    return (
        <div className="current">
            <DisplayDate offset="0"/>
            <div className="c">
                <p id="ctemp">60°</p>
                <p id="cm">65° / 60°</p>
            </div>
            <p id="haikutitle">today's weather:</p>
            <p id="haiku">the haiku goes here</p>
            <Button/>
        </div>
    );
}

export default Current;