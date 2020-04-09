import { createStore } from "redux";
import prestationsReducer from "./reducers/prestationsReducer";

const store = createStore(
    prestationsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
