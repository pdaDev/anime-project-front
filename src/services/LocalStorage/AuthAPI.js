const getToken = () => {
    localStorage.getItem('auth_token')
}

const saveToken = (token) => {
    localStorage.setItem('auth_token', token)
}

const clearToken = () => {
    localStorage.removeItem('auth_token')
}

export const LocalStorageAuthAPI = {
    getToken,
    saveToken,
    clearToken
}
