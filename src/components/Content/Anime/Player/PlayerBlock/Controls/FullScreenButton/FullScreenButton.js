import React, {useState} from "react";
import styled from "styled-components";
import {EmptyButton} from "../../../../../../../common/UI/Button/EmptyButton.styles";
import spreadIcon from './../../../../../../../assets/icons/spread_icon.svg'
import closeIcon from './../../../../../../../assets/icons/close_fullscreen.svg'

const Wrapper = styled(EmptyButton)`
  
  width: 40px;
  height: 40px;
  outline: none;
  background: ${props => props.isFullScreen ? `url(${closeIcon})` : `url(${spreadIcon})`} center no-repeat;
`

export const FullScreenButton = ({isFullScreen, toggleFullScreen, wrapper}) => {

    return (
        <Wrapper title={'[ f ]'}
                 isFullScreen={isFullScreen}
                 onClick={(e) => toggleFullScreen()}
        >
        </Wrapper>
    )

}