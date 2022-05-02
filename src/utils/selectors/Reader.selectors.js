
const getReaderState = (state) => state.reader
const getPages = (state) => getReaderState(state).pages
const getOptions = (state) => getReaderState(state).options
export const readerSelectors = {
    getReaderState,
    getPages,
    getOptions

}