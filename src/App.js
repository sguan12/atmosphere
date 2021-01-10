import React from 'react';

var key = "a8c4082333a7853f46479418b8da3462";
const city = "San Francisco";

// using current weather API to obtain longitude and latitude
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + key)  
.then(response => response.json())
.then(data1 => onecall(data1));

function onecall(data1) {
  var lon = data1.coord.lon;
  var lat = data1.coord.lat;
  // then fetching more data from one call weather API using lon and lat
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + key)  
  .then(response => response.json())
  .then(data2 => console.log(data2));
}

function update(data2) {
  // updating current weather card
  var temp = Math.round(data2.current.temp);
  var max = Math.round(data2.daily[0].temp.max);
  var min = Math.round(data2.daily[0].temp.min);
  document.getElementById('ctemp').innerHTML = temp;
  document.getElementById('cm').innerHTML = max + ' / ' + min;
}

function App() {
  return (
    <div className='App'>

      <div className="info">
        <p id="title"> atmosphere </p>
        <p id="location"> Newark, California </p>
      </div>
      {/* todo: make a search bar */}

      <div className="data">

        <div className="current">
          <p>january 7</p>
          <p id="ctemp">60</p>
          <p id="cm">max and min</p>
        </div>

        <div className="other">
          <div className="card">
            <p>january 8</p>
          </div>
          <div className="card">
            <p>january 9</p>
          </div>
          <div className="card">
            <p>january 10</p>
          </div>
          <div className="card">
            <p>january 11</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
