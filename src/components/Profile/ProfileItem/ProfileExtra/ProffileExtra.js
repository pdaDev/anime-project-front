import React from "react";
import {ProfileItem} from "../ProfileItem.styles";

import styled from "styled-components";
const ProfileExtraItem = styled(ProfileItem)`
grid-area: extra;

`

export const ProfileExtra = () => {
    return (
        <ProfileExtraItem  style={{girdArea: 'extra', background: 'white'}}>
        </ProfileExtraItem>
    )
}