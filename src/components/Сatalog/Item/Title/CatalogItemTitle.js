import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 21px;
  margin-bottom: 5px;
  
`

export const CatalogItemTitle = ({title}) => {
    return (
        <StyledTitle >
            <h3>{title.ru}<span style ={{color: '#8C8C8C'}}> // {title.eng}</span></h3>
        </StyledTitle>
    )
}
