import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h3`
font-size: 27px;
  
`
const StyledStatus = styled.p`
font-size: 24px;
`

const StyledItem = styled.div`
    font-size: 27px;
  display: inline-block;
  
`
export const ProfileInfoStatus = ({text}) => {
    return (
        <>
            <StyledItem>
                <h3>Статус: </h3>
                <StyledStatus>
                    {text}
                </StyledStatus>
            </StyledItem>


        </>

    )
}