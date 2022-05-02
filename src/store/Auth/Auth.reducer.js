import types from "./Auth.types";
const initState = {
    id: null,
    img: null,
    isAuth: true
}


export const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_AUTH:
            return {
                ...state,
                ...action.payload,
                isAuth: true
        }
        case types.CLEAR_AUTH: {
            return {
                ...state,
                ...initState
            }
        }
        default:
            return state
    }
}

