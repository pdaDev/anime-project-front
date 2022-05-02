import types from './App.types'

const initState = {
    isInit: false,
    isReading: false,
}


export const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_INIT: {
            return {
                ...state,
                isInit: true
            }
        }
        case types.TOGGLE_READING_STATUS: {
            return {
                ...state,
                isReading: !state.isReading
            }
        }
        default:
            return state
    }
}