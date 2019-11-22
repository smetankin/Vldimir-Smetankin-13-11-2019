export function favorites(state = JSON.parse(localStorage.getItem('favorites')) || [], action) {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return [...state, action.payload];
        case "REMOVE_FROM_FAVORITES":
            return [
                ...state.slice(0, state.indexOf(action.payload)),
                ...state.slice(state.indexOf(action.payload) + 1)
            ];
        default:
            return state;
    }
}
