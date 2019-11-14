export function weather(state = [], action) {
    switch (action.type) {
        case "WEATHER_FETCH_DATA_SUCCESS":
            return action.weather;
        default:
            return state;
    }
}
