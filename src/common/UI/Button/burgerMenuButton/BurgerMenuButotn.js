import React from "react";
import styled, {css} from "styled-components";
import animations from './BurgerMenuButton.animations'
const {topLineAnimationOpen, topLineAnimationClose,
    bottomLineAnimationClose, bottomLineAnimationOpen,
    middleLineAnimationClose, middleLineAnimationOpen
} = animations

const Wrapper = styled.div`
  width: ${props => props.option?.width || 50}px;
  height: ${props => props.option?.height || 50}px;
  cursor: pointer;
  position: relative;
`
const Line = styled.div`
  width: 100%;
  height: ${props => props.option?.lineWeight || 10}px;
  ${props => props.option?.rounded && css`
    border-radius: ${props => props.option?.lineWeight / 5 || 5}px;
  `} 
 
  background: ${props => props.option?.color || 'black'};
  position: absolute;
`
const TopLine = styled(Line)`
    top: 0;
    animation: ${({isOpen}) => isOpen ? topLineAnimationOpen : topLineAnimationClose } forwards ${props => props.option?.animationDuration || 600}ms;
`
const MiddleLine = styled(Line)`
    top: 50%;
  transform: translateY(-50%);
  animation: ${({isOpen}) => isOpen ? middleLineAnimationOpen : middleLineAnimationClose } forwards ${props => props.option?.animationDuration || 600}ms;
`
const BottomLine = styled(Line)`
    bottom: 0;
  animation: ${({isOpen}) => isOpen ? bottomLineAnimationOpen : bottomLineAnimationClose} forwards ${props => props.option?.animationDuration || 600}ms;
`
export const BurgerMenuButton = ({isOpen, setIsOpen, option}) => {
    return (
        <Wrapper option={option} onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
            <TopLine isOpen={isOpen} option={option}/>
            <MiddleLine isOpen={isOpen} option={option}/>
            <BottomLine isOpen={isOpen} option={option}/>
        </Wrapper>

    )
}