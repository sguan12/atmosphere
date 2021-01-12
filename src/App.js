import React from 'react';
import Header from './components/Header.js';
import Current from './components/Current.js';
import Haiku from './components/Haiku.js';
import Card from './components/Card.js';

// using open weather map
var apikey = "a8c4082333a7853f46479418b8da3462";
var city = "San Francisco";
var units = "imperial";

// current weather API gives longitude and latitude
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + units + '&appid=' + apikey)  
.then(response => response.json())
.then(data1 => onecall(data1));

// fetch necessary data from one call weather API with lon and lat
function onecall(data1) {
  var lon = data1.coord.lon;
  var lat = data1.coord.lat;
  document.getElementById('location').innerHTML = city + ", " + data1.sys.country;
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=' + units + '&appid=' + apikey)  
  .then(response => response.json())
  .then(data2 => update(data2));
}

// displaying information in html
function update(data2) {
  // updating current weather card
  var temp = Math.round(data2.current.temp);
  var max = Math.round(data2.daily[0].temp.max);
  var min = Math.round(data2.daily[0].temp.min);
  var main = data2.daily[0].weather[0].main;
  var description = data2.daily[0].weather[0].description;
  Haiku(main, description);
  document.getElementById('ctemp').innerHTML = temp + '°';
  document.getElementById('cm').innerHTML = max + '° / ' + min + '°';
  // updating cards for forecasts
  var w1 = data2.daily[1].weather[0].main;
  var t1 = Math.round(data2.daily[1].temp.max) + '° / ' + Math.round(data2.daily[1].temp.min) + '°';
  var w2 = data2.daily[2].weather[0].main;
  var t2 = Math.round(data2.daily[2].temp.max) + '° / ' + Math.round(data2.daily[2].temp.min) + '°';
  var w3 = data2.daily[3].weather[0].main;
  var t3 = Math.round(data2.daily[3].temp.max) + '° / ' + Math.round(data2.daily[3].temp.min) + '°';
  var w4 = data2.daily[4].weather[0].main;
  var t4 = Math.round(data2.daily[4].temp.max) + '° / ' + Math.round(data2.daily[4].temp.min) + '°';
  document.getElementById('w1').innerHTML = w1;
  document.getElementById('temp1').innerHTML = t1;
  document.getElementById('w2').innerHTML = w2;
  document.getElementById('temp2').innerHTML = t2;
  document.getElementById('w3').innerHTML = w3;
  document.getElementById('temp3').innerHTML = t3;
  document.getElementById('w4').innerHTML = w4;
  document.getElementById('temp4').innerHTML = t4;
  // style adjustments
  if (data2.current.dt > data2.current.sunset) night();
}

// change units
function changeunits() {
  if (units === 'imperial') {
    units = 'metric';
    document.getElementById('units').innerHTML = "use imperial units";
    console.log("it works");
  }
  else {
    units = 'imperial';
    document.getElementById('units').innerHTML = "use metric units";
  }
  window.location.reload();
}

// changing background color based on time
function night() {
  document.body.style = "background-image: linear-gradient(rgb(30, 47, 71), rgb(74, 95, 104));";
}

function App() {
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
