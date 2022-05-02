import React from "react";
import styled from 'styled-components'
import {textMaxLength} from "../../../../utils/filters/filters";

const StyledDescription = styled.p`
      margin-top: 12px;
    color: #676767;
`
const CatalogItemDescription = ({description, ...props}) => {
    return (
        <StyledDescription {...props}>
            {description}
        </StyledDescription>
    )
}
const CatalogItemDescriptionContainer = ({description, ...props}) => {
    const shortDescription = textMaxLength(description, 350)
    return (
        <CatalogItemDescription description={shortDescription} {...props}/>
    )
}
export default CatalogItemDescriptionContainer