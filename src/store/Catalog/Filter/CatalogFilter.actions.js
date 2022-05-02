import types from './CatalogFilter.types'


const selectGenre = (payload) => ({type: types.SET_SELECTED_GENRE, payload})
const selectAgeDistinction = (payload) => ({type: types.SET_SELECTED_AGE_DISTINCTION, payload})
const selectType = (payload) => ({type: types.SET_SELECTED_TYPE, payload})
const setAllAvailableData = (payload) => ({type: types.SET_ALL_AVAILABLE_DATA, payload})

export const catalogFilterActions = {
   selectGenre,
    selectType,
    selectAgeDistinction,
    setAllAvailableData
}