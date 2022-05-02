import React from "react";
import styled from "styled-components";
import {ManeTitle} from "../../../../../common/UI/Title/ManeTitle";



const StyledLine = styled.div`
  border-radius: 2px;
  width: 85%;
  height: 4px;
  background: #902672;
  margin: 7px 0px 10px 0px;
`
export const ProfileInfoTitle = ({name}) => {
    return (
        <>
            <ManeTitle title={name} size={'37px'} style={{marginLeft: '3px'}}/>
            <StyledLine/>
        </>
    )
}


