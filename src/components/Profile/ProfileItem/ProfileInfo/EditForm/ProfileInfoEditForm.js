import React, {useEffect} from "react";
import styled from 'styled-components'
import {EditButton} from "../../../../../common/UI/Button/Edit/EditButton";
import {EmptyButton} from "../../../../../common/UI/Button/EmptyButton.styles";
import {usePopap} from "../../../../../utils/hooks/usePopap";


const EditFormWrapper = styled.div`
  background: white;
  filter: drop-shadow(3px 5px 7px rgba(0, 0, 0, 0.25));
  width: 500px;
  height: 300px;
  z-index: 4;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`

export const ProfileInfoEditForm = ({changeInfo, closeForm}) => {
   usePopap()
    return (
        <EditFormWrapper>
            <EmptyButton onClick={closeForm}>
                Х
            </EmptyButton>

        </EditFormWrapper>
    )

}