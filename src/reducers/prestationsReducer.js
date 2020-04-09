import { SET_PRESTATIONS } from "./actionTypes";

const initialPrestationsState = {
    prestations: [],
};

const prestationsReducer = (state = initialPrestationsState, action) => {
    switch (action.type) {
        case SET_PRESTATIONS:
            return { prestations: action.payload };
        default:
            return state;
    }
};

export default prestationsReducer;
