const getId = (state) => state.profile.id
const getOwnerId = (state) => state.auth.id
const getImg = (state) => state.profile.img
const getFavouriteGenre = (state) => state.profile.favouriteGenre
const getStatus = (state) => state.profile.status
const getRatingList = (state) => state.profile.ratingList
const getNickname = (state) => state.profile.nickname
const getCountOfTitles = (state) => state.profile.countOftitles
const getProfileInfo = (state) => state.profile.profileInfo

export const profileSelectors = {
    getId,
    getOwnerId,
    getRatingList,
    getProfileInfo
}