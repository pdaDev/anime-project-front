import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {StyledImage} from "../../../../common/UI/Other/ContentImage";
import preimage from './../../../../assets/images/1.jpg'
import preloader from './../../../../assets/icons/Ellipsis-1s-200px.svg'
import axios from "axios";
import {Image} from "../../../../common/UI/Image/Image";

const ImageWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  min-width: 220px;
  align-items: center;
  height: 300px;
  padding: 25px;
  position: relative;
  margin-right: 40px;
  box-shadow: 3px 4px 9px rgba(0, 0, 0, 0.25);
  background-color: white;
`
const PreloaderWrapper = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

`

export const ContentImage = ({img, children}) => {
    return (
        <ImageWrapper>
            <Image image={img}/>
            {children}
        </ImageWrapper>
    )
}