import {connect} from "react-redux";
import {contentMangaSelectors as s} from "../../../utils/selectors/ContentManga.selectors";
import {ContentManga} from "./ContentManga";
import {contentMangaThunks as t} from "../../../store/Content/Manga/ContentManga.thunks";
import {useEffect} from "react";

const {getMangaChapters, getMangaInfo} = t

const mapStateToProps = (state) => ({
    chapters: s.getChapters(state),
    mangaInfo: s.getMangaInfo(state)
})

const ContentMangaContainer = ({getMangaChapters, getMangaInfo, ...props}) => {
    const id = 1
    useEffect(() => {
        getMangaInfo()
        getMangaChapters()
    },[])
    return <ContentManga id={id} {...props}/>
}


export default connect(mapStateToProps, {getMangaChapters, getMangaInfo})(ContentMangaContainer)