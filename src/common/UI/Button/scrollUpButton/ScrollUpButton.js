import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {EmptyButton} from "../EmptyButton.styles";
import {Arrow} from "../../Other/Arrow";
import {useScrollReflect} from "../../../../utils/hooks/useScrollRefflect";

const ButtonWrapper = styled(EmptyButton)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  font-size: 37px;
  display: flex;
  position: fixed;
  bottom: 100px;
  background: white;
  right: 40px;
  z-index: 10;
  align-items: center;
  justify-content: center;
  color: #F43939;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ScrollUpButton = ({footerRef}) => {
    const cof = 1
    const [isVisible, setIsVisible] = useState(false)


    useScrollReflect((scrollHeight, scrollTop, height) =>   scrollTop > height * cof,
    () => setIsVisible(true),
        () => setIsVisible(false))


    const handleClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            {isVisible && <ButtonWrapper onClick={handleClick}>
            <Arrow direction={'up'} weight={'500'} size={22}/>
        </ButtonWrapper>
        }
        </>
    )
}