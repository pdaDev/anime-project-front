import React from "react";
import {StyledSearchMenu} from "./SearchMenu.styles";

import {SearchExitButton} from "./SearchExitButton/SearchExitButton";
import {SearchIcon} from "./SearchIcon/SearchIcon";
import {SearchInput} from "./SearchInput/SearchInput";



export const SearchMenu = ({handleExit, acceptSearch}) => {
    return (
        <StyledSearchMenu>
            <SearchInput/>
            <SearchExitButton handleExit={handleExit}/>
        </StyledSearchMenu>

    )

}

/***
 *  <SearchInput/>
 *                     <SearchIcon/>
 *                     <SearchExitButton/>
 */