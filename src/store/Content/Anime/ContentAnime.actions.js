
import types from './ContentAnime.types'
const setAnimeInfo = (payload) => ({type: types.SET_ANIME_INFO, payload})
const setCurrentSeries  = (payload) => ({type: types.SET_CURRENT_SERIES_NUMBER, payload})
const setCurrentSeriesData = (payload) => ({type: types.SET_CURRENT_SERIES_DATA, payload})
const setCurrentVoiceActor = (payload) => ({type: types.SET_CURRENT_VOICE_ACTOR, payload})
const setAvailableContent = (payload) => ({type: types.SET_AVAILABLE_CONTENT, payload})
const setRelatedContent = (payload) => ({type: types.SET_RELATED_CONTENT, payload})
const setCurrentContent = (payload) => ({type: types.SET_CURRENT_CONTENT})
export const contentAnimeActions = {
    setAnimeInfo,
    setCurrentSeriesData,
    setCurrentSeries,
    setCurrentVoiceActor,
    setCurrentContent,
    setAvailableContent,
    setRelatedContent
}