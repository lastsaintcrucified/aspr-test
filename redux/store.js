import {createStore, applyMiddleware} from "redux";
import rootReducer from "./root-reducer.js";
import thunk from "redux-thunk";
import logger from "redux-logger";


const middlewares = [thunk,logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
