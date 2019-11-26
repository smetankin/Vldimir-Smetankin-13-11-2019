import { makeAPICall } from './helper';

const API_KEY = 'rXX6gRAGas7dEvJyz21j3Z6pWMRKaJnk';

export const getCityKeyByName = async (name) =>{

    const location = await makeAPICall(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${name}`);

    const firstCity = location[0];
    if (!firstCity) {
        return null
    }
    return firstCity.Key;
};

export const getWeatherByCityKey = async (cityKey) =>{
    const cityInfo = await makeAPICall(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
    return cityInfo.DailyForecasts;
};

export const getWeatherInfoByCity = async (cityName) =>{
    const cityKey = await getCityKeyByName(cityName);
    const cityInfo = await makeAPICall(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
    return cityInfo.DailyForecasts;
};

export const autocompleateSearch = async (text) =>{
    const cities = await makeAPICall(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${text}`);
    return cities;
}
