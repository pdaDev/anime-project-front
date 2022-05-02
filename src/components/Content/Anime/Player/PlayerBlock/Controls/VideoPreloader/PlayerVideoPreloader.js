import {Preloader} from "../../../../../../../common/UI/Preloader/Preloader";
import preloader from './../../../../../../../assets/icons/preloader_video.svg'
import styled, {keyframes} from "styled-components";




const PreloaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 7;
  
  transform: translate(-50%, -50%);
  
`


export const PlayerVideoPreloader = () => {
    return (
        <PreloaderWrapper>
            <img src={preloader}/>
        </PreloaderWrapper>
    )
}