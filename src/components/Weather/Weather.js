import React from 'react';
import {getCelsius} from "../../helpers/getCelsium";
import "./weather.css"

import Card from '@material-ui/core/Card';

class  Weather extends React.Component{
    getDayOfWeek = () =>{
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ,"Saturday"];
        const date = new Date(this.props.date*1000);
        const day = date.getDay();
        return daysOfWeek[day];
    };
    // getCelsius = () =>{
    //     const farenheit = (this.props.temp.Maximum.Value + this.props.temp.Minimum.Value)/2;
    //     const celsium = ((farenheit - 32)*5)/9;
    //     return celsium.toFixed(1);
    // }

    render() {
        return(
            <Card>
                <div className="weather-block">
                    <div>
                        {this.getDayOfWeek()}
                    </div>
                    <div>
                        {this.props.status}
                    </div>
                    <div>
                        {getCelsius(this.props.temp)}°C
                    </div>
                </div>
            </Card>
        )
    }

}

export default Weather;
