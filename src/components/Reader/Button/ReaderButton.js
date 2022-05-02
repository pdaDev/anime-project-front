import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";

const ButtonWrapper = styled.div`
  width: 70px;
  height: 60px;
  border: 5px solid black;
  color: black;
`
export const ReaderButton = ({link, message}) => {
    return (
        <NavLink to={link}>
            <ButtonWrapper>
                {message}
            </ButtonWrapper>
        </NavLink>
    )
}