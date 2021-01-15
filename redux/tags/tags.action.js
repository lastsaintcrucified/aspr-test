import {tagsActionTypes} from "./tags.types";
import {firestore} from "../../firebase/firebase.utils.js";

export const fetchTagStart = () =>({
    type:tagsActionTypes.FETCH_TAGS_START
})

export const fetchTagSuccess = (tags) =>({
    type:tagsActionTypes.FETCH_TAGS_SUCCESS,
    payload:tags
})

export const fetchTagFailure = (error) =>({
    type:tagsActionTypes.FETCH_TAGS_FAILURE,
    payload:error
})

export const fetchTagStartAsync = () =>{
    return dispatch =>{
        const docRef = firestore.collection('tags').doc("16Hl3rxdg0nk7xduqzRO");
        dispatch(fetchTagStart());
        docRef.get().then(snapshot=>{
            const tags = Object.values(snapshot.data());
            dispatch(fetchTagSuccess(tags));
        }).catch(error=>dispatch(fetchTagFailure(error)))
    }
}


export const postTagStart = () =>({
    type:tagsActionTypes.POST_TAGS_START
})

export const postTagSuccess = (res) =>({
    type:tagsActionTypes.POST_TAGS_SUCCESS,
    payload:res
})

export const postTagFailure = (error) =>({
    type:tagsActionTypes.POST_TAGS_FAILURE,
    payload:error
})

export const postTagStartAsync = (tags) =>{
    return dispatch =>{
        const collectionRef = firestore.collection("userSavePost");
        dispatch(postTagStart());
        if(tags && tags.length<=0){
            dispatch(postTagFailure("blank"))
        }
        const docRef = collectionRef.doc();
        docRef.set(Object.assign({},tags)).then(dispatch(postTagSuccess("successfully uploaded"))).catch(error=>dispatch(postTagFailure(error)));
    }
}