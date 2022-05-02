import styled from "styled-components";
import {useMemo} from "react";
import {convertTime} from "../../../../../../../utils/helpers/helpers";
import {Space} from "../../../../../../../common/UI/Other/Space";
import {TimeEl} from "./TimeEl";


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-120%);
  left: 0;
  z-index: 10;
  font-size: 23px;
  display: flex;
`
const Duration = styled.div`
  color: #8C8C8C;
  display: flex;
`
const Time = styled.div`
  color: white;
  display: flex;
`
export const PlayerTimeBlock = ({time, duration}) => {
    const durationTime = useMemo(() => {
        return convertTime(duration)
    }, [duration])
    const hasHours = durationTime.hours > 0
    return (
        <Wrapper>
            <Time>
                {hasHours && <>
                    <TimeEl time={time.hours}/>
                    <h3>:</h3></>
                }

                <TimeEl time={time.min}/>
                <h3>:</h3>
                <TimeEl time={time.sec}/>
            </Time>

            <Duration>
                <Space width={3}/><h3>/</h3><Space width={2}/>
                {hasHours && <>
                    <TimeEl time={durationTime.hours}/>
                    <h3>:</h3>
                </>}

                <TimeEl time={durationTime.min}/> <h3>:</h3>
                <TimeEl time={durationTime.sec}/>
            </Duration>
        </Wrapper>
    )
}
