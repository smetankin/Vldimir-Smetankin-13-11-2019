import React from 'react';
import './App.css';
import Form from ".././components/form";
import Header from ".././components/header";
import Weather from "../components/Weather";
import WeatherToday from "../components/WeatherToday/WeatherToday";
import {connect} from "react-redux";
import {weatherFetchData} from "../store/actions/wether";
import MainForm from "../components/MainForm";

const API_KEY = 'rXX6gRAGas7dEvJyz21j3Z6pWMRKaJnk';

class App extends React.Component{
  state = {
    weatherToday: undefined,
    city: "",
    weatherItems: []
  };

  // componentDidMount() {
  //     this.props.fetchData(`Tel%20Aviv`);
  // }


  //   gettingWeather = async (e) => {
  //   e.preventDefault();
  //   const city = e.target.elements.city.value;
  //   const location_api = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`);
  //   const location = await location_api.json();
  //   const firstCity = location[0];
  //   const cityKey = firstCity.Key;
  //   const getCityInfo = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
  //   const cityInfo = await getCityInfo.json();
  //   const infoArr = cityInfo.DailyForecasts;
  //   const weatherToday = infoArr[0];
  //
  //   this.setState({
  //     weatherItems: infoArr.map((item) => ({
  //       date: item.Date,
  //       temp: item.Temperature,
  //       day: item.Day
  //     })),
  //     city : city,
  //     weatherToday: weatherToday
  //   });
  //
  //   // const infoElements =
  //   console.log(cityInfo);
  //   console.log(infoArr);
  //   console.log(weatherToday);
  // };

  render() {
    return(
        <div>
            <Header />
           <MainForm />
            {/*{this.props.weather.Date}*/}
          {/*<Form getWeather = {this.gettingWeather} />*/}
          {/*<WeatherToday*/}
          {/*    city = {this.state.city}*/}
          {/*    weatherToday = {this.state.weatherToday}*/}
          {/*/>*/}
          {/*{*/}
          {/*  this.state.weatherItems.map((weatherItem, index) => (*/}
          {/*      <Weather key={index} date={weatherItem.date} temp={weatherItem.temp} day={weatherItem.day} />*/}
          {/*  ))*/}
          {/*}*/}
        </div>
    );
  }
}

// const mapStateToProps = state => {
//   return{
//     weather: state.weather
//   };
// };
//
// const  mapDispatchToProps = {
//     fetchData: (name) => weatherFetchData(name)
// };
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App
