import React from "react";
import styled, {css} from 'styled-components'
import {EmptyButton} from "../../Button/EmptyButton.styles";
import {Arrow} from "../Arrow";

const WhiteShadow = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 30px 35px #fff;
  width: 15px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  ${({position}) => position === 'right' && css`
  left: 100%;
    transform: translateX(-100%);
  `}
  left: 100%;

  transform: translateX(-100%);
`
const ArrowButtonStyles = styled(EmptyButton)`
  position: absolute;
  z-index: 10;
  height: 100%;
  top: 50%;
  left: ${({position}) => position === 'left' ? 0 : position === 'right' && 100}%;
  transform: translateY(-50%) translateX(${({position}) => position === 'left' ? 0 : position === 'right' && -100}%);
`

export const GenresArrowButton = ({position, handleClick}) => {
    return (
        <ArrowButtonStyles position={position} onClick={handleClick}>
            <Arrow style={{position: 'relative', zIndex: '4'}} size={'25px'} weight={'100'} direction={position}/>
            <WhiteShadow position={position}/>
        </ArrowButtonStyles>
    )
}