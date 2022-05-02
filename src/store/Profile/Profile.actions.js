import types from './Profile.types'
const setProfileInfo = (payload) => ({type: types.SET_PROFILE_INFO, payload})
const setRatingList = (payload) => ({type: types.SET_RATING_LIST, payload})
const setRatingListItemsELements = (payload) => ({type: types.SET_RATING_LIST_ITEMS_ELEMENTS, payload})

export const profileActions = {
    setProfileInfo,
    setRatingList,
    setRatingListItemsELements
}