const getCurrentEpisodeNumber = (animeId, seasonId) => {
    return localStorage.getItem(`anime-${animeId}-season-${seasonId}`)
}

const setCurrentEpisodeNumber = (number, animeId, seasonId) => {
    localStorage.setItem(`anime-${animeId}-season-${seasonId}`, number)
}

const getCurrentChapterNumber = (mangaId) => {
    return localStorage.getItem(`manga-${mangaId}`)
}

const setCurrentChapterNumber = (mangaId, number) => {
    localStorage.setItem(`manga-${mangaId}`, number)
}

export const ContentAPI = {
    getCurrentEpisodeNumber,
    getCurrentChapterNumber,
    setCurrentChapterNumber,
    setCurrentEpisodeNumber
}