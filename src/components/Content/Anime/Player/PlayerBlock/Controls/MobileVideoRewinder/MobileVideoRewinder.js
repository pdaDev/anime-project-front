import styled, {css} from "styled-components";
import {useEffect, useRef, useState} from "react";
import next from './../../../../../../../assets/icons/next.svg'
import {Flex} from "../../../../../../../common/UI/Grid/Flex";


const Part = styled.div`
  width: 40%;
  height: 65%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
`

const RightPart = styled(Part)`
  right: 0;
`
const LeftPart = styled(Part)`
  left: 0;

`
const TimeMark = styled.div`
  width: 200px;
  height: 100px;
  background: ulr(${next}) left no-repeat;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: white;
  ${props => props.type === 'down' ? css`left: 70px;` : css`right: 70px`}
`

const TimeChangeIcon = styled.div`
  width: 100px;
  height: 70px;
  background: url(${next}) center no-repeat;
  transform: rotate(${props => props.type==='down' ? 0 : 180}deg);
`
const TimeChangeIndicator = ({time, type}) => {
    return (
        <TimeMark type={type}>
            <Flex direction={'column'}>
                <TimeChangeIcon type={type}/>
                <h3>
                    {type === 'down' ? '-' : '+'}&nbsp;{time}&nbsp;sec
                </h3>
            </Flex>

        </TimeMark>

    )
}
export const MobileVideoRewinder = ({player, changePlayerTime}) => {
    const ref = useRef()
    const [upTimeCHange, setUpTimeChange] = useState(0)
    const [downTimaChange, setDownTimeChange] = useState(0)

    useEffect(() => {

        let uptimer
        let downtimer
        let countOfLeftTocuhes = 0
        let countOfrightTouches = 0
        let step = 5


        const handleRightPartTouch = () => {

            if (countOfLeftTocuhes > 0) {
                clearTimeout(downtimer)
                setDownTimeChange(0)
                countOfLeftTocuhes = 0
            }
            clearTimeout(uptimer)
            setUpTimeChange(time => time + step)
            ++countOfrightTouches
            uptimer = setTimeout(() => {

                setUpTimeChange(time => {
                    if (countOfrightTouches >= 2) {
                        changePlayerTime(time)
                    }
                    return 0
                })
                countOfrightTouches = 0
            }, 300)
        }
        const handleLeftPartTouch = () => {
            if (countOfrightTouches > 0) {
                clearTimeout(uptimer)
                setUpTimeChange(0)
                countOfrightTouches = 0
            }
            clearTimeout(downtimer)
            setDownTimeChange(time => time + step)
            ++countOfLeftTocuhes
            downtimer = setTimeout(() => {

                setDownTimeChange(time => {
                    if (countOfLeftTocuhes >= 2)
                        changePlayerTime(-time)
                    return 0
                })
                countOfLeftTocuhes = 0
            }, 300)
        }
        const handleTouch = e => {
            const parts = ref.current?.children
            parts[0].contains(e.target) && handleLeftPartTouch()
            parts[1].contains(e.target) && handleRightPartTouch()
        }
        ref.current?.addEventListener('touchstart', handleTouch)
        return () => ref.current?.removeEventListener('touchstart', handleTouch)
    }, [ref, player])
    return (
        <div ref={ref}>
            <div>
                {downTimaChange > 5 && <TimeChangeIndicator type={'down'}
                                                            time={downTimaChange}
                />}
                <LeftPart/>
            </div>
            <div>
                {upTimeCHange > 5 && <TimeChangeIndicator type={'up'}
                                                          time={upTimeCHange}
                />}
                <RightPart/>
            </div>
        </div>
    )
}


