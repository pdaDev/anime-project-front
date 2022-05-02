import {API} from "./AxiosInstance";

//const getCatalogItems = (type, genres) => API.get().then(r => r.data)
const getCatalogItems = () => {
    return  {
        data: [
            {
                id: 1,
                description: '',
                genres: [{id: 1, name: 'Сёнэн'}, {id: 2, name: 'Драма'},
                    {id: 3, name: 'Фантастика'}, {id: 4, name: 'Приключения'},
                    {id: 5, name: 'Сэйнен'}, {id: 6, name: 'Ужасы'},
                    {id: 7, name: 'Артхаус'}, {id: 8, name: 'Яой'}],
                title: {ru: 'Атака титанов', eng: 'Attack on titans'},
                ageDistinction: 18,
                img: 'https://static.zerochan.net/104th.Trainees.Squad.full.1779661.jpg',
                rate: 5,
                mangaId: 1,
                content: [{id: 1, title: 'Cезон 1'}, {id: 2, title: 'Cезон 2'}, {id: 3, title: 'Сезон 3'},{id: 4, title: 'Сезон 4.1'}, {id: 5, title: 'Сезон 4.2'}, {id: 6, title: 'Сезон 4.3'}]
            },
            {
                id: 2,
                description: 'Минуло четыре года с тех пор, как члены Разведкорпуса достигли моря. Из дневников Гриши Йегера люди узнали, что всё это время противостояли не только титанам, но и другой нации.\n' +
                    'За морем Марлия заканчивает длительную войну с войсками Средневосточного Альянса. Нация, всегда полагавшаяся на титанов в войне, осознает',
                genres: [{id: 1, name: 'Драма'}, {id: 2, name: "Сёнэн"}],
                title: {ru: 'Евангелион', eng: 'Evangelion'},
                ageDistinction: 18,
                img: 'https://i.pinimg.com/originals/a9/cf/4f/a9cf4feca2fc6fc7c23f6fddf18e2864.jpg',
                rate: 5.0,
                mangaId: null,
                content: [{id: 1, title: 'Сезон 1'}, {id: 2, title: 'Конец Евангелиона'}]
            }
            ,
            {
                id: 3,
                description: '',
                genres:  [{id: 1, name: 'Драма'}, {id: 2, name: "Сёнэн"}],
                title: {ru: 'Клинок рассекающий демонов', eng: 'Demon slayer'},
                ageDistinction: 12,
                img: 'https://diskomir.ru/upload/iblock/d97/d97ef45afe9a52a3c2d8a7d4ea4dcc0b.jpg',
                rate: 5,
                mangaId: 1,
                content: [{id: 1, title: 'Cезон 1'}, {id: 2, title: 'Бесконечный поезд'}, {id: 3, title: 'Cезон 2'}]
            },
            {
                id: 4,
                description: 'Минуло четыре года с тех пор, как члены Разведкорпуса достигли моря. Из дневников Гриши Йегера люди узнали, что всё это время противостояли не только титанам, но и другой нации.\n' +
                    'За морем Марлия заканчивает длительную войну с войсками Средневосточного Альянса. Нация, всегда полагавшаяся на титанов в войне, осознает',
                genres:  [{id: 1, name: 'Драма'}, {id: 2, name: "Сёнэн"}],
                title: {ru: 'Атака титанов', eng: 'Attack on titans'},
                ageDistinction: 16,
                img: 'https://static.zerochan.net/104th.Trainees.Squad.full.1779661.jpg',
                rate: '5.0',
                mangaId: 1,
                content: [{id: 1, title: 'se1'}, {id: 2, title: 'se2'}, {id: 3, title: 'полнометр'}]
            }
        ],
        resultCode: 0
    }

}

const getAvailableFilterData = () => ({
    resultCode: 0,
    data: {
        genres: [{id: 1, name: 'Сэйнен'}, {id: 2, name: 'Сёнен'}, {id: 3, name: 'Драма'},{id: 4, name: 'Детектив'}],
        ageDistinctions: [{id: 1, name: '18+'}, {id: 2, name: '16+'}],
        types: [{id: 1, name: 'Онгоинг'}, {id: 2, name: 'Завершен'}]
    }
})

export const catalogAPI = {
    getCatalogItems,
    getAvailableFilterData
}