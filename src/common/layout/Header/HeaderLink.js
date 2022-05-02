import React from "react";

import {StyledHeaderItem} from "./HeaderItem.styles";
import {NavLink} from "react-router-dom";

export const HeaderLink = ({link, children, clickHandle}) => {
    return (
        <NavLink to={`/${link}`}>
            <StyledHeaderItem onClick={clickHandle}>
                {children}
            </StyledHeaderItem>
        </NavLink>

    )
}