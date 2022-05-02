import React, {useRef, useState} from "react";
import styled from 'styled-components'
import {AnimePlayerSeriesBlock} from "./SeriesBlock/AnimePlayerSieriesBlock";
import {AnimePlayerBLock} from "./PlayerBlock/AnimePlayerBLock";

const AnimePlayerWrapper = styled.div`
 
  width: 100%;
  display: grid;

  background: #282828;
  min-height: ${props=> props.height || 300}px;

`


export const AnimePlayer = ({countOfSeries, currentSeries, seriesData, setCurrentSeries, ageDistinction}) => {
    const ref = useRef()
    const setNextEpisode = () => {
        setCurrentSeries(currentSeries + 1)
    }
    return (<>
            <AnimePlayerWrapper >
                <AnimePlayerBLock playerRef={ref}
                                  data={seriesData}
                                  setNextEpisode = {setNextEpisode}
                                  isLastEpisode = {currentSeries === countOfSeries}
                                  ageDistinction={ageDistinction}
                />
            </AnimePlayerWrapper>
            <AnimePlayerSeriesBlock countOfSeries={countOfSeries}
                                    currentSeries={currentSeries}
                                    setCurrentSeries={setCurrentSeries}
            />
        </>

    )

}