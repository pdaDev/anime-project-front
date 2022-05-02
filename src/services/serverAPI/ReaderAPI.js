import {API} from "./AxiosInstance";
const url = 'https://skidka.ua/upload/iblock/eb2/eb286534fbb4dcdfefc0788b1bcfa285.jpg'

const getPages = () => ({
    resultCode: 0,
    data: [
        {id: 1, url: url},
        {id: 2, url: url},
        {id: 3, url: url},
        {id: 4, url: url},
        {id: 5, url: url},
        {id: 6, url: url},
        {id: 7, url: url},
        {id: 8, url: url},
        {id: 9, url: url},
        {id: 10, url: url},


    ]
})

export const ReaderAPI = {
    getPages
}