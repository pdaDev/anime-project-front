import {catalogFilterActions as a} from "./CatalogFilter.actions";
import {catalogAPI} from "../../../services/serverAPI/CatalogAPI";
import {addCheckedProperty, addCheckedPropertyForObject} from "../../../utils/helpers/helpers";


const getAllAvailableData = () => (dispatch) => {
    const data = catalogAPI.getAvailableFilterData()
    const {resultCode, data: availableData} = data
    if (data.resultCode === 0) {
        dispatch(a.setAllAvailableData(addCheckedPropertyForObject(availableData)))
    } else {
        throw new Error()
    }
}

export const catalogFilterThunks = {
 getAllAvailableData
}