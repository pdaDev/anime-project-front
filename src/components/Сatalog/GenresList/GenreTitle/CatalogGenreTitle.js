import React from "react";
import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: 30px;
  display: inline;
  color: #8144D6;
`
export const CatalogGenresTitle = ({name, commaNeed,...props}) => {
    return (
        <StyledTitle {...props}>
            {name}{commaNeed ? ', ' : null}
        </StyledTitle>
    )
}