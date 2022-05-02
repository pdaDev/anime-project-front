import React from "react";
import styled, {css, keyframes} from 'styled-components'
const menuOpen = keyframes`
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const StyledSearchMenu = styled.div`
  top: 80px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 3;
  width: 550px;
  height: 40px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${menuOpen} 1s forwards;
  }
  ${props => props.openSearch && css`
    opacity: 1;
  `}
  
`