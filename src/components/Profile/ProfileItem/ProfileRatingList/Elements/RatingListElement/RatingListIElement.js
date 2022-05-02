import React from "react";
import styled from "styled-components";
import {RateItem} from "../../../../../../common/UI/Other/RateItem";

const StyledELement = styled.div`
  width: 90%;
  height: 50px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 10px;
  }
  transition: 300ms;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);

  background:  #F5F5F5;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  box-sizing: border-box;
  &:hover {
    width: 100%;
  }
`
const ElementInfo =styled.div`
    
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 21px;  
  padding-right: 40px;
  
`

export const RatingListIElement = ({name, type, season, rate, title}) => {
    return (
        <StyledELement>
            <ElementInfo>
                <h4>{name || title}</h4>
                <h4>{type}</h4>
                <h4>{type === 'Аниме' && `${season} сезон`}</h4>
            </ElementInfo>

            <RateItem rate={rate} span/>
        </StyledELement>

    )
}