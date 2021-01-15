import {combineReducers} from "redux";
import countryReducer from "./country/country.reducer.js";
import tagReducer from "./tags/tags.reducer.js"


const rootReducer = combineReducers({
    countries:countryReducer,
    tags:tagReducer
})

export default rootReducer;