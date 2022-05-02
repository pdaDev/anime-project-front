import {contentMangaAPI} from "../../../services/serverAPI/ContenMangaAPI";
import {contentMangaActions} from "./ContentManga.actions";

const getMangaInfo = () => (dispatch) => {
    const data = contentMangaAPI.getMangaInfo()
    if (data.resultCode === 0) {
        dispatch(contentMangaActions.setMangaInfo(data.data))
    } else {
        throw new Error()
    }
}
const getMangaChapters = () => (dispatch) => {
    const data = contentMangaAPI.getMangaChapters()
    if (data.resultCode === 0) {
        dispatch(contentMangaActions.setMangaChapters(data.data))
    } else {
        throw new Error()
    }
}

export const contentMangaThunks = {
    getMangaChapters,
    getMangaInfo
}
