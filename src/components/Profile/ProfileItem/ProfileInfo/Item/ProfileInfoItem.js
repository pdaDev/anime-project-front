import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  font-size: 27px;

`
const StyledItemValue = styled.span`
  color: ${props => props.important ? '#902671' : 'black'}
`
export const ProfileInfoItem = ({title, value, important}) => {
    return (
        <StyledItem>
            <h3>{title}: <StyledItemValue important={important}>{value}
            </StyledItemValue></h3>
        </StyledItem>

    )

}
