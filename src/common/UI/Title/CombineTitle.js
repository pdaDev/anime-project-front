import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: ${props => props.size || '21px'};
  margin-bottom: 12px;
`

export const CombineTitle = ({title, ...props}) => {
    return (
        <StyledTitle {...props} >
            <h3>{title.ru}<span style ={{color: '#8C8C8C'}}> // {title.eng}</span></h3>
        </StyledTitle>
    )
}
