import React from "react";
import {EmptyButton} from "../EmptyButton.styles";
import editIcon from './../../../../assets/icons/edit.svg'
import styled from "styled-components";


const StyledButtonIcon = styled.img`
    width: 27px;
  height: 27px;
`
export const EditButton = ({handleClick}) => {
    return (
        <EmptyButton onClick={handleClick}>
            <StyledButtonIcon src={editIcon}/>
        </EmptyButton>
    )
}