import styled from "styled-components";
import {useEffect, useMemo, useState} from "react";
import {convertTime} from "../../../../../../../utils/helpers/helpers";
import {TimeEl} from "../PlayerTimeBlock/TimeEl";

const Wrapper = styled.div.attrs(props => ({
    style: {
        left: `${props.pos}px`
    }
}))`
  opacity: ${props => props.isShow ? 1 : 0};
  position: absolute;
  height: 45px;
  bottom: 7px;
  z-index: 1337;
`
const Trigon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 4px;
  background: #282828;
  clip-path: polygon(100% 0, 0 0, 50% 100%);

`
const TimeBlock = styled.div`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 0;
  left: 0;
  background: #282828;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;;
`
export const PlayerTimeOnHover = ({progressLine, duration, isFullScreen}) => {
    const [pos, setPos] = useState(0)
    const [isSHow, setIsShow] = useState(false)
    const [time, setTime] = useState(null)
    const [progressLineData, setProgressLineData] = useState(null)
    useEffect(() => {
        setTimeout(() => setProgressLineData(progressLine?.getBoundingClientRect()), 300)
    },[isFullScreen, progressLine])
    useEffect(() => {
        const progressLinePos = progressLineData?.x
        const progressLineLength = progressLineData?.width
        const handleMouseMove = e => {
            const cursorPos = e.clientX - progressLinePos
            setPos(cursorPos - 15)
            const countOfSec = cursorPos / progressLineLength * duration
            setTime(convertTime(~~countOfSec))
        }
        const handleMouseOver = () => setIsShow(true)
        const handleMouseLeave = () => setIsShow(false)
        progressLine?.addEventListener('mouseover', handleMouseOver)
        progressLine?.addEventListener('mouseleave', handleMouseLeave)
        progressLine?.addEventListener('mousemove', handleMouseMove)

        return () => {
            progressLine?.removeEventListener('mouseover', handleMouseOver)
            progressLine?.removeEventListener('mouseleave', handleMouseLeave)
            progressLine?.removeEventListener('mousemove', handleMouseMove)
        }

    }, [progressLine, duration, progressLineData])
    const hasHours = time?.hours > 0
    return (
        <Wrapper pos={pos} isShow={isSHow}>
            <TimeBlock>
                {hasHours && <>
                    <TimeEl time={time?.hours}/>:
                </>}
                <TimeEl time={time?.min}/>:
                <TimeEl time={time?.sec}/>
              </TimeBlock>
            <Trigon/>

        </Wrapper>
    )
}