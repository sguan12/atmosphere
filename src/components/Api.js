import React from 'react';
import Haiku from './Haiku.js';

// using open weather map
var apikey = "a8c4082333a7853f46479418b8da3462";

// current weather API gives longitude and latitude
function Api(city, units) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + units + '&appid=' + apikey)  
  .then(response => response.json())
  .then(data1 => onecall(data1, city, units));
}

// fetch necessary data from one call weather API with lon and lat
function onecall(data1, city, units) {
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
//   if (data2.current.dt > data2.current.sunset) night();
}

export default Api;