import {countryActionTypes} from "./country.types";

const INITIAL_STATE = {
    isFetching:false,
    country:[],
    error:"",
    res:""
}

const countryReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case countryActionTypes.FETCH_COUNTRY_START:
            return {
                ...state,
                isFetching:true
            }
        case countryActionTypes.FETCH_COUNTRY_SUCCESS:
        return {
            ...state,
            country:["festival",...action.payload],
            isFetching:false
        }
        default:
            return state
    }
}

export default countryReducer;