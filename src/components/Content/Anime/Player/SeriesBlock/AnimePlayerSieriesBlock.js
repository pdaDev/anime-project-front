import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components'
import {EmptyButton} from "../../../../../common/UI/Button/EmptyButton.styles";
import {SeriesBlockItem} from "./SeriesBlockItem/SeriesBLockItem";
import {useTouch} from "../../../../../utils/hooks/useTouch";
import {set} from "react-hook-form";
import {debounce} from "../../../../../utils/helpers/helpers";

const SeriesBlockWrapper = styled.div`
  background: #282828;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 10px;
  justify-content: space-between;
`
const SeriesWrapper = styled.div.attrs(props => ({
    style: {
        transition: props.isDragging ? 0 : '1s ease',
        transform: `translateX(-${props.position || 0}px)`
    }
}))`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;
`
const ButtonsBlockWrapper = styled.div`

`
const SeriesBlock = styled.div`
  width: ${props => props.width}px;
  height: auto;
  overflow: hidden;
  position: relative;
`

export const AnimePlayerSeriesBlock = ({countOfSeries, currentSeries, setCurrentSeries}) => {

    const sliderLine = useRef()
    const [isDragging, setIsDragging] = useState(false)
    const [touches, setTOuches] = useState(0)
    const countOfVisibleItems = 11
    const itemSize = 85
    const minLeftElements = countOfVisibleItems > 5 ? 2 : 1
    const minRightElements = 2
    const handleLeftButtonClick = () => setPosition(p => p - Math.min(p, countOfVisibleItems * itemSize))
    const handleRightButtonClick = () => setPosition(p => p + itemSize * Math.min(countOfVisibleItems, countOfSeries - p / itemSize - countOfVisibleItems))

    const [position, setPosition] = useState(0)

    const setEpisode = (numberOfEpisode) => {
        setCurrentSeries(numberOfEpisode)
    }

    useEffect(() => {
        const countOfLeftEL = ((currentSeries - 1) * itemSize - position) / itemSize
        const countOfRightEl = countOfVisibleItems - countOfLeftEL - 1
        countOfRightEl < minRightElements && setPosition(p => p + itemSize * Math.min(minRightElements - countOfRightEl, countOfSeries - p / itemSize - countOfVisibleItems))
        countOfLeftEL < minLeftElements && setPosition(p => p - itemSize * (minLeftElements - countOfLeftEL))
    }, [currentSeries])



    return (
        <>
            <SeriesBlockWrapper>
                <SeriesBlock width={itemSize * countOfVisibleItems} ref={sliderLine}>
                    <SeriesWrapper position={position} isDragging={isDragging}>
                        {Array.apply(null, new Array(countOfSeries)).map((item, i) =>
                            <SeriesBlockItem active={i + 1 === currentSeries}
                                             key={i + 1}
                                             disabled={isDragging}
                                             size={itemSize}
                                             clickHandle={() => setEpisode(i + 1)} content={i + 1}/>)}
                    </SeriesWrapper>

                </SeriesBlock>
                <ButtonsBlockWrapper>
                    <SeriesBlockItem content={'˂'}
                                     clickHandle={handleLeftButtonClick}
                                     size={itemSize}
                    />
                    <SeriesBlockItem content={'˃'}
                                     size={itemSize}
                                     clickHandle={handleRightButtonClick}
                    />
                </ButtonsBlockWrapper>
            </SeriesBlockWrapper>
        </>
    )
}

/**
 *  <SeriesWrapper position={position} ref={content}>
 *                         {Array.apply(null, new Array(countOfSeries)).map((item, i) =>
 *                             <SeriesBlockItem active={i + 1 === currentSeries}
 *                                              size={itemSize}
 *                                              clickHandle={() => setSeries(i + 1)} content={i + 1}/>)}
 *                     </SeriesWrapper>
 *
 *
 *                      <SeriesBlockItem content={'˂'}
 *                                      clickHandle={handleLeftButtonClick}
 *                                      marginRight={'10'}
 *                                      size={itemSize}
 *                     />
 *                     <SeriesBlockItem content={'˃'}
 *                                      size={itemSize}
 *                                      clickHandle={handleRightButtonClick}
 *                     />
 *
 *
 *
 *
 *  useEffect(() => {
 *         let x
 *         const dragStop = e => {
 *             console.log('stop')
 *             sliderLine.current?.removeEventListener('pointermove', dragMove)
 *
 *             setIsDragging(false)
 *             setTOuches(touches + 1)
 *             setPosition(pos => {
 *                 const countOfEl = pos / itemSize
 *                 let shift = (countOfEl - Math.floor(countOfEl)) * itemSize
 *                 shift = shift > itemSize / 2 ? itemSize - shift : -shift
 *                 return pos + shift
 *             })
 *
 *         }
 *         const dragMove = e => {
 *             setIsDragging(true)
 *             const shift = e.pageX - x
 *             const newPos = position - shift
 *             newPos < (countOfSeries - countOfVisibleItems) * itemSize && setPosition(newPos)
 *
 *         }
 *
 *         const dragStart = e => {
 *             console.log('start')
 *             x = e.pageX
 *             sliderLine.current?.addEventListener('pointermove', dragMove)
 *         }
 *         sliderLine.current?.addEventListener('pointerdown', dragStart)
 *         document.addEventListener('pointerup', dragStop)
 *         return () => {
 *             sliderLine.current?.removeEventListener('pointerdown', dragStart)
 *             document.removeEventListener('pointerup', dragStop)
 *         }
 *     }, [touches])
 *     useEffect(() => {
 *         setTimeout(() => setTOuches(1))
 *     })
 *                     */
