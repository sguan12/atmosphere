import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function message() {
    return (
        <div>
            <p id="title"> atmosphere </p>
            <div className="note">
                <p id="header">time for my customary coding project reflection!</p>
                <p>hello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhd hello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhdhello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhdhello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhdhello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhdhello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhd</p>
                <p>hello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhd hello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhdhello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhdhello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhdhello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhdhello there blah blahba lahblash lbahblhir lwer li bhweuhrkw alhd</p>
            </div>
            <button id="notebutton" onClick={back}>go back</button>
        </div>
    )
}

function Note() {
    ReactDOM.render(message(), document.getElementById('root'));
}

function back() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

export default Note;