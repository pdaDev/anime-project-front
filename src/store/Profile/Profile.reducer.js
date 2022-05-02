import types from './Profile.types'

const initState = {
    id: null,
    profileInfo: {
        nickname: null,
        img: null,
        countOfTitles: null,
        favouriteGenre: null,
        status: null,
    },


    ratingList: []
}

export const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: {...action.payload}
            }
        }
        case types.SET_RATING_LIST: {
            return {
                ...state,
                ratingList: [...action.payload]
            }
        }
        case types.SET_RATING_LIST_ITEMS_ELEMENTS: {
            return {
                ...state,
                ratingList: state.ratingList.map(x => x.id === action.payload.id ? {...x, elements: [...action.payload.data] }: x)
            }
        }
        default:
            return state

    }
}