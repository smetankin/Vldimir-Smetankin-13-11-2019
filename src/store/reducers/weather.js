export function weather(state = {}, action) {
    switch (action.type) {
        case "WEATHER_FETCH_DATA_SUCCESS":
            return {
                ...state,
                [action.payload.cityKey]: action.payload.weatherData
            }
        default:
            return state;
    }
}
