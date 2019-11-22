export function addCityKey(cityKey){
    const cityKeyFromLocalStorage = JSON.parse(localStorage.getItem('cityKey')) || [];
    if(!cityKeyFromLocalStorage.includes(cityKey)) {
        cityKeyFromLocalStorage.push(cityKey);
        localStorage.setItem('cityKey', JSON.stringify(cityKeyFromLocalStorage));
    }
    return{
        type : "ADD_CITY_KEY",
        payload: cityKey
    }
}
