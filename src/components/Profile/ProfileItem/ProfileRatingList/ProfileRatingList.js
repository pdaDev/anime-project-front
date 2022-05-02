import React from "react";
import styled from 'styled-components'
import {ProfileItem} from "../ProfileItem.styles";
import {ProfileRatingListItem} from "./RatingListItem/ProfileRatingListItem";
import {ManeTitle} from "../../../../common/UI/Title/ManeTitle";

const StyledRatingList = styled(ProfileItem)`
grid-area: list;
  filter: none;
  padding: 0px;

`



export const ProfileRatingList = ({ratingList, itemHandleClick}) => {
    return (
        <StyledRatingList style={{girdArea: 'f'}}>
            <ManeTitle title={'Рейтинг лист'} size={'37px'} center/>
            {ratingList.map(item => <ProfileRatingListItem title={item.title}
                                                           rate={item.rate}
                                                           elements={item.elements}
                                                           key={item.id}
                                                           getItemData = {itemHandleClick}
                                                           id = {item.id}
            />)}
        </StyledRatingList>
    )
}