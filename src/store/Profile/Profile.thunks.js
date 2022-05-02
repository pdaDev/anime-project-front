import {profileAPI} from "../../services/serverAPI/ProfileAPI";
import {profileActions as a} from "./Profile.actions";

const getProfileInfo = (id) => async (dispatch) => {
    const data = profileAPI.getProfileInfo(id)
    if (data.resultCode === 0) {
        dispatch(a.setProfileInfo(data.data))
    } else {
        throw new Error('Упс! Что-то пошло не так')
    }
}
const getRatingList = (id) => async (dispatch)  => {
    const data = profileAPI.getRatingList(id)
    if (data.resultCode === 0) {
        dispatch(a.setRatingList(data.data))
    } else {
        throw new Error('Упс! Что-то пошло не так')
    }
}

const getRatingListItemElements = (id) => async (dispatch) => {
    const data = profileAPI.getRatingListItemElements()
    if (data.resultCode === 0) {
        dispatch(a.setRatingListItemsELements({id: id, data: data.data}))
    } else {
        throw new Error()
    }
}

export const profileThunks = {
    getProfileInfo,
    getRatingList,
    getRatingListItemElements
}