import types from './Catalog.types'

const setCatalogItems = (payload) => ({type: types.SET_CATALOG_ITEMS, payload})
const setNovelties= () => (
    {
        type: types.SET_NOVELTIES,
        title: 'Новинки',
        catalogType: 'novelties'
    })

const setPopulars = () => (
    {
        type: types.SET_NOVELTIES,
        title: 'Популярное',
        catalogType: 'populars'
    })
const setIsFetching = (payload) => ({type: types.SET_IS_FETCHING, payload})
const setPage = (page) => ({type: types.SET_PAGE, page})
const setCountOfPageItems = (count) => ({type: types.SET_COUNT_OF_PAGE_ITEMS, count})
const updateCatalogItems = (payload) => ({type: types.UPDATE_CATALOG_ITEMS, payload})
const setCheckedData = (payload) => ({type: types.SET_CHECKED_PROPERTIES, payload})
export const catalogActions = {
    setCatalogItems,
    setNovelties,
    setPopulars,
    setPage,
    setCountOfPageItems,
    updateCatalogItems,
    setCheckedData,
    setIsFetching
}