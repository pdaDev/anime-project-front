import styled, {css} from 'styled-components'
import preloader from './../../../../assets/icons/Ellipsis-1s-200px.svg'
import asuke from './../../../../assets/images/asuka.png'
import preimage from "../../../../assets/images/1.jpg";
import {useState} from "react";
import {Preloader} from "../../../../common/UI/Preloader/Preloader";
import {Image} from "../../../../common/UI/Image/Image";

const Page = styled.div`
  ${({typeOfInsert}) => typeOfInsert === 'container' ? css`
            width: 100%;
            height: auto;
          ` :
          css`
          width: auto;
            height: ${window.innerHeight}px;
          `}
`

export const MangaPage = ({pageUrl, typeOfInsert}) => {

    return (
        <Page typeOfInsert={typeOfInsert}>
            <Image image={pageUrl}/>
        </Page>
    )
}

/*
*  {isFetching && <Preloader/>}
        <Page src={pageUrl}
              onLoad={({currentTarget}) => {
                  setIsFetching(false)
              }}
              onError={({currentTarget}) => {
                  setIsFetching(false)
                  currentTarget.onerror = null
                  currentTarget.src = asuke
              }}


        />*/