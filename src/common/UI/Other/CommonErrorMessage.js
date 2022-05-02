import React from "react";
import styled from 'styled-components'

const StyledErrorMessage = styled.div`
  border: 2px solid #F43939;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 22px;
  color: #F43939;
  box-sizing: border-box;
`
export const CommonErrorMessage = ({message}) => {
    return (
        <StyledErrorMessage>
            {message}
        </StyledErrorMessage>
    )
}