import React from 'react';
import header from './components/header.js';

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
  haiku(main, description);
  document.getElementById('ctemp').innerHTML = temp + '°';
  document.getElementById('cm').innerHTML = max + '° / ' + min + '°';
  // updating cards for forecasts
  var w1 = data2.daily[1].weather[0].main;
  var t1max = Math.round(data2.daily[1].temp.max);
  var t1min = Math.round(data2.daily[1].temp.min);
  var w2 = data2.daily[2].weather[0].main;
  var t2max = Math.round(data2.daily[2].temp.max);
  var t2min = Math.round(data2.daily[2].temp.min);
  var w3 = data2.daily[3].weather[0].main;
  var t3max = Math.round(data2.daily[3].temp.max);
  var t3min = Math.round(data2.daily[3].temp.min);
  var w4 = data2.daily[4].weather[0].main;
  var t4max = Math.round(data2.daily[4].temp.max);
  var t4min = Math.round(data2.daily[4].temp.min);
  document.getElementById('w1').innerHTML = w1;
  document.getElementById('temp1').innerHTML = t1max + '° / ' + t1min + '°';
  document.getElementById('w2').innerHTML = w2;
  document.getElementById('temp2').innerHTML = t2max + '° / ' + t2min + '°';
  document.getElementById('w3').innerHTML = w3;
  document.getElementById('temp3').innerHTML = t3max + '° / ' + t3min + '°';
  document.getElementById('w4').innerHTML = w4;
  document.getElementById('temp4').innerHTML = t4max + '° / ' + t4min + '°';
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

// spelled out months for generating date
const months = ["january", "february", "march", "april", "may", "june", "july", "august",
                "september", "october", "november", "december"];
// changing background color based on time
function night() {
  document.body.style = "background-image: linear-gradient(rgb(30, 47, 71), rgb(74, 95, 104));";
}

// haiku dictionary
const haikus = {
  "clear": " warm, radiant sun <br> offers us a beaming smile <br> lights our world with joy ",
  "clouds": " a shy ray of light <br> cautiously peeks behind clouds <br> stays partly hidden ",
  "overcast clouds": " gray and moody skies <br> there's no sun to be seen but <br> good photo lighting ",
  "thunderstorm": " rain but with a flash <br> fierce lightning pierce the heavens <br> booming drums above ",
  "rain": " heavy raindrops fall <br> rest your eyes and listen close <br> nature's lullaby ",
  "drizzle": " refreshing drizzle <br> like flying through a cloud in <br> tiny mist droplets ",
  "snow": " white, frosty winter <br> icy crystals float gently <br> they melt in your hands "
}

// generating corresponding haiku
function haiku(main, description) {
  if (description === "overcast clouds")
    document.getElementById('haiku').innerHTML = haikus[description.toLowerCase()];
  else if (haikus[main.toLowerCase()] === undefined)
    document.getElementById('haiku').innerHTML = main.toLowerCase();
  else document.getElementById('haiku').innerHTML = haikus[main.toLowerCase()];
}

function App() {
  return (
    <div className='App'>

      <header />

      <div className="data">

        <div className="current">
          <p className="date">{months[new Date().getMonth()] + " " + new Date().getDate()}</p>
          <div className="c">
            <p id="ctemp">60°</p>
            <p id="cm">65° / 60°</p>
          </div>
          <p id="haikutitle">today's weather:</p>
          <p id="haiku">the haiku goes here</p>
          <button type="button" id="units" onclick={changeunits}>use metric units</button>
        </div>

        <div className="other">
          <div className="card">
            <p className="date">{months[new Date().getMonth()] + " " + (new Date().getDate()+1)}</p>
            <p id="w1" className="weather">weather</p>
            <p id="temp1" className="temp">65° / 60°</p>
          </div>
          <div className="card">
            <p className="date">{months[new Date().getMonth()] + " " + (new Date().getDate()+2)}</p>
            <p id="w2" className="weather">weather</p>
            <p id="temp2" className="temp">65° / 60°</p>
          </div>
          <div className="card">
            <p className="date">{months[new Date().getMonth()] + " " + (new Date().getDate()+3)}</p>
            <p id="w3" className="weather">weather</p>
            <p id="temp3" className="temp">65° / 60°</p>
          </div>
          <div className="card">
            <p className="date">{months[new Date().getMonth()] + " " + (new Date().getDate()+4)}</p>
            <p id="w4" className="weather">weather</p>
            <p id="temp4" className="temp">65° / 60°</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
