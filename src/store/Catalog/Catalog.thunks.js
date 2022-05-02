import {catalogAPI} from "../../services/serverAPI/CatalogAPI";
import {catalogActions as a} from "./Catalog.actions";
const getCatalogItems = (type, properties, page, countOfPageItems) => async (dispatch) => {
    //const data = await catalogAPI.getCatalogItems(type, genres)

    const data = catalogAPI.getCatalogItems()
    if (data.resultCode === 0)
    {
        dispatch(a.setCatalogItems(data.data))
    } else {
        throw new Error('Упс! Что-то пошло не так')
    }
}
const updateCatalogItems = (type, properties, page, countOfPageItems) => (dispatch) => {
    dispatch(a.setIsFetching(true))
    const data = catalogAPI.getCatalogItems()
    if (data.resultCode === 0) {
        dispatch(a.updateCatalogItems(data.data))
        dispatch(a.setIsFetching(false))
    } else {
        throw new Error()
    }
}

export const catalogThunks = {
    getCatalogItems,
    updateCatalogItems
}