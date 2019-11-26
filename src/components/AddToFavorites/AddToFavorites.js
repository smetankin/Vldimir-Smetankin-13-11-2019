import React from "react"

import Button from '@material-ui/core/Button';
import {connect} from "react-redux";

function AddToFavorites(props){



    // render() {
        return(
            <div>
                {
                    props.isCurrentCityInFavorites ?
                        <Button onClick={props.handleRemoveFromFavorites} variant="contained" color="secondary"> Remove from favorites </Button>
                        : <Button onClick={props.handleAddToFavorites} variant="contained" color="secondary"> Add to favorites </Button>

                }
            </div>
        )
    // }
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
