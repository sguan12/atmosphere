import React, {useState} from 'react';
import Header from './components/Header.js';
import Current from './components/Current.js';
import Card from './components/Card.js';
import Api from './components/Api.js';
import AppContext from './components/AppContext.js';

function App() {
  const [city, setCity] = useState('San Francisco');
  const [units, setUnits] = useState('imperial');
  const changeCity = (e, city, units) => {
    if(e.keyCode == 13) {
      setCity(e.target.value);
      Api(city, units);
      e.target.value = '';
    }
  }
  const changeUnits = (b, units, city) => {
    if (b.bool) {
      setUnits("metric");
    }
    else {
      setUnits("imperial");
    }
    Api(city, units);
  }
  const settings = {
    city, setCity, changeCity,
    units, setUnits, changeUnits
  } 

  Api(city, units);
  return (
    <AppContext.Provider value={settings}>
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
    </AppContext.Provider>
  );
}

export default App;
