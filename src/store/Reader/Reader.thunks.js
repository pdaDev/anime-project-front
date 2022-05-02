import {readerActions} from "./Reader.actions";
import {ReaderAPI} from "../../services/serverAPI/ReaderAPI";

const getPages = () => async (dispatch) => {
    const data = ReaderAPI.getPages()
    if (data.resultCode === 0) {
        dispatch(readerActions.setPages(data.data))
    } else {
        throw new Error()
    }
}
export const readerThunks = {
    getPages
}