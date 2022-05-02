const getAuthStatus = (state) => state.auth.isAuth
const getImg = (state) => state.auth.img

export const authSelectors ={
    getImg,
    getAuthStatus
}