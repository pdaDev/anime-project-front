import types from './ContentManga.types'

const setMangaChapters = (payload) => ({type: types.SET_MANGA_CHAPTERS, payload})
const setMangaInfo = (payload) => ({type: types.SET_MANGA_INFO, payload})
export const contentMangaActions = {
    setMangaChapters,
    setMangaInfo
}