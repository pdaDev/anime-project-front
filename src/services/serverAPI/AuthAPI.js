import {API} from "./AxiosInstance";

const getAuth = () => API.get().then(r => r.data)
const register = (login, password) => API.post('auth/users/',{
    username: login,
    password: password
}).then(r => r.data)

// const register = () => {
//     console.log('reg')
//     return ({data: {},
//     resultCode: 2})
// }
const login = (login, password) => API.get().then(r => r.data)
const logout = () => API.get().then(r => r.data)


export const authAPI = {
    getAuth,
    register,
    logout,
    login
}


