import React from "react";
import {getCelsius} from "../../helpers/getCelsium";
import "./weatherToday.css"

function WeatherToday(props){
        return(
            <div>
                <div className="city-name">
                    {props.city}
                </div>
                <div className="temperature-today">
                    {props.temp != null ? getCelsius(props.temp) : null}°C
                </div>
                <div className="status-today">
                    {props.status}
                </div>
            </div>
        );
}
export default WeatherToday
