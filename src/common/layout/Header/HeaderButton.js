import React from "react";
import {StyledHeaderItem} from "./HeaderItem.styles";

export const HeaderButton = ({children, onClick}) => {
    return (
        <StyledHeaderItem tabIndex = {0} onClick = {onClick}>

                {children}

        </StyledHeaderItem>

    )

}