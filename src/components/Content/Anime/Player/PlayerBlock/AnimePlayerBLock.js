import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Controls} from "./Controls/PlayerControls";
import {PlayButton} from "./Controls/PlayButton/PlayButton";
import {FullScreenButton} from "./Controls/FullScreenButton/FullScreenButton";
import s from './Player.module.css'
import {PlayerProgressBar} from "./Controls/progressBar/PlayerProgressBar";
import {debounce, isMobileDevice, singleToneFunction} from "../../../../../utils/helpers/helpers";
import {ChooseVoiceActingMenu} from "./Controls/chooseVoiceActingMenu/ChooseVoiceActingMenu";
import {useDispatch, useSelector} from "react-redux";
import {contentAnimeActions} from "../../../../../store/Content/Anime/ContentAnime.actions";
import {PLayerCommonButton} from "./Controls/PlayerCommonButton/PLayerCommonButton";
import {PlayerVolumeBar} from "./Controls/VolumeBar/PlayerVolumeBar";
import {PlayerVideoPreloader} from "./Controls/VideoPreloader/PlayerVideoPreloader";
import {MobileVideoRewinder} from "./Controls/MobileVideoRewinder/MobileVideoRewinder";
import {PlayerOptionBlock} from "./Controls/OptionBock/PlayerOptionBlock";
import {AgeDistinctionProtector} from "./Controls/AgeDistinctionProtector/AgeDistinctionProtector";
import {PlayerEpisodeTitle} from "./Controls/EpisodeTitle/PlayerEpisodeTitle";
import {PlayerBackgroundShadow} from "./Controls/BackgroundShadow/PlayerBackgroundShadow";
import {Space} from "../../../../../common/UI/Other/Space";
import {set} from "react-hook-form";


