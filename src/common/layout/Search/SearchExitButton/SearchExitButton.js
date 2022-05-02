import React from "react";
import styled from 'styled-components'
import {EmptyButton} from "../../../UI/Button/EmptyButton.styles";

const StyledExitButton = styled.div`
  position: relative;
  right: 0;
  bottom: 0;
  background-color: #F43939;
  width: 40px;
  height: 40px;
  text-align: center;
  color: white;
  font-size: 28px;
  user-select: none;
`
export const SearchExitButton = ({handleExit}) => {
    return (
        <EmptyButton onClick={handleExit}>
            <StyledExitButton>✖</StyledExitButton>
        </EmptyButton>
    )
}

