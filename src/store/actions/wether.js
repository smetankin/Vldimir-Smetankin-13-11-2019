import { getCityKeyByName, getWeatherInfoByCity, getWeatherByCityKey } from '../../api/weather'
import {addCityKey} from "../actions/cityKey"

export function weatherFetchDataSuccess(weather){
    return{
        type : "WEATHER_FETCH_DATA_SUCCESS",
        payload: weather
    }
}

export function weatherFetchData(name) {
    return(dispatch) => {
        getCityKeyByName(name)
            .then((cityKey) => {
                dispatch(addCityKey({cityKey, cityName: name}))
                getWeatherByCityKey(cityKey)
                    .then(weather => dispatch(weatherFetchDataSuccess({ cityKey, weatherData: weather} )))
            })
    }
}

export  function getWeatherInfoByCityKey(cityKey) {
    return(dispatch) => {
        getWeatherByCityKey(cityKey)
            .then(weather => dispatch(weatherFetchDataSuccess({ cityKey, weatherData: weather} )))
    }
}
