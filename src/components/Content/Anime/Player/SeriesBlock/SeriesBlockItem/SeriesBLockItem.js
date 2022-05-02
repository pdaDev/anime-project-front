import styled from "styled-components";
import React from "react";
import {EmptyButton} from "../../../../../../common/UI/Button/EmptyButton.styles";
const SeriesBlockItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 3px solid white;
  font-size: 36px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({active}) => active && '#FF4940'};
  transition: 200ms;
  user-select: none;
`
const ButtonWrapper = styled(EmptyButton)`
  display: inline-block;
  min-width: ${props => props.size}px;
  min-height: ${props => props.size}px;
  padding: 10px;
  box-sizing: border-box;
`


export const SeriesBlockItem = ({disabled,content, clickHandle, size, ...props}) => {
    return (
        <ButtonWrapper disabled={disabled}  onClick={clickHandle} size={size}>
            <SeriesBlockItemWrapper {...props}>
                {content}
            </SeriesBlockItemWrapper>
        </ButtonWrapper>

    )
}