import React from "react";
import {getCelsius} from "../../helpers/getCelsium";
import "./weatherToday.css"

class  WeatherToday extends React.Component{

    render() {
        console.log("props" , this.props);
        return(
            <div>
                <div className="city-name">
                    {this.props.city}
                </div>
                <div className="temperature-today">
                    {this.props.temp != null ? getCelsius(this.props.temp) : null}°C
                </div>
                <div className="status-today">
                    {this.props.status}
                </div>
            </div>
        );
    }
}
export default WeatherToday
