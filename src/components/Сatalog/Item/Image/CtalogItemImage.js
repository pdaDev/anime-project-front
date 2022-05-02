import React from "react";
import styled from 'styled-components'
import {Image} from "../../../../common/UI/Image/Image";

const ImageWrapper = styled.div`
  width: 250px;
  height: 100%;
  margin-right: 10px;
  position: relative;
`

export const CatalogItemImage = ({image}) => {
    return (
        <ImageWrapper>
            <Image image={image}/>
        </ImageWrapper>
    )
}