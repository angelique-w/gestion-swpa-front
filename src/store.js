import { createStore, combineReducers, applyMiddleware } from "redux";
import userAuthReducer from "./reducers/userAuthReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    combineReducers({ userAuthReducer }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
