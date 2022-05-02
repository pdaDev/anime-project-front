import React, {useEffect} from "react";
import {appActions} from "../../store/App/App.actions";
import {Reader} from "./Reader";
import {contentMangaSelectors} from "../../utils/selectors/ContentManga.selectors";
import {connect} from "react-redux";
import {readerThunks} from "../../store/Reader/Reader.thunks";
import {readerSelectors} from "../../utils/selectors/Reader.selectors";
import {useParams} from "react-router-dom";
import {contentMangaThunks} from "../../store/Content/Manga/ContentManga.thunks";
import {readerActions} from "../../store/Reader/Reader.actions";

const {getPages} = readerThunks
const {getMangaChapters} = contentMangaThunks
const {setReadingStyle, setContainerWidth, setTypeOfPageInsert} = readerActions


const {toggleReadingStatus} = appActions
const mapStateToProps = (state) => ({
    chapters: contentMangaSelectors.getChapters(state),
    pages: readerSelectors.getPages(state),
    options: readerSelectors.getOptions(state)
})
const ReaderContainer = ({toggleReadingStatus, getPages, getMangaChapters, ...props}) => {
    const {mangaId, chapterId} = useParams()
    useEffect(() => {
        getMangaChapters()
        toggleReadingStatus()
        return () => {
            toggleReadingStatus()
        }
    }, [])
    useEffect(() => {
        getPages()
    }, [chapterId])
    return (
        <Reader {...props}
                currentChapter={chapterId}
                mangaId={mangaId}
        />
    )
}

export default connect(mapStateToProps,
    {
        toggleReadingStatus,
        setReadingStyle,
        getPages,
        getMangaChapters,
        setContainerWidth,
        setTypeOfPageInsert
    })(ReaderContainer)