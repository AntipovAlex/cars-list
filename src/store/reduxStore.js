import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import {reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import carReduser from "./carReduser";

let RootReduser = combineReducers({
    carPage: carReduser,
    form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReduser,composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
