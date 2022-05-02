import React from "react";
import styled from "styled-components";
import {EmptyButton} from "../../UI/Button/EmptyButton.styles";
 const HeaderUserIconStyled = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
   cursor: pointer; 
`

export const HeaderUserIcon = ({onClick, ...props}) => {
    return (
        <EmptyButton  onClick = {onClick} tabIndex = {2}>
            <HeaderUserIconStyled tabIndex = {0} {...props} role = 'button'/>
        </EmptyButton>

    )
}
