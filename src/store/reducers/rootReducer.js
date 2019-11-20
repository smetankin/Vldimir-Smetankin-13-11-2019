import {combineReducers} from "redux";
import {weather} from "./weather";
import {favorites} from "./favorites";
import {cityKey} from "./cityKey"

const rootReducer = combineReducers({
    weather, favorites, cityKey
});

export default rootReducer;
