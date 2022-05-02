import React from "react";
import styled from "styled-components";
import {EmptyButton} from "../../../../common/UI/Button/EmptyButton.styles";
import {NavLink} from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  z-index: 4;
  top: 83%;
  left: 0;

`
const Button = styled(EmptyButton)`
  color: white;
  width: ${props => props.width || 100}%;
  height: auto;
  padding: 6px 15px;
  font-size: 24px;
  background: ${props => props.background || '#8F2471'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 47px;
  margin: 5px 0;
  text-align: left;
`

export const MangaStartReadingButtons = ({firstChapter, lastChapter, mangaId}) => {
    return (
        <Wrapper>
            <NavLink to={`/reader/${mangaId}/${firstChapter}`}>
                <Button width={'47'} background={'#DF64BD'}>
                    С начала
                </Button>
            </NavLink>

            <NavLink to={`/reader/${mangaId}/${lastChapter}`}>
                <Button>С последней главы</Button>
            </NavLink>

        </Wrapper>
    )
}