import React, {useRef} from "react";
import styled, {css} from 'styled-components'
import {OpenButton} from "../../../../common/UI/Button/Open/OpenButton";

const Wrapper = styled.div`
  width: auto;
  height: ${(props) => props.isOpen ? `${props.contentSize}px` : '40px'};
  position: relative;
  transition: 300ms;
  padding-top: 20px;
  overflow: hidden;
  padding-bottom: ${({isOpen}) => isOpen ? '50px' : '30px'};
`
const ButtonWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -120%);
`
const DescriptionWrapper = styled.div`
  font-size: 21px;
  overflow: hidden;
  height: auto;

`
const WhiteShadow = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 0;
  height: 100%;
  transition: 200ms;
  ${({isOpen}) => !isOpen && css`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7875525210084033) 66%, rgba(255,255,255,0) 100%);`};
  transform: translateY(-95%);
`
export const ExtraInfo = (props) => {
    const descriptionRef = useRef(null)
    let size = descriptionRef.current?.clientHeight

    return (
        <Wrapper isOpen={props.isOpen} contentSize={size}>
            <ButtonWrapper>
                <OpenButton {...props}/>
            </ButtonWrapper>
            <WhiteShadow isOpen={props.isOpen}/>
            <DescriptionWrapper ref={descriptionRef}>
                {props.description}
            </DescriptionWrapper>
        </Wrapper>
    )
}