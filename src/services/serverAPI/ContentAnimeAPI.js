import {API} from "./AxiosInstance";

//const getAnimeInfo = (id) => API.get().then(r => r.data)

import video1 from './../../assets/videos/Pexels Videos 2881.mp4'
import video2 from './../../assets/videos/Old Man Walking.mp4'

const getAnimeInfo = () => ({
    resultCode: 0,
    data: {
        title: {
            ru: 'Ты же любишь мамочку, удары которой бьют по площади двойным уроном?',
            eng: 'Attack on titans'
        },
        img: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
        genres: [{id: 1, name: 'Сёнэн'}, {id: 2, name: 'Драма'},
            {id: 3, name: 'Фантастика'}, {id: 4, name: 'Приключения'},
            {id: 5, name: 'Сэйнен'}, {id: 6, name: 'Ужасы'},
            {id: 7, name: 'Артхаус'}, {id: 8, name: 'Яой'}],

        description: ' Минуло четыре года с тех пор, как члены Разведкорпуса достигли моря. Из дневников Гриши Йегера люди узнали, что всё это время противостояли не только титанам, но и другой нации.\n' +
            'За морем Марлия заканчивает длительную войну с войсками Средневосточного Альянса. Нация, всегда полагавшаяся на титанов в войне, осознает, что...',
        ageDistinction: 18,
        studio: 'mappa',
        episodeDuration: '24',
        status: 'онгоинг',
        rate: '4.8',
        mangaId: 1,
        releaseDate: '2013',
        countOfEpisodes: 25
    }
})

const getSeriesData = (seriesNumber) => {

    switch (seriesNumber) {
        case 1: {
            return {
                resultCode: 0,
                data: {
                    title: 'Feelings / Fantasies 2 / Invitation to Lunch / Roasted Potatoes',
                    url: video1,
                    availableVoiceActors: [
                        {id: 1, name: 'Студийная банда'},
                        {id: 2, name: 'DreamCast'},
                        {id: 3, name: 'Анилибрия'}
                    ]
                }
            }
        }
        case 2: {
            return {
                resultCode: 0,
                data: {
                    title: 'Its just the arrival of winter. Plus more.',
                    url: video2,
                    availableVoiceActors: [
                        {id: 1, name: 'Студийная банда'},
                        {id: 2, name: 'DreamCast'},
                        {id: 3, name: 'Анилибрия'}
                    ]
                }
            }
        }
        case 3: {
            return {
                resultCode: 0,
                data: {
                    title: 'ХЕХЕ',
                    url: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
                    availableVoiceActors: [
                        {id: 1, name: 'Студийная банда'},
                        {id: 2, name: 'DreamCast'},
                        {id: 3, name: 'Анилибрия'}
                    ]
                }
            }
        }
        default:
            return {
                resultCode: 0,
                data: {
                    title: 'Боба',
                    url: video2,
                    availableVoiceActors: [
                        {id: 1, name: 'Студийная банда'},
                        {id: 2, name: 'DreamCast'},
                        {id: 3, name: 'Анилибрия'}
                    ]
                }
            }
    }


}


const getAvailableContent = () => ({
    resultCode: 0,
    data: [
        {
            id: 1,
            countOfEpisodes: 24,
            type: 'Сериал',
            title: 'Cезон 1',
            status: 'Вышел',
            rate: 5.0,
            countOfRelatedContent: 0,
            image: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
            dataOfRelease: '2022'
        },
        {
            id: 2,
            countOfEpisodes: 1,
            type: 'Фильм',
            rate: 4.9,
            status: 'онгоинг',
            title: 'Какой-то фильм',
            countOfRelatedContent: 2,
            image: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
            dataOfRelease: '2023'
        },
        {
            id: 3,
            countOfEpisodes: 24,
            type: 'Сериал',
            title: 'Cезон 1',
            status: 'Вышел',
            rate: 5.0,
            countOfRelatedContent: 0,
            image: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
            dataOfRelease: '2022'
        },
        {
            id: 4,
            countOfEpisodes: 1,
            type: 'Фильм',
            rate: 4.9,
            status: 'онгоинг',
            title: 'Какой-то фильм',
            countOfRelatedContent: 2,
            image: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
            dataOfRelease: '2023'
        },
        {
            id: 5,
            countOfEpisodes: 24,
            type: 'Сериал',
            title: 'Cезон 1',
            status: 'Вышел',
            rate: 5.0,
            countOfRelatedContent: 0,
            image: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
            dataOfRelease: '2022'
        },
        {
            id: 2,
            countOfEpisodes: 1,
            type: 'Фильм',
            rate: 4.9,
            status: 'онгоинг',
            title: 'Какой-то фильм',
            countOfRelatedContent: 2,
            image: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
            dataOfRelease: '2023'
        },
        {
            id: 6,
            countOfEpisodes: 24,
            type: 'Сериал',
            title: 'Cезон 1',
            status: 'Вышел',
            rate: 5.0,
            countOfRelatedContent: 0,
            image: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
            dataOfRelease: '2022'
        },
        {
            id: 7,
            countOfEpisodes: 1,
            type: 'Фильм',
            rate: 4.9,
            status: 'онгоинг',
            title: 'Какой-то фильм',
            countOfRelatedContent: 2,
            image: 'https://slovnet.ru/wp-content/uploads/2018/08/10-44.jpg',
            dataOfRelease: '2023'
        }

    ]

})

const getRelatedContent = () => ({
    resultCode: 0,
    data: [
        {
            id: 3,
            type: 'ОВА',
            countOfEpisodes: 1,
            title: 'Кто настрал в шорти',
            dateOfRelease: '1337'

        },
        {
            id: 4,
            type: 'ОВА',
            countOfEpisodes: 1,
            title: 'Кто настрал в шорти',
            dateOfRelease: '1337'
        }
    ]
})

export const contentAnimeAPI = {
    getAnimeInfo,
    getSeriesData,
    getAvailableContent,
    getRelatedContent
}