import React from 'react';
import './Card.css';
import DisplayDate from './Date.js';

function Card(props) {
    return (
        <div className="card">
            <DisplayDate offset={props.offset}/>
            <p id={"w"+props.offset} className="weather">weather</p>
            <p id={"temp"+props.offset} className="temp">65° / 60°</p>
        </div>
    );
}

export default Card;