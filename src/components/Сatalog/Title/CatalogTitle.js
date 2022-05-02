import React from "react";
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 45px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const CatalogTitle = ({title}) => {
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    )
}