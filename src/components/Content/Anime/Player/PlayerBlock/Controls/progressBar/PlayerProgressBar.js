import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from 'styled-components'
import s from './ProgressBar.module.css'
import {convertTime, debounce} from "../../../../../../../utils/helpers/helpers";
import {PlayerTimeBlock} from "../PlayerTimeBlock/PlayerTimeBlock";
import {PlayerTimeOnHover} from "../TimeOnHover/PlayerTimeOnHover";

const StyledProgressBar = styled.div`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  z-index: 1;
  height: 6px;
  border-radius: 3px;
  background: white;
`
const ProgressLine = styled.div.attrs(props => ({
    style: {
        width: `${props.progress || 0}%`
    }
})) `  
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background: #F43939;
  border-radius: 3px;

`
const BufferLine = styled.div.attrs(props => ({
    style: {
        width: `${props.buffered || 0}%`
    }
})) `
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 3px;
  background: #d4d0d6;
  border-radius: 3px;
`
export const PlayerProgressBar = ({
                                      player,
                                      setIsNextButtonShow,
                                      isPlay, setIsSKipOpButtonShow,
                                      opStartTime,
                                      opDuration,
                                      setIsProloaderShow,
                                      isFullScreen
                                  }) => {
    const [progress, setProgress] = useState(0)
    const [buffered, setBuffered] = useState(0)
    useEffect(() => {
        setProgress(0)
        const handlePlayerTimeUpdate = () => {
           if (player.currentTime > opStartTime && player?.currentTime < opStartTime + opDuration ) {
               setIsSKipOpButtonShow(true)
           } else {
               setIsSKipOpButtonShow(false)
           }
           if (player?.currentTime > player?.duration * 0.8) {
               setIsNextButtonShow(true)
           } else {
               setIsNextButtonShow(false)
           }

            setProgress(player?.currentTime / player?.duration * 100)
            buffered < player?.duration && setBuffered(player?.buffered?.end(0) / player?.duration * 100)
        }
        const handlePlayerShowPreloader = () => {
            setIsProloaderShow(true)
        }
        const handlePlayerPlay = () => {
        }
        const handlePlayerCanPlay = () => {
            setIsProloaderShow(false)
        }
        player?.addEventListener('waiting', handlePlayerShowPreloader)
        player?.addEventListener('canplay', handlePlayerCanPlay)
        player?.addEventListener('timeupdate', handlePlayerTimeUpdate)
        player?.addEventListener('play', handlePlayerPlay)
        player?.addEventListener('loadstart', handlePlayerShowPreloader)
        return () => {
            player?.removeEventListener('waiting', handlePlayerShowPreloader)
            player?.removeEventListener('timeupdate', handlePlayerTimeUpdate)
            player?.removeEventListener('play', handlePlayerPlay)
            player?.removeEventListener('loadstart', handlePlayerShowPreloader)
            player?.removeEventListener('canplay', handlePlayerCanPlay)
        }
    }, [player])
    const play = useCallback(debounce(() => player?.play(), 225),[player])
    const changePlayerCurrentTime = (progress) => {
        if (isPlay) {
            if(!player?.paused) {
                player?.pause()
            }
            play()
        }
        setProgress(progress)
        player.currentTime = player.duration * progress / 100

    }

    const progresLine = useRef()


    const convertedTime = convertTime(~~player?.currentTime)
    return (
        <StyledProgressBar>
            <PlayerTimeOnHover progressLine={progresLine.current}
                               duration={player?.duration}
                               isFullScreen={isFullScreen}
            />
            <ProgressLine progress={progress} />
            <input type={'range'}
                   value={progress || 0}
                   className={s.input}
                   ref={progresLine}
                   onChange={e => changePlayerCurrentTime(e.target?.value)}/>
            <BufferLine buffered={buffered}/>
            <PlayerTimeBlock time={convertedTime}
                             duration={~~player?.duration}
            />
        </StyledProgressBar>
    )
}