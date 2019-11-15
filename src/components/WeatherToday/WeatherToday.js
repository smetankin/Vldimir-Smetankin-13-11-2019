import React from "react";

class  WeatherToday extends React.Component{
    render() {
        return(
            <div>
                <div className="city-name">
                    {this.props.city}
                </div>
                <div className="temperature-today">
                    {
                        this.props.weatherToday ?
                            this.props.weatherToday.Date.toString()
                            : "Loading..."
                    }
                </div>
            </div>
        );
    }
}
export default WeatherToday
