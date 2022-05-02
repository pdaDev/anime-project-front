import React from "react";
import styled from "styled-components";
import {EmptyButton} from "../EmptyButton.styles";

const ButtonWrapper = styled(EmptyButton)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  font-size: 37px;
  display: flex;
 
  align-items: center;
  justify-content: center;
  color: #F43939;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`

export const AddCatalogItemsButton = ({handleClick}) => {
    return (
        <ButtonWrapper onClick={handleClick}>
            +
        </ButtonWrapper>
    )
}