import React from "react";
import styled from "styled-components";


const ErrorMessageStyles = styled.span`
  color: #F43939;
  margin-left: 7px;
  text-align: right;
`
export const ErrorMessage = ({message}) => {
    return (
        <ErrorMessageStyles>
            {message}
        </ErrorMessageStyles>
    )
}