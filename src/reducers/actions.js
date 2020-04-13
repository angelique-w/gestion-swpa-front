import { LOGIN, LOG_OUT, SET_PRESTATIONS } from "./actionTypes";

export const storeUserAuth = (user) => (dispatch) => {
    dispatch({ type: LOGIN, payload: user });
    sessionStorage.setItem("user", user);
    return;
};

export const removeUserAuth = () => (dispatch) => {
    dispatch({ type: LOG_OUT });
    sessionStorage.clear("user");
    return;
};

export const setPrestations = (prestations) => (dispatch) => {
    return dispatch({ type: SET_PRESTATIONS, payload: prestations });
};
