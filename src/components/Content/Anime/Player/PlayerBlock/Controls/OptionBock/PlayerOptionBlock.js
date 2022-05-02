import styled from 'styled-components'
import optionIcon from './../../../../../../../assets/icons/option.svg'
import {EmptyButton} from "../../../../../../../common/UI/Button/EmptyButton.styles";
import {useEffect, useState} from "react";
import {useToggle} from "../../../../../../../utils/hooks/useToggle";

const OptionBlockWrapper = styled.div`
`
const OptionIcon = styled.img`
  transition: 400ms;
  transform: rotate(${props => props.isOpen ? '360' : '0'}deg);
  width: 40px;
  height: 40px;
  cursor: pointer;
`
const OptionsWrapper = styled.div`
  position: absolute;
  top: -100%;
  right: 0;
  width: auto;
  background: rebeccapurple;
  min-height: 40px;
  transition: 300ms;

`
const ReturnButton = styled(EmptyButton)`
  width: 100%;
  height: 30px;
  border: 2px solid black;
`
const OptionWrapper = styled.div`
  cursor: pointer;
  width: 150px;
`
const OptionValue = styled.div`
  width: 100%;
  height: 20px;
  cursor: pointer;
  background: ${props => props.checked && 'blue'};

`
const OptionValuesList = styled.div`
  width: 120px;

`
const Option = ({title, currentValue, setNewValue, listOfAvailableValues, parametr }) => {
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => setValue(currentValue), [currentValue])
    const [value, setValue] = useState(currentValue)
    const handleValueClick = value => {
        setNewValue(value)
        setValue(value)
        setIsChecked(false)
    }
    return !isChecked ? <OptionWrapper tabIndex={0}
                                       onClick={() => setIsChecked(true)}>
        <h5>{title}</h5><p>{value}</p>
    </OptionWrapper> : <OptionValuesList>
        <ReturnButton onClick={() => setIsChecked(false)}>Назад</ReturnButton>
        {listOfAvailableValues.map(v =>
            <OptionValue key={v} onClick={() => handleValueClick(v)} checked={v === currentValue}>
                {v}{parametr}
            </OptionValue>
        )}
    </OptionValuesList>


}
export const PlayerOptionBlock = ({player}) => {
    const [isOpen, toggleOpen] = useToggle(false)
    const listOfAvailablePlayBackRate = [1, 1.5, 2]
    const changePlayBackRate = value => player.playbackRate = value

    return (
        <OptionBlockWrapper>
            <OptionIcon onClick={toggleOpen}
                        isOpen={isOpen}
                        src={optionIcon}
            />
            {isOpen && <OptionsWrapper>
                <Option title={'Скорость воспроизведеения'}
                        listOfAvailableValues={listOfAvailablePlayBackRate}
                        setNewValue={changePlayBackRate}
                        parametr={'x'}
                        currentValue={player?.playbackRate}
                />

            </OptionsWrapper>}
        </OptionBlockWrapper>
    )
}