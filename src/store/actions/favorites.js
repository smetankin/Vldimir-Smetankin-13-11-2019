
export function addToFavorites(cityKey){
    return{
        type : "ADD_TO_FAVORITES",
        payload: cityKey
    }
}
