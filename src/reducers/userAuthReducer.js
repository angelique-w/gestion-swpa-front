import { LOGIN, LOG_OUT } from "./actionTypes";

const initialUserAuthState = {
    user: {},
    isAuth: false,
};

const userAuthReducer = (state = initialUserAuthState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload, isAuth: true };
        case LOG_OUT:
            return initialUserAuthState;
        default:
            return state;
    }
};

export default userAuthReducer;
