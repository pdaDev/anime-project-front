import types from './ContentAnime.types'

const initState = {
    animeInfo: {
        title: {
            ru: null,
            eng: null
        },
        genres: [],
        status: null,
        description: null,
        img: null,
        rate: null,
        studio: null,
        episodeDuration: null,
        ageDistinction: null,
        mangaId: null,
        releaseDate: null,
        countOfEpisodes: null
    },
    currentSeries: null,
    currentVoiceActor: 1,
    series: {
        availableVoiceActors:  [],
        title: null,
        url: null,
    },
    currentContentTitle: null,
    availableContent: []

}

export const ContentAnimeReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_ANIME_INFO: {
            return {
                ...state,
                animeInfo: {...action.payload}
            }
        }
        case types.SET_CURRENT_SERIES_NUMBER: {
            return {
                ...state,
                currentSeries: action.payload
            }
        }
        case types.SET_CURRENT_SERIES_DATA: {
            return {
                ...state,
                series: {
                    ...action.payload
                }
            }
        }
        case types.SET_CURRENT_VOICE_ACTOR: {
            return  {
                ...state,
                currentVoiceActor: action.payload
            }
        }
        case types.SET_CURRENT_CONTENT: {
            return {
                ...state,
                currentContent: action.payload
            }
        }
        case types.SET_AVAILABLE_CONTENT: {
            return  {
                ...state,
                availableContent: [...action.payload]
            }
        }
        case types.SET_RELATED_CONTENT: {
            console.log(action.payload)
            return {
                ...state,
                availableContent: state.availableContent
                    .map(content => content.id === action.payload.id
                        ? {...content,related: [...action.payload.data]}
                        : content
                    )
            }
        }
        default:
            return state
    }
}