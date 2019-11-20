import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
// import Form from ".././components/form";
// import Header from ".././components/header";
import Header from "../components/Header"
import Weather from "../components/Weather";
import WeatherToday from "../components/WeatherToday/WeatherToday";
import {connect} from "react-redux";
import {weatherFetchData} from "../store/actions/wether";
import MainForm from "../components/MainForm";
import Favorites from "../components/Favorites";

const API_KEY = 'rXX6gRAGas7dEvJyz21j3Z6pWMRKaJnk';

class App extends React.Component{


  render() {
    return(
        <div className={"App"}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MainForm />
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                </Switch>
            </Router>
           {/*<MainForm/>*/}
           {/*<Form/>*/}
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
