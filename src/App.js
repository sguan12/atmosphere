import React from 'react';
import Header from './components/Header.js';
import Current from './components/Current.js';
import Card from './components/Card.js';
import Api from './components/Api.js';
import {city, units} from './components/Global.js';

// changing background color based on time
function night() {
  document.body.style = "background-image: linear-gradient(rgb(30, 47, 71), rgb(74, 95, 104));";
}

function App() {
  Api(city, units);
  return (
    <div className='App'>

      <Header/>

      <div className="data">

        <Current/>

        <div className="other">
          <Card offset="1"/>
          <Card offset="2"/>
          <Card offset="3"/>
          <Card offset="4"/>
        </div>

      </div>

    </div>
  );
}

export default App;
