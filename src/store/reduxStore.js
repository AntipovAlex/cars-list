import {applyMiddleware, combineReducers, createStore} from "redux";

import {reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import carReduser from "./carReduser";

let RootReduser = combineReducers({
    carPage: carReduser,
    form: formReducer
});

const store = createStore(RootReduser,(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
