import { makeAPICall } from './helper';

const API_KEY = 'rXX6gRAGas7dEvJyz21j3Z6pWMRKaJnk';

export const getCityKeyByName = async (name) =>{
    const location = await makeAPICall(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${name}`);
    // const location = await location_api.json();
    const firstCity = location[0];
    return firstCity.Key;
};

export const getWeatherInfoByCity = async (cityName) =>{
    const cityKey = await getCityKeyByName(cityName);
    const cityInfo = await makeAPICall(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
    // const cityInfo = await getCityInfo.json();
    return cityInfo.DailyForecasts;
};
