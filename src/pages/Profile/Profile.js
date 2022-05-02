import React from "react";
import {Layout} from "../../common/layout/Layout";
import {ProfileWrapper} from "../../components/Profile/PorofileWrapper.styles";
import {ProfileInfo} from "../../components/Profile/ProfileItem/ProfileInfo/ProfileInfo";
import {ProfileExtra} from "../../components/Profile/ProfileItem/ProfileExtra/ProffileExtra";
import {ProfileRatingList} from "../../components/Profile/ProfileItem/ProfileRatingList/ProfileRatingList";
import {ProfileInfoEditForm} from "../../components/Profile/ProfileItem/ProfileInfo/EditForm/ProfileInfoEditForm";
import {ContentWrapper} from "../../common/UI/Other/ContentWrapper";

export const  Profile = ({ratingList, isEdit, toggleEdit, profileInfo,  getRatingListItemElements}) => {
    return (
        <ContentWrapper pTop={'90px'} pBottom ={'60px'} grey>
            <ProfileWrapper>
                {isEdit && <ProfileInfoEditForm closeForm={toggleEdit}/>}
                <ProfileInfo profileInfo={profileInfo} toggleEdit={toggleEdit}/>
                <ProfileExtra/>
                <ProfileRatingList ratingList={ratingList} itemHandleClick = {getRatingListItemElements} />
            </ProfileWrapper>
        </ContentWrapper>
    )
}