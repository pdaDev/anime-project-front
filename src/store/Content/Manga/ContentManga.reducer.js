import types from './ContentManga.types'

const initState = {
    mangaInfo: {
        title: {
            ru: null,
            eng: null
        },
        genres: [],
        status: null,
        description: null,
        img: null,
        rate: null,
        author: null,
        ageDistinction: null,
        animeId: null,
        releaseDate: null,
    },
    chapters: []
}


export const MangaReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_MANGA_CHAPTERS: {
            return {
                ...state,
                chapters: [...action.payload]
            }
        }
        case types.SET_MANGA_INFO: {
            return {
                ...state,
                mangaInfo: {
                    ...action.payload
                }
            }
        }
        default: {
            return state
        }
    }
}