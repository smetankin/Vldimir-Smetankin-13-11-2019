export function cityKey(state = [
    {cityKey: "215854", cityName: "Tel Aviv", isCurrent: true}
    ], action) {
    switch (action.type) {
        case "ADD_CITY_KEY":
            return [...(state.map(i => ({...i, isCurrent: false}))), { ...action.payload, isCurrent: true }];
        default:
            return state;
    }
}
