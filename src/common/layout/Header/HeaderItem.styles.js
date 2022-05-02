import React from "react";
import styled, {createGlobalStyle} from "styled-components";

export const StyledHeaderItem = styled.div`
  display: inline-block;
  min-width: 75px;
  height: 20px;
  border: solid 2px white;
  padding: 10px;
  text-align: center;
  margin-right: 15px;
  cursor: pointer;
  &:hover{
    background: white;
    color: #8F2471;
  }
`
