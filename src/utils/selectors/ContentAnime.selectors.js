import {createSelector} from "reselect";

const getTitle = (state) => state.anime.animeInfo.title
const getImg = (state) =>  state.anime.animeInfo.img
const getGenres = (state) =>  state.anime.animeInfo.genres
const getDescription = (state) =>  state.anime.animeInfo.description
const getAgeDistinction = (state) =>  state.anime.animeInfo.ageDistinction
const getStudio = (state) =>  state.anime.animeInfo.studio
const getEpisodeDuration = (state) =>  state.anime.animeInfo.episodeDuration
const getRate = (state) =>  state.anime.animeInfo.rate
const getStatus = (state) => state.anime.animeInfo.status
const getMangaId = (state) =>  state.anime.animeInfo.mangaId
const getAnimeInfo = (state) => state.anime.animeInfo
const getCurrentSeries = (state) => state.anime.currentSeries
const getCurrentSeriesData = (state) => state.anime.series
const getAvailableContent  = (state) => state.anime.availableContent
const getCurrentContentTitle = (state) => state.anime.currentContentTitle

export const contentAnimeSelectors = {
    getMangaId,
    getTitle,
    getImg,
    getGenres,
    getDescription,
    getAgeDistinction,
    getStudio,
    getEpisodeDuration,
    getRate,
    getStatus,
    getAnimeInfo,
    getCurrentSeries,
    getCurrentSeriesData,
    getAvailableContent,
    getCurrentContentTitle
}