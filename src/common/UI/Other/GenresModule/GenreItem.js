import React from 'react'
import styled from "styled-components";

const StyledGenreItem = styled.div`
  background-color: white;
  border: solid 1px #FF4940;
  border-radius: 15px;
  text-align: center;
  padding: 2px 6px;
  box-sizing: border-box;
  height: 100%;
  color: #FF4940;
  display: flex;
  align-items: center;
  font-size: 150%;
  user-select: none;
  margin-left: 5px;
`
export const GenreItem = ({genre, ...props}) => {
    return (
        <StyledGenreItem {...props}>
            {genre}
        </StyledGenreItem>
    )
}