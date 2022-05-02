import React from "react";
import styled, {css} from "styled-components";
import {EmptyButton} from "../../../../common/UI/Button/EmptyButton.styles";
import {OpenButton} from "../../../../common/UI/Button/Open/OpenButton";

const StyledButton = styled.div`
  width: 80px;
  height: 150px;
  z-index: 4;
  background: #FFFFFF;
  box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: ${({borderRadius}) => borderRadius || 52}px;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  padding: 10px;
  color: #FF4940;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  border-radius-topLeft: 0px;
`
const Arrow = styled.div`
  font-stretch: ultra-expanded;
  user-select: none;
  transform: scaleX(2);
  display: inline-block;
  transform: rotate(${props => props.isOpen ? '90deg' : '270deg'})

`
const Cover = styled.div`
  position: absolute;
  z-index: 2;
  width: 45px;
  background: white;
  height: 170px;
  top: 50%;
  transform: translateY(-50%);
  left: -5px;

`
export const FormOpenButton = ({isOpen, toggleOpen, options, children}) => {
    return (
        <EmptyButton onClick={toggleOpen}>

            <StyledButton {...options}>
                <Cover/>
                <Arrow isOpen={isOpen}>{'ᐯ'} </Arrow>
            </StyledButton>

        </EmptyButton>
    )
}
