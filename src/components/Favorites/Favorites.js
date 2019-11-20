import React from "react"

import Card from '@material-ui/core/Card';
import "./favorites.css"
import {connect} from "react-redux";
import {getCelsius} from "../../helpers/getCelsium";
import {getWeatherInfoByCityKey} from "../../store/actions/wether";

class Favorites  extends React.Component{

    componentDidMount() {
        // console.log('mounted', this.props)
        this.props.favorites.forEach((item) =>
            this.props.getWeatherInfoByCityKey(item)
        );
        console.log("cityKey:",this.props.cityKey)
    }

    render() {
        return(
            <div>
                <div className="title">
                    Favorites:
                </div>
                <div className="favorite-items">
                    {
                        this.props.favorites.map((item, index) =>(
                               <Card key={index}>
                                   <div className={"city"}>{this.props.cityKey[index].cityName}</div>
                                   <div className={"temperature"}>{getCelsius(this.props.weather[item][0].Temperature)}°C</div>
                                   <div className={"status"}>{this.props.weather[item][0].Day.IconPhrase}</div>
                               </Card>
                            )
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
