import {connect} from "react-redux";
import {CatalogSelectors as s} from "../../utils/selectors/Catalog.selectors";
import {Catalog} from "./Catalog";
import {catalogActions} from "../../store/Catalog/Catalog.actions";
import {catalogThunks as t} from "../../store/Catalog/Catalog.thunks";
import {useEffect, useState} from "react";
import {catalogFilterThunks} from "../../store/Catalog/Filter/CatalogFilter.thunks";
import {catalogFilterActions} from "../../store/Catalog/Filter/CatalogFilter.actions";
import {set} from "react-hook-form";

const {selectGenre} = catalogFilterActions
const {getAllAvailableData} = catalogFilterThunks
const {getCatalogItems, updateCatalogItems} = t
const {setPage, setCatalogItems} = catalogActions

const mapStateToProps = (state) => ({
    items: s.getCatalogItems(state),
    genres: s.getSelectedGenres(state),
    title: s.getTitle(state),
    type: s.getType(state),
    page: s.getPage(state),
    countOfPageItems: s.getCountOfPageItems(state),
    selectedData: s.getSelectedData(state),
    isFetching: s.getIsFetching(state),
    countOfPages: s.getCountOfPages(state)
})


const CatalogContainer = ({
                              type,
                              getCatalogItems,
                              setPage,
                              setCatalogItems,
                              updateCatalogItems,
                              getAllAvailableData,
                              page,
                              countOfPages,
                              countOfPageItems,
                              ...props
                          }) => {
    useEffect(() => {
        setPage(1)
        getCatalogItems(type, page, countOfPageItems)
        return () => setCatalogItems([])
    }, [type, countOfPageItems, props.selectedData])
    useEffect(() => {
        getAllAvailableData()
    }, [])
    useEffect(() => {
        page > 1 && updateCatalogItems()
    },[page])
    const addItems = () => {
        page !== countOfPages && setPage(page + 1)
    }
    return <Catalog {...props} addItems={addItems}/>
}

export default connect(mapStateToProps, {
    getCatalogItems,
    getAllAvailableData,
    updateCatalogItems,
    setCatalogItems,
    setPage
})(CatalogContainer)
