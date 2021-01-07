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
      <div class="title">
        atmosphere
      </div>
      <div class="data">
        <div class="card">Monday</div>
        <div class="card">Tuesday</div>
        <div class="card">Wednesday</div>  
        <div class="card">Thursday</div>
        <div class="card">Friday</>
      </div>
    </div>
  );
}

export default App;
