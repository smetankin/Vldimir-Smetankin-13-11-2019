import React from "react"
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import "./favorites.css"
import {connect} from "react-redux";
import {getCelsius} from "../../helpers/getCelsium";
import {getWeatherInfoByCityKey} from "../../store/actions/weather";

class Favorites  extends React.Component{

    componentDidMount() {
        this.props.favorites.forEach((item) =>
            this.props.getWeatherInfoByCityKey(item)
        );
    }

    render() {
        return(
            <div>
                <div className="title">
                    Favorites:
                </div>
                <div className="favorite-items">
                    {
                        // this.props.favorites.length >0 ?
                        this.props.favorites.map((item, index) =>{
                            const favoriteCityNameObject = this.props.cityKey.find(ck => ck.cityKey === item);
                            const weatherForCity = this.props.weather[item];

                            if (!favoriteCityNameObject || !weatherForCity) {
                                return null;
                            }

                            return (
                                <div key={index} className={"favorite-card"}>
                                    <Link  to={`/${favoriteCityNameObject.cityKey}`}>
                                        <Card>
                                            <div className={"city"}>{favoriteCityNameObject.cityName}</div>
                                            <div className={"temperature"}>{getCelsius(weatherForCity[0].Temperature)}°C</div>
                                            <div className={"status"}>{this.props.weather[item][0].Day.IconPhrase}</div>
                                        </Card>
                                    </Link>
                                </div>
                                )

                            }
                        )
                    }
                </div>
                <div>
                </div>
            </div>
        )
    }

}

const  mapDispatchToProps = {
    getWeatherInfoByCityKey: getWeatherInfoByCityKey
};

const mapStateToProps = (state) => {
 return  {
     favorites: state.favorites,
     weather: state.weather,
     cityKey: state.cityKey
 }
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
