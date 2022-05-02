import React from "react";
import styled, {css} from "styled-components";
import {EmptyButton} from "../../../../../../../common/UI/Button/EmptyButton.styles";

const ButtonWrapper = styled(EmptyButton)`
  min-width: 300px;
  height: 60px;
  padding: 0 20px;
  border: 3px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  position: absolute;
  bottom: 110px;
  color: white;
  ${props => props.position === 'left' ? css`
  left: 2.5%
  ` : css `
  right: 2.5%`
}
  `

export const PLayerCommonButton = ({message, ...props}) => {
    return (
        <ButtonWrapper {...props} >
            {message}
        </ButtonWrapper>
    )
}