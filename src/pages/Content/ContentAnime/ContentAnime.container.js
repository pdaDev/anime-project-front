import {connect} from "react-redux";
import {contentAnimeSelectors as s} from "../../../utils/selectors/ContentAnime.selectors";
import {contentAnimeThunks as t} from "../../../store/Content/Anime/ContentAnime.thunks";
import {contentAnimeActions} from "../../../store/Content/Anime/ContentAnime.actions";

import {ContentAnime} from "./ContentAnime";
import {useEffect} from "react";
const {getAnimeInfo, getSeriesData, getCurrentEpisodeNumber, getAvailableContent, getRelatedContent} = t
const {setCurrentSeries} = contentAnimeActions

const ContentAnimeContainer = ({
                                   getAnimeInfo,
                                   getSeriesData,
                                   getCurrentEpisodeNumber,
                                   getAvailableContent,
                                   ...props}) => {
    const contentId = 1
    const animeId = 1
    useEffect(() => {
        getAnimeInfo()
        getCurrentEpisodeNumber()
    },[])
    useEffect(() => {
        props.currentSeries && getSeriesData(props.currentSeries)
    },[props.currentSeries])
    useEffect(() => {
        getAvailableContent()
    }, [])
    return (
        <ContentAnime {...props}
                      contentId={contentId}
                      animeId={animeId}
        />
    )
}




const mapStateToProps = (state) => ({
    animeInfo: s.getAnimeInfo(state),
    currentSeries: s.getCurrentSeries(state),
    currentSeriesData: s.getCurrentSeriesData(state),
    availableContent: s.getAvailableContent(state),
    currentContentTitle: s.getCurrentContentTitle(state)
})

export default connect(mapStateToProps, {
    getAnimeInfo,
    getSeriesData,
    setCurrentSeries,
    getCurrentEpisodeNumber,
    getRelatedContent,
    getAvailableContent
})(ContentAnimeContainer)
