
import {contentAnimeActions} from "./ContentAnime.actions";

import {contentAnimeAPI} from "../../../services/serverAPI/ContentAnimeAPI";
import {ContentAPI} from "../../../services/LocalStorage/ContentAPI";

const getSeriesData = (seriesNumber) => (dispatch) => {
    const data = contentAnimeAPI.getSeriesData(seriesNumber)
    if (data.resultCode === 0) {
        dispatch(contentAnimeActions.setCurrentSeriesData(data.data))
    } else {
        throw new Error()
    }
}
const getAnimeInfo = () => (dispatch) => {
    const data = contentAnimeAPI.getAnimeInfo()
    if (data.resultCode === 0) {
       dispatch(contentAnimeActions.setAnimeInfo(data.data))
    } else {
        throw new Error ()
    }
}

const getCurrentEpisodeNumber = (animeId, seasonId) => (dispatch) => {
    dispatch( contentAnimeActions.setCurrentSeries(ContentAPI.getCurrentEpisodeNumber(animeId, seasonId) ||  1))
}

const getAvailableContent = () => (dispatch) => {
    const data = contentAnimeAPI.getAvailableContent()
    if (data.resultCode === 0) {
        dispatch(contentAnimeActions.setAvailableContent(data.data))
    } else {
        throw new Error()
    }
}

const getRelatedContent = (contentId) => (dispatch) => {
    const data = contentAnimeAPI.getRelatedContent()
    if (data.resultCode === 0) {
        dispatch(contentAnimeActions.setRelatedContent({id: contentId, data: [...data.data]}))
    } else {
        throw new Error()
    }

}
export const contentAnimeThunks = {
    getAnimeInfo,
    getSeriesData,
    getCurrentEpisodeNumber,
    getAvailableContent,
    getRelatedContent
}