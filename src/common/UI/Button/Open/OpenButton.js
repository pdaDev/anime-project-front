import React from "react";
import styled, {css} from "styled-components";
import {EmptyButton} from "../EmptyButton.styles";

const StyledButton = styled.div`
  width: 100px;
  height: 35px;
  background: #FFFFFF;
  box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 52px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 3px;
  color: #FF4940;
  transform: scale(${props => props.buttonScale || 1});
 
`
const Arrow = styled.div`
  font-stretch: ultra-expanded;
  user-select: none;
  display: inline-block;
  transition: 300ms;
  transform: rotate(${props => props.isOpen ? '180deg' : '0deg'}) scaleX(2);
  
`
export const OpenButton = ({isOpen, toggleOpen, ...props}) => {
    return (
        <EmptyButton onClick = {toggleOpen}>
            <StyledButton {...props}>
                <Arrow isOpen={isOpen}>{'ᐯ'} </Arrow>
            </StyledButton>
        </EmptyButton>
    )
}
