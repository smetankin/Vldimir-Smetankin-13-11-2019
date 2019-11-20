import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import "./mainForm.css"

import {connect} from "react-redux";

import {addToFavorites} from "../../store/actions/favorites"
import {weatherFetchData} from "../../store/actions/wether";
import {addCityKey} from "../../store/actions/cityKey";
// import {getWeatherByCityKey} from "../../api/weather";
import {getWeatherInfoByCityKey} from "../../store/actions/wether";

import Weather from "../Weather";
import Input from "../Input";
import WeatherToday from "../WeatherToday";
import AddToFavorites from "../AddToFavorites";
import {cityKey} from "../../store/reducers/cityKey";


class  MainForm extends React.Component{
    state = {
      city: "Tel Aviv"
    };

    componentDidMount() {
        // this.props.getWeatherData(`Tel Aviv`);
        this.props.getWeatherInfoByCityKey("215854");
        console.log("favorites",this.props.favorites)
    }
    getWeather = async (e) =>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        await this.props.getWeatherData(city);
          this.setState({
            city: city,
        })
    };

    render() {

        const currentCityWeatherData = this.props.currentCity ? this.props.weather[this.props.currentCity.cityKey] : null;
        if(currentCityWeatherData){
            return(
                <div>

                    <Input getWeather = {this.getWeather}/>
                    <div className="weather-today-favorite">
                        <WeatherToday
                            city = {this.state.city}
                            temp = {currentCityWeatherData[0].Temperature}
                            status = {currentCityWeatherData[0].Day.IconPhrase}
                        />
                        <AddToFavorites
                            handleAddToFavorites={() =>
                                this.props.favorites.length == 0 ?
                                        this.props.addToFavorites(this.props.currentCity.cityKey)
                                    : this.props.favorites.indexOf(this.props.currentCity.cityKey) >=0 ?
                                        null
                                        : this.props.addToFavorites(this.props.currentCity.cityKey)

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
// export default MainForm;
const mapStateToProps = state => {
  return{
    weather: state.weather,
    currentCity: state.cityKey.find(city =>city.isCurrent),
    favorites: state.favorites
  };
};

const  mapDispatchToProps = {
    getWeatherInfoByCityKey: (key) => getWeatherInfoByCityKey(key),
    getWeatherData: (name) => weatherFetchData(name),
    addToFavorites:  addToFavorites,
    cityKey : addCityKey

};


export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
