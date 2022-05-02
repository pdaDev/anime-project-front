import types from './CatalogFilter.types'
import {addCheckedProperty} from "../../../utils/helpers/helpers";
import {type} from "@testing-library/user-event/dist/type";


const initState = {
    genres: [],
    ageDistinctions: [],
    types: [],
}

export const CatalogFilterReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_ALL_AVAILABLE_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case types.SET_SELECTED_GENRE: {
            return {
                ...state,
                genres: state.genres.map(item => item.id === action.payload ? {...item, checked: !item.checked} : item)
            }
        }
        case types.SET_SELECTED_TYPE: {
            return {
                ...state,
                types: state.types.map(item => item.id === action.payload ? {...item, checked: !item.checked} : item)
            }
        }
        case types.SET_SELECTED_AGE_DISTINCTION: {
            return {
                ...state,
                ageDistinctions: state.ageDistinctions.map(item => item.id === action.payload ? {
                    ...item,
                    checked: !item.checked
                } : item)
            }
        }

        default:
            return state
    }
}