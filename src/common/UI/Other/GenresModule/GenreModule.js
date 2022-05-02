import React, {useEffect, useRef, useState} from "react";
import styled, {css} from 'styled-components'
import {GenreItem} from "./GenreItem";
import {Arrow} from "../Arrow";
import {EmptyButton} from "../../Button/EmptyButton.styles";
import {GenresArrowButton} from "./GenresArrowButton";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  transition: 200ms;
  margin-left: 10px;
  box-sizing: border-box;

`
const GenresWrapper = styled.div.attrs(props => ({
    style: {
        left: props.position || 0 + 'px'
    }
}))`
  display: flex;
  height: inherit;
  flex-wrap: nowrap;
  position: absolute;
  z-index: 0;
  transition: 300ms;
  padding-right: 2px;
  box-sizing: border-box;
`
export const GenresModule = ({genres, genreControl}) => {
    const step = 300
    const content = useRef(null)
    const wrapper = useRef(null)

    const [delta, setDelta] = useState(0)
    const [isRightArrow, setRightArrowStatus] = useState(false)
    const [isLeftArrow, setLeftArrowStatus] = useState(false)
    const [position, setPosition] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            const wrapperWidth = wrapper.current?.clientWidth
            const contentWidth = content.current?.clientWidth
            const delta = contentWidth - wrapperWidth
            if (delta > 0) {
                setDelta(delta)
                setRightArrowStatus(true)
            }


        })

    },[genres])

    useEffect(() => {
        setLeftArrowStatus(position < 0)
        setRightArrowStatus(Math.abs(position) !== delta)
    }, [position])

    const positionChange = Math.min(delta + position, step)
    const handleRightButtonClick = () => {
        setPosition(position - positionChange)
    }
    const leftPositinonChange = Math.min(Math.abs(position),  step)
    const handleLeftButtonClick = () => {
        setPosition(p => p + leftPositinonChange)
    }

    return (
        <Wrapper ref={wrapper} >
            {isLeftArrow && <GenresArrowButton handleClick={handleLeftButtonClick} position={'left'}/>}
            <GenresWrapper ref={content} position={position}>
                {genres.map(g => <GenreItem fSize={genreControl?.fSize || '28px'} genre={g.name} key={g.id}/>)}
            </GenresWrapper>
            {isRightArrow && <GenresArrowButton handleClick={handleRightButtonClick} position={'right'}/>}
        </Wrapper>
    )
}