export const AnimePlayerBLock = React.memo(({data, playerRef, isLastEpisode, setNextEpisode, ageDistinction}) => {
    const url = data.url
    const [volume, setVolume] = useState(1)
    const changeVolume = volume => {
        setVolume(volume)
        playerRef.current.volume = volume
    }
    const wrapperRef = useRef(null)
    const [isPreloaderShow, setIsPreloaderShow] = useState(true)
    const [isPlay, setIsPlay] = useState(!playerRef.current?.paused)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [isHidden, setIsHidden] = useState(isPlay)
    const [isNextButtonShow, setIsNextButtonShow] = useState(false)
    const [isSKipOpenButtonShow, setIsSkipButtonShow] = useState(false)
    const isMobile = isMobileDevice()

    const opDuration = 5
    const opStartTime = 0


    const playPauseVideo = () => {
        isPlay ? playerRef.current?.pause() : playerRef.current?.play()
        setIsPlay(!isPlay)
    }
    const toggleFullScreen = () => {
        if (!isFullScreen) {
            if (wrapperRef.current.requestFullscreen) {
                setIsFullScreen(true)
                wrapperRef.current?.requestFullscreen()
            }
        } else {
            setIsFullScreen(false)
            document.exitFullscreen()
        }
    }
    const play = useCallback(debounce(() => playerRef.current?.play(), 225), [playerRef])

    const changePlayerTime = (time) => {

        if (isPlay) {
            !playerRef.current?.paused && playerRef.current?.pause()
            play()

        }
        const player = playerRef.current
        const timeChange = Math.max(Math.min(player?.duration, player.currentTime + time), 0);
        if (isFinite(timeChange))
            player.currentTime = timeChange;

    }

    useEffect(() => {
        let closeTimer
        const showControls = singleToneFunction(() => setIsHidden(false), 200)
        const hideControls = () => {
            clearTimeout(closeTimer)
            closeTimer = setTimeout(() => setIsHidden(true), 700)
        }

        const handleMouseMove = e => {
            if (!controls.current?.contains(e.target)) {
                showControls()
                hideControls()
            } else {
                clearTimeout(closeTimer)
                showControls()
            }

        }
        const handleKeyDown = e => {
            const currentTime = playerRef.current.currentTime
            switch (e.keyCode) {
                case 37:
                    changePlayerTime(-5)
                    wrapperRef.current?.focus()
                    showControls()
                    hideControls()
                    break
                case 39:
                    changePlayerTime(5)
                    wrapperRef.current?.focus()
                    showControls()
                    hideControls()
                    break
                case 40:
                    changeVolume(Math.max(0, playerRef.current?.volume - 0.1))
                    e.preventDefault()
                    break
                case 38:
                    changeVolume(Math.min(playerRef.current?.volume + 0.1, 1))
                    e.preventDefault()
                    break
            }

        }


        wrapperRef.current?.addEventListener('keydown', handleKeyDown)
        wrapperRef.current?.addEventListener('mousemove', handleMouseMove)
        return () => {

            wrapperRef.current?.removeEventListener('keydown', handleKeyDown)
            wrapperRef.current?.removeEventListener('mousemove', handleMouseMove)

        }
    }, [])

    useEffect(() => {

        setIsPlay(!playerRef.current?.paused)
        const handleVideoEnd = () => {
            !isLastEpisode && setNextEpisode()
        }
        playerRef.current?.addEventListener('ended', handleVideoEnd)
        return () => playerRef.current?.removeEventListener('ended', handleVideoEnd)
    }, [url])

    useEffect(() => {
        setIsFullScreen(wrapperRef.current?.clientWidth=== window.innerWidth)
    },[wrapperRef.current?.clientWidth])

    useEffect(() => {

        const handleKeyDown = e => {
            if (e.keyCode === 32) {
                e.preventDefault()
                playPauseVideo()
            }
        }
        const debouncedHandleKeyDown = debounce(handleKeyDown, 200)
        wrapperRef.current?.addEventListener('keydown', debouncedHandleKeyDown)
        return () => {
            wrapperRef.current?.removeEventListener('keydown', debouncedHandleKeyDown)
        }
    }, [isPlay])
    useEffect(() => {

        const handleKeyPress = e => {
            (e.keyCode === 102 || e.keyCode === 1072) && toggleFullScreen();
        }
        wrapperRef.current?.addEventListener('keypress', handleKeyPress, false)
        return () => {
            wrapperRef.current?.removeEventListener('keypress', handleKeyPress)

        }
    }, [isFullScreen])
    const voiceActors = useSelector(state => state.anime.series.availableVoiceActors)
    const currentVoiceActor = useSelector(state => state.anime.currentVoiceActor)

    const dispatch = useDispatch()
    const setVoiceActor = (id) => {
        dispatch(contentAnimeActions.setCurrentVoiceActor(id))
    }


    const controls = useRef()

    return (
        <VideoWrapper isHidden={isFullScreen && isHidden && isPlay} ref={wrapperRef} tabIndex={0}>
            <div className={s.video}>
                {data.url &&
                    <video autoPlay={false}
                           ref={playerRef}
                           onClick={() => {
                               controls.current?.children[0].focus()
                               playPauseVideo()
                           }}
                           onDoubleClick={toggleFullScreen}
                           src={url}
                           width={'100%'}
                           style={{position: 'relative'}}>
                        <source src={url} type={'video/mp4'}/>
                    </video>}
            </div>
            <Controls isHidden={isHidden} isPlay={isPlay} controls={controls}>
                {isPreloaderShow && <PlayerVideoPreloader/>}
                {!isPreloaderShow &&
                    <PlayButton
                        onClick={playPauseVideo}
                        isPlay={!isPlay}
                        size={90}
                    />}
                <PlayerProgressBar player={playerRef.current}
                                   setIsNextButtonShow={setIsNextButtonShow}
                                   setIsSKipOpButtonShow={setIsSkipButtonShow}
                                   opStartTime={opStartTime}
                                   opDuration={opDuration}
                                   setIsProloaderShow={setIsPreloaderShow}
                                   isPlay={isPlay}
                                   isFullScreen={isFullScreen}
                />

                <PlayerBackgroundShadow/>
                <ChooseVoiceActingMenu availableVoiceActors={voiceActors}
                                       chosenActor={currentVoiceActor}
                                       setCurrentVoiceActors={setVoiceActor}
                />
                <Options>
                    <PlayerVolumeBar volumeLevel={volume}
                                     changeVolumeLevel={changeVolume}
                    />
                    <Space/>
                    <PlayerOptionBlock player={playerRef.current}/>
                    <Space/>
                    <FullScreenButton isFullScreen={isFullScreen}
                                      wrapper={wrapperRef.current}
                                      toggleFullScreen={toggleFullScreen}
                    />

                </Options>
                {isMobile && isFullScreen && <MobileVideoRewinder player={playerRef.current}
                                                                  isFullScreen={isFullScreen}
                                                                  changePlayerTime={changePlayerTime}
                />}
                {isSKipOpenButtonShow && <PLayerCommonButton message={'Пропустить опенинг'}
                                                             onClick={() => playerRef.current.currentTime += opDuration}
                                                             position={'left'}
                />}
                {!isLastEpisode && isNextButtonShow && <PLayerCommonButton message={'Следующая серия'}
                                                                           onClick={setNextEpisode}
                />}
                <PlayerEpisodeTitle message={data.title}/>
                {ageDistinction === 18 && <AgeDistinctionProtector/>}
            </Controls>
        </VideoWrapper>
    )

})
const VideoWrapper = styled.div`
  cursor: ${props => props.isHidden ? 'none' : 'auto'};
  width: auto;
  height: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`

const Options = styled.div`

  position: absolute;
  z-index: 1;
  bottom: 50px;
  right: 2.5%;
  display: flex;
  justify-content: space-between;
`
