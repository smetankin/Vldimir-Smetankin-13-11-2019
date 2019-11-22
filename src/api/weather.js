import { makeAPICall } from './helper';

const API_KEY = 'UD4SCAX3zLfke0bHjEDBBzaHNKSWBYs0';

export const getCityKeyByName = async (name) =>{

    const location = await makeAPICall(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${name}`);

    const firstCity = location[0];
    if (!firstCity) {
        return null
    }
    return firstCity.Key;
};

export const getWeatherByCityKey = async (cityKey) =>{
    const cityInfo = await makeAPICall(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
    return cityInfo.DailyForecasts;
};

export const getWeatherInfoByCity = async (cityName) =>{
    const cityKey = await getCityKeyByName(cityName);
    const cityInfo = await makeAPICall(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
    return cityInfo.DailyForecasts;
};
