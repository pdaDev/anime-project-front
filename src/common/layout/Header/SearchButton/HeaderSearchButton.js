import React from "react";
import styled, {css} from "styled-components";
import searchIcon from './../../../../assets/icons/white_search.svg'
import {EmptyButton} from "../../../UI/Button/EmptyButton.styles";

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  transition: 300ms;
  cursor: pointer;
  &:hover {
    width: 35px;
    height: 35px;
  }
  
 
`
export const HeaderSearchButton = ({handleClick}) => {
    return (
        <EmptyButton onClick = {handleClick} tabIndex={0}>
            <StyledIcon src={searchIcon}/>
        </EmptyButton>
    )
}