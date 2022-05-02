import types from "./Auth.types";

const setAuth = (payload) => ({
    type: types.SET_AUTH,
    payload
})
const clearAuth = () => ({
    type: types.CLEAR_AUTH
})
export const authActions = {
    setAuth,
    clearAuth
}