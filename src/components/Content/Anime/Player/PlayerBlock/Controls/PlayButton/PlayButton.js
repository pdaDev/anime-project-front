import styled, {css} from "styled-components";
import {EmptyButton} from "../../../../../../../common/UI/Button/EmptyButton.styles";
import React from "react";

const PlayButtonStyles = styled(EmptyButton)`
  width: ${props => props.size || 60}px;
  height: ${props => props.size || 60}px;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transition: 1s;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: ${props => props.isPlay ? 'center' : 'space-between'};

`
const ButtonPart = styled.div`
  display: inline-block;
  height: 100%;
  background: white;;

  clip-path: polygon(${props => props.isPlay ? '0 0, 100% 50%, 100% 50%, 0% 100%' : '0 0, 100% 0, 100% 100%, 0% 100%'});
`
const LeftPart = styled(ButtonPart)`
  transition: 500ms;

  ${props => props.isPlay ? css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  ` : css`
    width: 40%;
  `}
`
const RightPart = styled(ButtonPart)`
  width: 100%;
  transition: 400ms;
  ${props => props.isPlay ? css`
    
    height: 50%;
  ` : css`
    height: 100%;
  `
}
`
const RightPartWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  ${props => props.isPlay ? css`
    width: 50%;
  ` : css`
    width: 40%;
  `
}
`
export const PlayButton = ({isPlay, onClick, size}) => {
    return (
        <PlayButtonStyles size={size} onClick={onClick} isPlay={isPlay}>
            <LeftPart isPlay={isPlay}/>
            <RightPartWrapper isPlay={isPlay}>
                <RightPart isPlay={isPlay}/>
            </RightPartWrapper>

        </PlayButtonStyles>
    )
}