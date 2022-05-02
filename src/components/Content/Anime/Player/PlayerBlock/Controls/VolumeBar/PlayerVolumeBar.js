import styled from "styled-components";
import React, {useCallback, useEffect, useState} from "react";
import s from './VolumeBar.module.css'
import {Realtive, Relative} from "../../../../../../../common/UI/Other/Realtive";
import largeLine from './../../../../../../../assets/icons/large_dynamic_line.svg'
import smallLine from './../../../../../../../assets/icons/small_dynamic_line.svg'
import mediumLine from './../../../../../../../assets/icons/medium_dynamic_line.svg'
import {Flex} from "../../../../../../../common/UI/Grid/Flex";
import mute from './../../../../../../../assets/icons/mute.svg'

const VolumeWrapper = styled.div`
`
const VolumeLine = styled.div.attrs(props => ({
    style: {
        width: `${props.volume * 100|| 0}%`
    }
}))`
  position: absolute;
  left: -0.8px;
  pointer-events: none;
  top: -12px;
  z-index: 2;
  background: #F43939;
  border-radius: 3px;
  height: 6px;


`


const VolumeDynamicLine = styled.div`
  width: 10px;
  height: 40px;
  background: url(${props => props.line}) center no-repeat;
  opacity: ${props => props.isShow ? 1 : 0};
`
const MutedIcon = styled.div`
    width: 20px;
  height: 40px;
  background: url(${mute}) left no-repeat;
  position: absolute;
  top: 0;
  left: 2px;

`
export const PlayerVolumeBar = ({volumeLevel, changeVolumeLevel}) => {

    const [savedVolume, setSavedVolume] = useState(0)
    const toggleMute = () => {
        if (volumeLevel > 0) {
            setSavedVolume(volumeLevel)
            changeVolumeLevel(0)
        } else {
            changeVolumeLevel(savedVolume)
        }
    }
    return (
        <div className={s.volume_wrapper}>
            <div className={s.volume_range_wrapper}>
                <div className={s.volume_range}>
                    <Relative>
                        <input type={'range'}
                               min={0}
                               max={1}
                               step={0.1}
                               onChange={e => changeVolumeLevel(e.target.value)}
                               value={volumeLevel}
                               className={s.input}
                        />
                        <Relative style={{width: `${volumeLevel > 0.5 ? 90 : 110}%`}}>
                            <VolumeLine volume={volumeLevel}/>
                        </Relative>

                    </Relative>

                </div>
            </div>


            <Flex>

            <div className={`${s.volume_icon}`}
                 onClick={toggleMute}
            />
                {volumeLevel < 0.001 && <MutedIcon/>}
                <VolumeDynamicLine line={largeLine} isShow={volumeLevel >= 0.1}/>
                <VolumeDynamicLine line={mediumLine} isShow={volumeLevel >= 0.5}/>
                <VolumeDynamicLine line={smallLine} isShow={volumeLevel >= 0.7}/>

            </Flex>


        </div>
    )

}


