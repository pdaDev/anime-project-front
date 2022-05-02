
export const textMaxLength = (text, symbolsLimit) => {
    if (text.length > symbolsLimit) {
        let limit = 0
        for (let i = symbolsLimit; i > 0; i--) {
            if (text[i] === ' ') {
                limit = i
                break
            }
        }
        if (!limit)
            return 'undefined text'
        return  [...text].slice(0, limit).join('') + '...'
    } else {
        return text
    }
}