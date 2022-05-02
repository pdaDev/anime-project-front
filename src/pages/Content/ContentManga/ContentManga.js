import React, {useMemo, useState} from "react";
import styled from "styled-components";
import {MangaChapterBlock} from "../../../components/Content/Manga/ChaptersBlock/MangaChapterBlock";
import {ContentWrapper} from "../../../common/UI/Other/ContentWrapper";
import {ContentAnimeWrapper} from "../../../components/Content/Anime/ContentAnimeWrapper";
import {RateItem} from "../../../common/UI/Other/RateItem";
import {ContentImage} from "../ContentAnime/Image/ContentImage";
import {CombineTitle} from "../../../common/UI/Title/CombineTitle";
import {Flex} from "../../../common/UI/Grid/Flex";
import {AgeDistinctionItem} from "../../../common/UI/Other/AgeDistinctionItem";
import {GenresModule} from "../../../common/UI/Other/GenresModule/GenreModule";
import {ContentSpecialInfo} from "../../../components/Content/common/SpecialInfo/ContentSpecialInfo";
import {ExtraInfo} from "../../../components/Content/common/ExtraInfo/ExtraInfo";
import {useToggle} from "../../../utils/hooks/useToggle";
import {SeparateLine} from "../../../common/UI/Other/SeparateLine";
import {Title} from "../../../common/UI/Title/Title";
import {MakRateItem} from "../../../common/UI/Other/MakeRateItem/MakRateItem";
import {SearchInput} from "../../../common/UI/Input/SearchInput/SearchInput";
import {CatalogItemMangaIcon} from "../../../components/Сatalog/Item/MangaIcon/CatalogItemMangaIcon";
import animeIcon from './../../../assets/icons/video-svgrepo-com.svg'
import {MangaStartReadingButtons} from "../../../components/Content/Manga/StartReadingButton/MangaStartReadingButton";
import {ContentAgeGenresBLock} from "../Common/ContentAgeGenresBLock";

const Wrapper = styled.div`
  width: 60%;
`

export const ContentManga = ({id, chapters, mangaInfo}) => {
    const {
        rate, title, status,
        ageDistinction, genres,
        img, author,
        releaseDate,
        description, animeId
    } = mangaInfo

    const data = useMemo(() => {
        const data = new Map()
        data.set('Дата выхода', releaseDate)
        data.set('Статуст', status)
        data.set('Глав', chapters.length)
        data.set('Автор', author)
        return data
    }, [releaseDate, status, author, chapters])

    const [isExtraOpen, toggleExtra] = useToggle(false)
    const [chapterNumber, setChapterNumber] = useState(null)
    return (
        <ContentWrapper pTop={'60px'} pBottom={'60px'}>
            <Wrapper>
                <ContentAnimeWrapper>
                    <div style={{position: 'relative'}}>
                        <RateItem rate={rate}/>
                        <ContentImage img={img}>
                            <MangaStartReadingButtons lastChapter={chapters[chapters.length - 1]?.number}
                                                      firstChapter={chapters[0]?.number}
                                                      mangaId={id}
                            />
                        </ContentImage>

                    </div>
                    <div>
                        <Flex alignItems='flex-start' justifyContent={'space-between'}>
                            <CombineTitle title={title} size='37px'/>
                            <CatalogItemMangaIcon id={animeId}
                                                  type={'anime'}
                                                  size={'55px'}
                                                  icon={animeIcon}
                            />
                        </Flex>

                        <ContentAgeGenresBLock ageDistinction={ageDistinction} genres={genres}/>
                        <ContentSpecialInfo data={data}/>
                        <ExtraInfo isOpen={isExtraOpen} toggleOpen={toggleExtra} description={description}/>
                    </div>
                </ContentAnimeWrapper>
                <SeparateLine mTop={80} height={6} mBottom={30}/>
                <Flex justifyContent={'flex-start'} style={{marginBottom: '20px'}}>
                    <Title message={'Рейтинг'}
                           size={'42'}
                    />
                    <MakRateItem maxRate={5}
                                 starProperties={{size: '50'}}
                    />
                </Flex>
                <Flex justifyContent={'flex-start'} style={{marginBottom: '30px'}}>
                    <Title message={'Оглавление'}
                           size={'42'}
                    />
                    <SearchInput value={chapterNumber}
                                 placeholder={'Номер главы...'}
                                 handleChange={(e) => setChapterNumber(e.target.value)}
                                 chapters={chapters}
                                 mangaId={id}
                    />

                </Flex>
                <MangaChapterBlock mangaId={id} chapters={chapters} chaptersRange={5}/>
            </Wrapper>

        </ContentWrapper>
    )
}