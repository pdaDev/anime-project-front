import React, {useRef, useState} from "react";
import styled from "styled-components";
import {MangaChapterItem} from "./ChapterItem/MangaChapterItem";
import {EmptyButton} from "../../../../../common/UI/Button/EmptyButton.styles";
import {renderIntoDocument} from "react-dom/test-utils";

const SetWrapper = styled.div`
  font-size: 21px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 30px 10px 30px;
  background: white;
  border-left: 4px solid #F43939;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: space-between;;
`
const ButtonWrapper = styled(EmptyButton)`
  width: 100%;
  margin-bottom: 10px;
`
const Arrow = styled.div`
  font-stretch: ultra-expanded;
  user-select: none;
  display: inline-block;
  transition: 300ms;
  transform: rotate(${props => props.isOpen ? '0deg' : '180deg'}) scaleX(2);
  color: #FF4940;

`


export const MangaChaptersSet = ({chapters, minChapter, maxChapter, mangaId}) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const close =() => {
        setIsOpen(false)
    }
    const open = () => {
        setIsOpen(true)
    }

    return (<>
            <ButtonWrapper onClick={isOpen ? close : open}>
                <SetWrapper>
                    <h2>{minChapter === maxChapter ? `Глава ${minChapter}` :  `Главы ${minChapter} ... ${maxChapter}`}</h2>
                    <Arrow isOpen={isOpen}>{'ᐯ'}</Arrow>
                </SetWrapper>
            </ButtonWrapper>
            <div ref={ref}>
                {isOpen && chapters.map(item => <MangaChapterItem key={item.id}
                                                                  title={item.title}
                                                                  date={item.date}
                                                                  number={item.number}
                                                                  mangaId={mangaId}
                />).reverse()}
            </div>

        </>
    )
}