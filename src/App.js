import React from 'react';

var key = "a8c4082333a7853f46479418b8da3462";
const city = "Newark"
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&cnt=5&units=imperial&appid=' + key)  
.then(response => response.json())
.then(data => console.log(data));

function App() {
  return (
    <div className='App'>

      <div className="title">
        atmosphere
      </div>

      {/* todo: make a search bar */}

      <div className="data">
        <div className="current">
          <p>january 7</p>
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
