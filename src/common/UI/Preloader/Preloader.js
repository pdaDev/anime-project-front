import React from "react";
import styled, {css} from "styled-components";
import {Flex} from "../Grid/Flex";
import preloader from './../../../assets/icons/Ellipsis-1s-200px.svg'

const StyledPreloader = styled.img`
  width: ${props => props.size || 80}px;
  height: ${props => props.size || 80}px;
  border-radius: 50%;

`

export const Preloader = ({size})=> {
    return (
        <Flex>
            <StyledPreloader size={size}

                             src={preloader}/>
        </Flex>
    )
}