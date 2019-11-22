
export function addToFavorites(cityKey){
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favoritesFromLocalStorage.includes(cityKey)) {
        favoritesFromLocalStorage.push(cityKey);
        localStorage.setItem('favorites', JSON.stringify(favoritesFromLocalStorage));
    }

    return {
        type : "ADD_TO_FAVORITES",
        payload: cityKey
    }
}
export function removeFromFavorites(cityKey){
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favoritesFromLocalStorage.includes(cityKey)) {

        favoritesFromLocalStorage.splice(favoritesFromLocalStorage.indexOf(cityKey), 1);
        localStorage.setItem('favorites', JSON.stringify(favoritesFromLocalStorage));
    }
    return{
        type : "REMOVE_FROM_FAVORITES",
        payload: cityKey
    }
}
