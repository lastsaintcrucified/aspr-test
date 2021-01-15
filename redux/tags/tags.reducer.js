import {tagsActionTypes} from "./tags.types";

const INITIAL_STATE = {
    isFetching:false,
    tag:[],
    error:"",
    res:""
}

const tagReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case tagsActionTypes.FETCH_TAGS_START:
            return {
                ...state,
                isFetching:true
            }
        case tagsActionTypes.FETCH_TAGS_SUCCESS:
        return {
            ...state,
            tag:action.payload,
            isFetching:false
        }
        case tagsActionTypes.POST_TAGS_START:
            return {
                ...state,
                isFetching:true,
                res:""
            }
        case tagsActionTypes.POST_TAGS_SUCCESS:
        return {
            ...state,
            res:action.payload,
            isFetching:false
        }
        case tagsActionTypes.POST_TAGS_FAILURE:
        return {
            ...state,
            res:action.payload
        }
        default:
            return state
    }
}

export default tagReducer;