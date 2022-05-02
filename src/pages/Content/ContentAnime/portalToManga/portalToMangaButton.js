import React from "react";
import styled from "styled-components";
import mangaIcon from "../../../../assets/icons/manga_icon.svg";
import bookMarkIcon from '../../../../assets/icons/manga_icon.svg'
import {NavLink} from "react-router-dom";
const StyledIcon = styled.div`
  background-image: url(${bookMarkIcon});
  background-size: cover;
  width: ${(props) => props.size || '35px'};
  height: ${(props)=> props.size || '35px'};
  background-color: white;
`
const StyledIconWrapper = styled.div`
  
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: 300ms;
  border: 1px solid white;

`
export const PortalToMangaButton = ({mangaId, chapterNumber, ...props}) => {
    return (
        <NavLink to={`/reader/${mangaId}/${chapterNumber}`}>
            <StyledIconWrapper>
                <StyledIcon {...props}/>
            </StyledIconWrapper>
        </NavLink>
    )
}