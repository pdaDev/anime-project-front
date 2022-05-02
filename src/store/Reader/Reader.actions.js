import types from './Reader.types'

const setPages = (payload) => ({type: types.SET_PAGES, payload})
const setReadingStyle = (payload) => ({type: types.SET_READING_STYLE, payload})
const setTypeOfPageInsert = (payload) => ({type: types.SET_TYPE_OF_PAGE_INSERT, payload})
const setContainerWidth = (payload) => ({type: types.SET_CONTAINER_WIDTH, payload})
export const readerActions = {
    setPages,
    setReadingStyle,
    setTypeOfPageInsert,
    setContainerWidth
}