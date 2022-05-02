import React from "react";
import styled from 'styled-components'
import {MangaChaptersSet} from './ChaptersSet/MangaChaptersSet'

export const MangaChapterBlock = ({chapters, chaptersRange, mangaId}) => {
    const min = chapters[0]?.number
    const max = chapters[chapters?.length - 1]?.number
    const arraySize = Math.ceil((max - min + 1) / chaptersRange)
    const array = Array.apply(null, new Array(isNaN(arraySize) ? 0 : arraySize))
    return (
        <>
            {array.map((x, i) => {
                    const minLimit = min + i * chaptersRange
                    const maxLimit = i === array.length - 1 ? max : minLimit + chaptersRange - 1
                    const chaptersPiece = chapters.filter((item) => item.number >= minLimit && item.number <= maxLimit)
                    return !chaptersPiece.length ? null : <MangaChaptersSet maxChapter={maxLimit}
                                                                            minChapter={minLimit}
                                                                            chapters={chaptersPiece}
                                                                            mangaId={mangaId}
                    />
                }
            ).reverse()
            }
        </>
    )
}

/**
 */