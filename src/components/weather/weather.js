import React from 'react';



class  Weather extends React.Component{
    getData = () =>{
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ,"Saturday"];
        const date = new Date(this.props.date);
        const day = date.getDay();
        const dayOfWeek = daysOfWeek[day];

        return dayOfWeek;
    };
    getCelsius = () =>{
        const farenheit = (this.props.temp.Maximum.Value + this.props.temp.Minimum.Value)/2;
        const celsium = ((farenheit - 32)*5)/9;
        return celsium.toFixed(1);
    }

    render() {
        return(
            <div>
                <div className="weather-block">
                    <div>
                        {this.props.city}
                    </div>
                    <div>
                        {this.getData()}
                    </div>
                    <div>
                        {this.props.day.IconPhrase.toString()}
                    </div>
                    <div>
                        {this.getCelsius()} °C
                    </div>
                </div>
            </div>
        )
    }

}

export default Weather;
