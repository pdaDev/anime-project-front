import React from "react";
import {CatalogSelectors as s} from "../../../utils/selectors/Catalog.selectors";
import {connect} from "react-redux";
import {CatalogFilterForm} from "./CatalogFilterForm";
import {catalogFilterActions as a} from "../../../store/Catalog/Filter/CatalogFilter.actions";
import {catalogActions} from "../../../store/Catalog/Catalog.actions";
const {setCheckedData} = catalogActions
const {selectType, selectGenre, selectAgeDistinction} = a
const mapStateToProps = (state) => ({
    data: s.getAvailableData(state)
})


export default connect(mapStateToProps, {
    selectType,
    selectGenre,
    selectAgeDistinction,
    setCheckedData
})(CatalogFilterForm)