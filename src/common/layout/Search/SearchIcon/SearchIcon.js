import React from "react";
import styled from 'styled-components'
import {EmptyButton} from "../../../UI/Button/EmptyButton.styles";
import searchIcon from './../../../../assets/icons/search.svg'

const StyledIcon = styled.div`
  display: inline-block;
  position: relative;
  right: 5px;
  width: 28px;
  height: 28px;
`
export const SearchIcon = ({acceptSearch}) => {
    return (
        <EmptyButton onClick={acceptSearch}>
            <StyledIcon>
             <img src={searchIcon}/>
            </StyledIcon>
        </EmptyButton>
    )
}