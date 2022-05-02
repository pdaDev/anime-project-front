import {createSelector} from "reselect";
import {get} from "react-hook-form";

const getCatalogItems = (state) => {
    return state.catalog.items
}
const getPage = (state) => state.catalog.page
const getCountOfPageItems = (state) => state.catalog.countOfPageItems
const getType = (state) => state.catalog.type

const getTitle = (state) => state.catalog.title
const getAvailableData = (state) => state.catalogFilter

const getSelectedGenres = (state) => state.catalog.selectedData.genres
const getSelectedData = (state) => state.catalog.selectedData

const getIsFetching = (state) => state.catalog.isFetching
const getCountOfPages = (state) => state.catalog.countOfPages

export const CatalogSelectors = {
    getCatalogItems,
    getSelectedGenres,
    getTitle,
    getType,
    getCountOfPageItems,
    getPage,
    getAvailableData,
    getSelectedData,
    getIsFetching,
    getCountOfPages
}