import React from "react";
import styled from 'styled-components'
import mangaIcon from './../../../../assets/icons/manga_icon.svg'
import {NavLink} from "react-router-dom";

const StyledIcon = styled.div`
  background-image: url(${props => props.icon || mangaIcon});
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


export const CatalogItemMangaIcon = ({id, size,type, icon}) => {
    const contentType = type ? type : 'manga'
    return (
        <NavLink to={`/content/${contentType}/${id}`}>
            <StyledIconWrapper >
                <StyledIcon size={size} icon={icon}/>
            </StyledIconWrapper>
        </NavLink>
    )
}