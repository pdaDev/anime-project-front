import React, {useMemo, useState} from "react";
import styled from 'styled-components'
import {RateItem} from "../../../common/UI/Other/RateItem";
import {CatalogItemTitle} from "../../../components/Сatalog/Item/Title/CatalogItemTitle";
import {AgeDistinctionItem} from "../../../common/UI/Other/AgeDistinctionItem";
import {GenreItem} from "../../../common/UI/Other/GenresModule/GenreItem";
import {ContentImage} from "./Image/ContentImage";
import {CombineTitle} from "../../../common/UI/Title/CombineTitle";
import {ContentSpecialInfo} from "../../../components/Content/common/SpecialInfo/ContentSpecialInfo";
import {ContentAnimeWrapper} from "../../../components/Content/Anime/ContentAnimeWrapper";
import {ContentWrapper} from "../../../common/UI/Other/ContentWrapper";
import {CatalogItemMangaIcon} from "../../../components/Сatalog/Item/MangaIcon/CatalogItemMangaIcon";
import {OpenButton} from "../../../common/UI/Button/Open/OpenButton";
import {ExtraInfo} from "../../../components/Content/common/ExtraInfo/ExtraInfo";
import {AnimePlayer} from "../../../components/Content/Anime/Player/AnimePlayer";
import {SeparateLine} from "../../../common/UI/Other/SeparateLine";
import {MakRateItem} from "../../../common/UI/Other/MakeRateItem/MakRateItem";
import {GenresModule} from "../../../common/UI/Other/GenresModule/GenreModule";
import {Flex} from "../../../common/UI/Grid/Flex";
import {Title} from "../../../common/UI/Title/Title";
import {useToggle} from "../../../utils/hooks/useToggle";
import {PortalToMangaButton} from "./portalToManga/portalToMangaButton";
import {
    SpecialInfoAboutMangaChapter
} from "../../../components/Content/Anime/SpecialInfoAboutMangaChapter/SpecialInfoAboutMangaChapter";
import {AnimeContentChooseForm} from "./ContentChooseForm/AnimeContentChooseForm";
import {ContentAgeGenresBLock} from "../Common/ContentAgeGenresBLock";



const Wrapper = styled.div`
    width: 60%;
  background: white;
`
export const ContentAnime = ({
                                 animeInfo,
                                 currentSeries,
                                 currentSeriesData,
                                 setCurrentSeries,
                                 availableContent,
                                 getRelatedContent,
                                 currentContentTitle,
                                 animeId,
                                 contentId
}) => {
    const {
        rate, title, status,
        ageDistinction, genres,
        img, studio, countOfEpisodes,
        episodeDuration, releaseDate,
        description, mangaId,
    } = animeInfo

    const data = useMemo(() => {
        const data = new Map()
        data.set('Дата выхода', releaseDate)
        data.set('Статус', status)
        data.set('Эпизодов', countOfEpisodes)
        data.set('Студия', studio)
        data.set('Длительность', episodeDuration)
        return data
    }, [releaseDate, status, countOfEpisodes, studio, episodeDuration])

    const [isExtraOpen, toggleExtra] = useToggle(false)


    return (
        <>
        <ContentWrapper pTop={'60px'} pBottom={'60px'}>
            <Wrapper>
                <ContentAnimeWrapper>
                    <div style={{position: 'relative'}}>
                        <RateItem rate={rate}/>
                        <ContentImage img={img}/>
                    </div>
                    <div>
                        <Flex alignItems = 'flex-start' justifyContent={'space-between'}>
                            <CombineTitle title={title} size = '37px'/>
                            <CatalogItemMangaIcon id={mangaId} size = {'55px'}/>
                        </Flex>
                        <ContentAgeGenresBLock ageDistinction={ageDistinction} genres={genres}/>

                        <ContentSpecialInfo data={data}/>
                        <ExtraInfo isOpen = {isExtraOpen} toggleOpen ={toggleExtra} description={description}/>
                    </div>
                </ContentAnimeWrapper>
                <SeparateLine mTop={80} height={6} mBottom={10}/>
                <Flex justifyContent={'space-between'} style={{marginBottom: '20px'}}>
                    <Flex style={{position: 'relative'}}>
                        <PortalToMangaButton mangaId={mangaId} chapterNumber={1} size={'50px'}/>
                        <SpecialInfoAboutMangaChapter chapterNumber={'12'}/>
                    </Flex>
                    <Flex>
                        <Title message={'Рейтинг'}
                               size={'42'}
                        />
                        <MakRateItem maxRate={5}
                                     starProperties={{size: '50'}}
                        />
                    </Flex>

                </Flex>

                <AnimePlayer countOfSeries={countOfEpisodes}
                             currentSeries={currentSeries}
                             seriesData={currentSeriesData}
                             setCurrentSeries={setCurrentSeries}
                             ageDistinction={ageDistinction}
                />
            </Wrapper>

        </ContentWrapper>
            <AnimeContentChooseForm content = {availableContent}
                                    currentContentTitle = {currentContentTitle}
                                    getRelatedContent={getRelatedContent}
                                    animeId = {animeId}
                                    contentId={contentId}
            />
            </>

    )
}