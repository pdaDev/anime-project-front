import React, {forwardRef, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {PlayerProgressBar} from "./progressBar/PlayerProgressBar";
import {PlayButton} from "./PlayButton/PlayButton";
import {FullScreenButton} from "./FullScreenButton/FullScreenButton";
import {debounce} from "../../../../../../utils/helpers/helpers";

export const ControlsStyles = styled.div`
  opacity: ${props => props.isHidden ? 0 : 1};
  transition: ${props => props.isHidden ? 600 : 100}ms
 
  
`
export const Controls = ({children, isPlay, isHidden, controls}) => {
    return (
        <ControlsStyles ref={controls} isHidden={isHidden && isPlay} >
            {children}
        </ControlsStyles>
    )
}
