import React from 'react'
import styled from "styled-components";

 const StyledManeTitle = styled.h2`
  font-size: ${props => props.size || '48px'};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   text-align: ${props => props.center ? 'center' : 'left'}
`
export const ManeTitle = ({title, ...props}) => {
     return (
         <StyledManeTitle {...props}>
             {title}
         </StyledManeTitle>
     )

}

