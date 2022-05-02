import React from "react";
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const ChapterItemWrapper = styled.div`
  width: 90%;
  float: right;
  height: 50px;
  background: #F5F5F5;
  box-sizing: border-box;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 21px;
  padding: 5px 20px;
  transition: 300ms;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    width: 100%; 
  }
`

export const MangaChapterItem = ({number, title, date, mangaId}) => {
    return (
        <NavLink to={`/reader/${mangaId}/${number}`}>
        <ChapterItemWrapper>
            <h3>
                {`Глава ${number}  ${title}`}
            </h3>
            <p>{date}</p>
        </ChapterItemWrapper>
        </NavLink>
    )

}
