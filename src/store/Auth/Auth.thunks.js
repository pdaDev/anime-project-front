import {authAPI} from "../../services/serverAPI/AuthAPI";
import {authActions} from "./Auth.actions";
import {LocalStorageAuthAPI} from "../../services/LocalStorage/AuthAPI";

const getAuth = () => async (dispatch) => {
    const data =  await authAPI.getAuth()
    if (data.resultCode === 0) {
        const {id, img} = data
        dispatch(authActions.setAuth(id, img))
    }
}

const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(authActions.clearAuth())
        LocalStorageAuthAPI.clearToken()

    }
}
const login = (login, password) => async (dispatch) => {
    const data = {resultCode: 1}
    LocalStorageAuthAPI.saveToken(data.auth_token)
    return data
}
const register = (login, password) => async (dispatch) => {
    const data = authAPI.register(login, password)
    return data.resultCode
}

export const authThunks = {
    getAuth,
    login,
    logout,
    register
}