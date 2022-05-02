import React from 'react'
import styled, {css} from "styled-components";

const StyledRateItem = styled.div`
  width: 60px;
  height: 40px;
  background-color: #DF64BD;
  border-radius: 40px;
  box-shadow: 3px 4px 9px rgba(0, 0, 0, 0.25);
  display: flex;;
  justify-content: center;
  align-items: center;
  font-size:1.3em;
  color: white;
  ${props => props.span ? css`` : css`
    left: 8px;
    top: 8px;
    position: absolute;
    z-index: 12;
  `}
`
const Star = styled.span`
transform: translateY(-2px);
`
export const RateItem = ({rate, ...props}) => {
    const star = '&#9733;'
    return (
        <StyledRateItem {...props}>
            {rate}<span style={{width: '2px'}}/><Star>★</Star>
        </StyledRateItem>
    )
}