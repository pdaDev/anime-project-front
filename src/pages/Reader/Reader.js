import React, {useEffect, useMemo, useRef, useState} from "react";
import styled from "styled-components";
import {EmptyButton} from "../../common/UI/Button/EmptyButton.styles";
import {NavLink, useNavigate} from "react-router-dom";
import {ReaderButton} from "../../components/Reader/Button/ReaderButton";
import {ReaderCanvas} from "../../components/Reader/Canvas/ReaderCanvas";
import {debounce, isMobileDevice} from "../../utils/helpers/helpers";
import {useScrollReflect} from "../../utils/hooks/useScrollRefflect";
import {ReaderMobileNextButton} from "../../components/Reader/MobileNextButton/ReaderMobileNextButton";
import {Flex} from "../../common/UI/Grid/Flex";

const ReaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`
const Header = styled.div`
width: 100%;
  height: 50px;
  z-index: 100;
  background: #C4C4C4;
  position: fixed;
`

export const Reader = ({
                           mangaId,
                           currentChapter,
                           chapters, pages,
                           options,
                           setReadingStyle,
                           setContainerWidth,
                           setTypeOfPageInsert
}) => {

    const [iMobileNextButtonShow, setIsMobileNextButtonShow] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)

    const getChapterIndex = (chapters, number) => {
        return chapters.reduce((index, chapter, i) => chapter.number === +number ? (index = i, index) : index, -1)
    }
    const navigate  = useNavigate()

    const chapterIndex = getChapterIndex(chapters, currentChapter)
    const previousChapter = chapters[chapterIndex - 1]?.number
    const nextChapter = chapters[chapterIndex + 1]?.number
    const goToChapter = (link) => {
        navigate(link)
        setCurrentPage(0)
    }
    const nextChapterButtonLink = () => {
        return nextChapter ? `/reader/${mangaId}/${nextChapter}` : `/content/manga/${mangaId}`
    }
    const previousChapterButtonLink = () => {
        return `/reader/${mangaId}/${previousChapter}`
    }

    const readerRef = useRef(null)
    useEffect(() => {

        const handleKeyDown = e => {
            if (options.readingStyle === 'horizontal') {
                if (e.keyCode === 37) {
                    if (currentPage === 0) {
                        previousChapter && goToChapter(previousChapterButtonLink())
                    } else {
                        setCurrentPage(p => p - 1)
                    }
                }
                if (e.keyCode === 39) {
                    if (currentPage === pages.length - 1 ) {
                        nextChapter && goToChapter(nextChapterButtonLink())
                    } else {
                        setCurrentPage(p => p + 1)
                    }
                }
            } else {
                if (e.keyCode === 37 && previousChapter) {
                    goToChapter(previousChapterButtonLink())
                }
                if ( e.keyCode === 39 && nextChapter) {
                    goToChapter(nextChapterButtonLink())

                }

            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [currentChapter, chapters, currentPage, options])

    const changeReadingStyle = (style) => options.readingStyle !== style && setReadingStyle(style)
    const setHorizontalStyle = () => changeReadingStyle('horizontal')
    const setVerticalStyle = () => changeReadingStyle('vertical')
    const changeTypeOfInsert = (type) => options.typeOfPageInsert !== type && setTypeOfPageInsert(type)
    const setContainerType = () => changeTypeOfInsert('container')
    const setWindowType = () => changeTypeOfInsert('window')
    const handleRangeChange = e => setContainerWidth(e.target.value)

    return (
        <ReaderWrapper ref={readerRef}>

            <Header>
                <Flex>
                    <button onClick={setHorizontalStyle}>горизонтальный</button>
                    <button onClick={setVerticalStyle}>вертикальный</button>
                    <button onClick={setContainerType}>по шиирине контейнера</button>
                    <button onClick={setWindowType}>по высоте экрана</button>
                    {options.typeOfPageInsert === 'container' && <input type={'range'}
                                                                        step={20}
                                                                        min={800}
                                                                        max={window.innerWidth}
                                                                        value={options.containerWidth}
                                                                        onChange={handleRangeChange}
                    />}
                </Flex>
            </Header>





            <ReaderCanvas pages={pages}
                          options={options}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          setContainerWidth = {setContainerWidth}

            />
            <ReaderButton link={`/content/manga/${mangaId}`}
                          message={'title'}
            />
            {previousChapter && <ReaderButton link={previousChapterButtonLink()}
                                              message={'Предыдущая глава'}
            />}
            {isMobileDevice() && iMobileNextButtonShow && nextChapter && <ReaderMobileNextButton nextChapter={nextChapter}
                                                                                                 mangaId={mangaId}
            />}
        </ReaderWrapper>
    )
}


