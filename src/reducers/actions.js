import { SET_PRESTATIONS } from "./actionTypes";

export const setPrestations = (prestations) => (dispatch) => {
    return dispatch({ type: SET_PRESTATIONS, payload: prestations });
};
