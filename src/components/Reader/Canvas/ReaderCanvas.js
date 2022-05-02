import styled from "styled-components";
import {MangaPage} from "./Page/ReaderMangaPage";
import {useEffect, useMemo, useRef, useState} from "react";
import {ReaderPageCounter} from "./PageCounter/ReaderPageCounter";
import {debounce} from "../../../utils/helpers/helpers";
import {Flex} from "../../../common/UI/Grid/Flex";
import preloader from './../../../assets/icons/preloader_video.svg'

const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
`

export const ReaderCanvas = ({pages, options, currentPage, setCurrentPage, setContainerWidth}) => {
    const countOfPages = pages.length
    const step = 5
    const isHorizontalStyle = options.readingStyle === 'horizontal'
    const isVerticalStyle = options.readingStyle === 'vertical'
    const [availablePages, setAvailablePages] = useState(5)


    const setNextPage = () => {
        const nextPage = currentPage + 1
        pages[nextPage] && setCurrentPage(nextPage)
    }
    const setPreviousPage = () => {
        const previousPage = currentPage - 1
        previousPage >= 0 && setCurrentPage(previousPage)
    }
    const page = useRef(null)
    const Pages = pages.map((page, i) => <MangaPage
        key={page.id}
        pageUrl={i < availablePages ? page.url : preloader}
        typeOfInsert={options.typeOfPageInsert}
    />)

    const updatePages = () => {
        setAvailablePages(p => p + step)
    }

    const kef = 0.8
    const setPage = (pageNumber) => {
        const necessaryScroll = pageSizes.height * ( pageNumber - 1)
        if (isVerticalStyle) {
            window.scroll({
                top:  necessaryScroll,
                left: 0
            })
        } else {
            setCurrentPage(pageNumber - 1)
        }


    }
    const [pageSizes, setSize] = useState()
    useEffect(() => {
        setSize((page.current?.children[0]?.getBoundingClientRect() ))
    },[options, page])
    useEffect(() => {

        if (isVerticalStyle) {

            const handleScroll = e => {
                const pageHeight = pageSizes?.height
                const scrolled = e.target.documentElement.scrollTop
                const pageNumber = Math.floor((scrolled + window.innerHeight / 2 ) / pageHeight + 1)
                availablePages - pageNumber <= 1 && updatePages()
                setCurrentPage(pageNumber - 1)

            }
            const debouncedhandleScroll = debounce(handleScroll, 50)
            window.addEventListener('scroll', debouncedhandleScroll)
            return () => window.removeEventListener('scroll', debouncedhandleScroll)
        }
         else  {
             window.scroll({
                 top: 0,
                 left: 0
             })
        }
    },  [availablePages, pageSizes])
    useEffect(() => isVerticalStyle && setPage(currentPage + 1),[isVerticalStyle])
    useEffect(() => {
        options.typeOfPageInsert === 'window' && setContainerWidth(pageSizes?.width)
    },[options.typeOfPageInsert, pageSizes?.width])


    return (
        <Wrapper>
            <Flex>
                <div ref={page} style={{width: `${options.typeOfPageInsert === 'container' ? options.containerWidth + 'px' : 'auto'}`}}>
                    {isHorizontalStyle && <MangaPage pageUrl={pages[currentPage]?.url}
                                                     typeOfInsert={options.typeOfPageInsert}

                    />
                    }

                    {isVerticalStyle && Pages}
                </div>
            </Flex>


            <ReaderPageCounter currentPage={currentPage + 1}
                               countOfPages={countOfPages}
                               setPage={setPage}
            />
            <button onClick={setPreviousPage}>предыдущая страница</button>
            <button onClick={setNextPage}>следущая страница</button>
        </Wrapper>
    )
}



