import React from 'react'
import {ProfileItem} from "../ProfileItem.styles";
import {ProfileInfoAvatar} from "./Avatar/ProfileInfoAvatar";
import defautlProfileImg from './../../../../assets/images/asuka.png'
import styled from "styled-components";

import {ProfileInfoTitle} from "./Title/ProfileInfoTitle";
import {ProfileInfoItem} from "./Item/ProfileInfoItem";
import {ProfileInfoStatus} from "./Status/ProfileInfoStatus";
import {ProfileInfoEditButton} from "./EditButton/ProfileInfoEditButton";

const ProfileInfoWrapper = styled(ProfileItem)`
  grid-area: info;
  display: inline-flex;
  background: white;
`
const InfoBlock = styled.div`
  padding-left: 10px;
  width: 100%;
  margin-left: 15px;
  font-size: 24px;
  display: inline-block;
  height: auto;
`
export const ProfileInfo = ({profileInfo, isOwner, toggleEdit}) => {
    const {img, nickname, countOfTitles, favouriteGenre, status} = profileInfo
    return (
        <ProfileInfoWrapper>
            <ProfileInfoAvatar src={img || defautlProfileImg}/>
            <InfoBlock>
                <ProfileInfoTitle name={nickname}/>
                <div style={{marginLeft: '3px'}}>
                    <ProfileInfoItem title={'Просмотрено тайтлов'} value={countOfTitles} important={true}/>
                    <ProfileInfoItem title={'Любимый жанр'} value={favouriteGenre} important/>
                    <ProfileInfoStatus text={status}/>
                </div>
            </InfoBlock>
            <ProfileInfoEditButton handleClick={toggleEdit}/>

        </ProfileInfoWrapper>
    )
}