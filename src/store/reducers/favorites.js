export function favorites(state = [], action) {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return [...state, action.payload];
        default:
            return state;
    }
}
