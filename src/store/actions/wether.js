import { getCityKeyByName, getWeatherInfoByCity } from '../../api/weather'

export function weatherFetchDataSuccess(weather){
    return{
        type : "WEATHER_FETCH_DATA_SUCCESS",
        payload: weather
    }
}

export function weatherFetchData(name) {
    return(dispatch) => {
        getWeatherInfoByCity(name)
            .then(weather => dispatch(weatherFetchDataSuccess(weather)))
    }
}
