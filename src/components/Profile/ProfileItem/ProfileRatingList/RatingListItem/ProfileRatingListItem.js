import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {RateItem} from "../../../../../common/UI/Other/RateItem";
import {RatingListIElement} from "../Elements/RatingListElement/RatingListIElement";
import {RatingListELements} from "../Elements/RatingListItemElements";
import {useSingleToneFunction} from "../../../../../utils/hooks/useSingleToneFunction";

const StyledItem = styled.div`
  width: 100%;
  min-height: 50px;
  margin: 10px 0;;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0px 20px;
  cursor: pointer;
  background: white;
  border-left: 4px solid #902672;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);

`


export const ProfileRatingListItem = ({title, rate, elements, getItemData, id}) => {
    const [isOpen, setOpen] = useState(false)
    const getData = useSingleToneFunction(() => getItemData(id))
    const toggleItemElementsOpen = () => {
        getData()
        !isOpen ? setOpen(true) : setOpen(false)
    }
    return (<div>
            <StyledItem onClick={toggleItemElementsOpen}>
                <h3 style={{fontSize: '27px'}}>{title}</h3>
                <RateItem rate={rate} span/>
            </StyledItem>
            {isOpen && <RatingListELements elements={elements}
                                           title={title}
            />}


        </div>
    )
}