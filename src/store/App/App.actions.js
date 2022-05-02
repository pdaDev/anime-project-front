import types from './App.types'
const setInit = () => ({type: types.SET_INIT})
const toggleReadingStatus = () => ({type: types.TOGGLE_READING_STATUS})

export const appActions = {
    setInit,
    toggleReadingStatus,

}