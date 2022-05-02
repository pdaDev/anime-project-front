import {StyledSubmitButton} from "./SubmitButton.styles";
import React from "react";

export const SubmitButton = ({onClick, name, ...props}) => {
    return <StyledSubmitButton onClick = {onClick} {...props}>
        <p>{name}</p>
    </StyledSubmitButton>
}