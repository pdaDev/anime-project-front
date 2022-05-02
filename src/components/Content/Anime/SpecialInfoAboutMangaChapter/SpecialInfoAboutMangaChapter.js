import React from "react";
import styled from "styled-components";
import extraInfoIcon from './../../../../assets/icons/question-mark.png'
import s from './SpecialInfoAboutMangaChapter.module.css'


export const SpecialInfoAboutMangaChapter = ({chapterNumber}) => {
    return <div className={s.icon}>
        ?
        <div className={s.message_wrapper}>
            <p>{'Перейти на '}<span style={{color: '#F43939'}}>{chapterNumber}</span>{' главу манги'}</p>
        </div>
    </div>
}