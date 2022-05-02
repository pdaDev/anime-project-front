import {API} from "./AxiosInstance";

//const getProfileInfo = (id) => API.get().then(r => r.data)
//const getRatingList = (id) => API.get().then(r => r.data)
const getProfileInfo = () => ({
    resultCode: 0,
    data: {
        id: 1,
        img: null,
        nickname: 'NickName',
        countOfTitles: 100,
        favouriteGenre: 'Cэйнен',
        status: 'здесь должен быть ваш статус'
    }


})

const getRatingListItemElements = () => ({
    resultCode: 0,
    data: [
        {id: 1, name: null, type: 'Манга', rate: '5.0'},
        {id: 2, name: null, type: 'Аниме', season: 1, rate: '4.2'},
        {id: 3, name: null, type: 'Аниме', season: 2, rate: '2.0'},
        {id: 4, name: null, type: 'Аниме', season: 3, rate: '1.0'}
    ]
})
const getRatingList = () => ({
    resultCode: 0,
    data: [
        {id: 1, title: 'Токийскй гуль', rate: '4.5'},
        {id: 2, title: 'Магическая битва', rate: '4.5'},
        {id: 3, title: 'Наруто', rate: '4.5'},
        {id: 4, title: 'Атака титанов', rate: '4.5'},
    ]
})

export const profileAPI = {
    getProfileInfo,
    getRatingList,
    getRatingListItemElements
}