import React from "react"

import Button from '@material-ui/core/Button';
import {connect} from "react-redux";

class  AddToFavorites extends React.Component{



    render() {
        return(
            <div>
                {
                    this.props.isCurrentCityInFavorites ?
                        <Button onClick={this.props.handleRemoveFromFavorites} variant="contained" color="secondary"> Remove from favorites </Button>
                        : <Button onClick={this.props.handleAddToFavorites} variant="contained" color="secondary"> Add to favorites </Button>

                }
            </div>
        )
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

export default connect(mapStateToProps)(AddToFavorites);
