import {countryActionTypes} from "./country.types";
import {getData,convertCountryData} from "../../utils/country.utils.js";

export const fetchCountryStart = () =>({
    type:countryActionTypes.FETCH_COUNTRY_START
})

export const fetchCountrySuccess = (country) =>({
    type:countryActionTypes.FETCH_COUNTRY_SUCCESS,
    payload:country
})

export const fetchCountryFailure = (error) =>({
    type:countryActionTypes.FETCH_COUNTRY_FAILURE,
    payload:error
})

export const fetchCountryStartAsync = () =>{
    return dispatch =>{
        const data = getData();
        dispatch(fetchCountryStart());
        data
        .then(country=>{    
                const countryName = convertCountryData(country);
                dispatch(fetchCountrySuccess(countryName));
                })
                .catch(error=>{
                    dispatch(fetchCountryFailure(error))
                })
    }
}
