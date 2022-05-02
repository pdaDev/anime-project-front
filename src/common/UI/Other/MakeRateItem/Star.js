
import styled from "styled-components";
import React, {useEffect, useRef} from "react";
import {EmptyButton} from "../../Button/EmptyButton.styles";

const StarWrapper = styled.div`
  letter-spacing: -5px;
  display: flex;
  font-size: ${props => props?.size ?? 45}px;
  color: ${props => props.active ? props.background?.active ?? '#902672' : props.background?.basic ?? '#959595'};
  transform: translateX(-4px);
  cursor: pointer;

`
export const Star = ({handleStarClick, number, onMouserOverEvent, starProperties, ...props}) => {
    const ref = useRef(null)
    const selectStar = () => {
        onMouserOverEvent(number)

    }
    useEffect(() => {
        ref.current?.addEventListener('mouseover', selectStar)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => ref.current?.removeEventListener('mouseover', selectStar)

    })
    useEffect(() => {
        ref.current?.addEventListener('mouseout', () => onMouserOverEvent(0))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => ref.current?.removeEventListener('mouseout', () => onMouserOverEvent(0))
    })
    return (
        <EmptyButton onClick={() => handleStarClick(number)}>
            <StarWrapper ref={ref} {...starProperties} {...props}>
                🟊
            </StarWrapper>
        </EmptyButton>
    )
}