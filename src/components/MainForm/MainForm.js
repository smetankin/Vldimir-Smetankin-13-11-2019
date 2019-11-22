import React from "react";
import { withRouter } from 'react-router-dom'

import "./mainForm.css"

import {connect} from "react-redux";

import {addToFavorites, removeFromFavorites} from "../../store/actions/favorites"
import {weatherFetchData} from "../../store/actions/weather";
import {getWeatherInfoByCityKey} from "../../store/actions/weather";

import Weather from "../Weather";
import Input from "../Input";
import WeatherToday from "../WeatherToday";
import AddToFavorites from "../AddToFavorites";

class  MainForm extends React.Component{

    componentDidMount() {
        (this.props.match.params.cityKey)?
            this.props.getWeatherInfoByCityKey(this.props.match.params.cityKey)
            : this.props.getWeatherInfoByCityKey("215854");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentCity && prevProps.currentCity.cityKey !== this.props.currentCity.cityKey) {
            this.props.history.push(`/${this.props.currentCity.cityKey}`);
        }
    }

    getWeather = (e) =>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        this.props.getWeatherData(city);
    };

    render() {
        const currentCityWeatherData = this.props.currentCity ? this.props.weather[this.props.match.params.cityKey || this.props.currentCity.cityKey] : null;

        if(currentCityWeatherData && this.props.currentCity){
            const currentCityFromRoute = this.props.cityKey.find(item => item.cityKey === this.props.match.params.cityKey)
            const cityName = currentCityFromRoute ? currentCityFromRoute.cityName : this.props.currentCity.cityName;

            return(
                <div>

                    <Input getWeather = {this.getWeather}/>
                    <div className="weather-today-favorite">
                        <WeatherToday
                            city = {cityName}
                            temp = {currentCityWeatherData[0].Temperature}
                            status = {currentCityWeatherData[0].Day.IconPhrase}
                        />
                        <AddToFavorites
                            isCurrentCityInFavorites={this.props.favorites.includes(this.props.currentCity.cityKey)}
                            handleAddToFavorites={() =>
                                this.props.favorites.length == 0 ?
                                    this.props.addToFavorites(this.props.currentCity.cityKey)
                                        : this.props.favorites.indexOf(this.props.currentCity.cityKey) >=0 ?
                                            null
                                            : this.props.addToFavorites(this.props.currentCity.cityKey)

                            }
                            handleRemoveFromFavorites={() =>
                                this.props.favorites.length != 0 ?
                                    this.props.removeFromFavorites(this.props.currentCity.cityKey)
                                        :null
                            }
                        />
                    </div>
                    <div className={"weather-container"}>
                    {
                        (currentCityWeatherData ?
                            (currentCityWeatherData.map((currentCityWeatherDataItem, index) => (
                                    <Weather
                                        key={index}
                                        date={currentCityWeatherDataItem.EpochDate}
                                        temp={currentCityWeatherDataItem.Temperature}
                                        status={currentCityWeatherDataItem.Day.IconPhrase}
                                    />
                                )
                            )) :null)
                    }
                    </div>
                </div>
            )
        }
        return null


    }
}
const mapStateToProps = state => {
  return{
    weather: state.weather,
    currentCity: state.cityKey.find(city =>city.isCurrent),
    favorites: state.favorites,
    cityKey: state.cityKey
  };
};

const  mapDispatchToProps = {
    getWeatherInfoByCityKey: (key) => getWeatherInfoByCityKey(key),
    getWeatherData: (name) => weatherFetchData(name),
    addToFavorites:  addToFavorites,
    removeFromFavorites: removeFromFavorites,
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainForm));
