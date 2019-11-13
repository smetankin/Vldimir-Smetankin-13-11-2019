import React from 'react';
import './App.css';
import Form from "./components/form";
import Header from "./components/header";
import Weather from "./components/weather";

const API_KEY = 'rXX6gRAGas7dEvJyz21j3Z6pWMRKaJnk';

class App extends React.Component{
  state = {
    city: undefined,
    temperature: undefined,
    dayOfWeek: undefined,
  };

  gettingWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const location_api = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`);
    const location = await location_api.json();
    const firstCity = location[0];
    const cityKey = firstCity.Key;
    const getCityInfo = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
    const cityInfo = await getCityInfo.json();
    console.log(cityInfo);

  };

  render() {
    return(
        <div>
          <Header />
          <Form getWeather = {this.gettingWeather} />
          <Weather />
        </div>
    );
  }
}

export default App;
