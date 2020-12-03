import React from 'react';

var key = "a8c4082333a7853f46479418b8da3462";

function data(city) {
  fetch('api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key)  
	.then(res => res.json())
	// .then( ? );
}

function App() {
  return (
    <div className='App'>
      <div class="data">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>  
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
    </div>
  );
}

export default App;
