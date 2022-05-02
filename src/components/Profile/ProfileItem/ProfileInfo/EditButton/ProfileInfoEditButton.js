import React from "react";
import styled from "styled-components";
import {EmptyButton} from "../../../../../common/UI/Button/EmptyButton.styles";
import {EditButton} from "../../../../../common/UI/Button/Edit/EditButton";

const EditButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 100%;
  transform: translateX(-37px);
`

export const ProfileInfoEditButton = (props) => {
    return (
        <EditButtonWrapper>
            <EditButton {...props} />
        </EditButtonWrapper>
    )
}