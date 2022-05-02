import types from './Reader.types'
const initState = {
    pages: [],
    options: {
        readingStyle: 'horizontal',
        typeOfPageInsert: 'window',
        containerWidth: null
    }
}

export const ReaderReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_PAGES: {
            return {
                ...state,
                pages: [...action.payload]
            }
        }
        case types.SET_READING_STYLE: {
            return {
                ...state,
                options: {
                    ...state.options,
                    readingStyle: action.payload
                }
            }
        }
        case types.SET_TYPE_OF_PAGE_INSERT: {
            return {
                ...state,
                options: {
                    ...state.options,
                    typeOfPageInsert: action.payload
                }
            }
        }
        case types.SET_CONTAINER_WIDTH: {
            return  {
                ...state,
                options: {
                    ...state.options,
                    containerWidth: action.payload
                }
            }
        }
        default:
            return state
    }
}