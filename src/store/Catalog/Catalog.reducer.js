import types from './Catalog.types'

const initState = {
    page: 1,
    countOfPages: 10,
    countOfPageItems: 10,
    selectedData: {
        genres: [],
        ageDistinctions: [],
        types: []
    },
    title: 'Популярное',
    type: 'POPULARS',
    items: [],
    isFetching: false
}

export const CatalogReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case types.SET_CATALOG_ITEMS: {
            return {
                ...state,
                items: [...action.payload]
            }
        }
        case  types.SET_POPULARS: {
            return {
                ...state,
                title: action.title,
                type: action.catalogType
            }
        }
        case types.SET_NOVELTIES: {
            return {
                ...state,
                title: action.title,
                type: action.catalogType
            }
        }
        case types.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case types.SET_COUNT_OF_PAGE_ITEMS: {
            return {
                ...state,
                countOfPageItems: action.count
            }
        }
        case types.UPDATE_CATALOG_ITEMS: {
            return {
                ...state,
                items: [...state.items, ...action.payload]
            }
        }
        case types.SET_CHECKED_PROPERTIES: {
            return {
                ...state,
                selectedData: {
                    ...action.payload
                }
            }
        }

        default:
            return state
    }

}