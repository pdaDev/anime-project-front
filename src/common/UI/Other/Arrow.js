import React from "react";
import styled from "styled-components";

const ArrowStyles = styled.div`
  font-stretch: ultra-expanded;
  user-select: none;
  display: inline-block;
  transition: 300ms;
  font-size: ${props => props.size || '20'}px ;
  font-weight: ${props => props.weight || '400'};
  color: ${props => props.color || '#FF4940'};
  transform: rotate(${props => {
      switch (props.direction) {
        case 'down':
            return 0
        case 'right': 
            return  -90
        case 'left': 
            return 90
        case 'up':
            return 180
        default:
            return 0
      }
      
  }}deg) scaleX(2);
  
`

export const Arrow = (props) => {
    return <ArrowStyles {...props}>{'ᐯ'}</ArrowStyles>
}