import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components'
import s from './SearchInput.module.css'
import {NavLink} from "react-router-dom";
import {useToggle} from "../../../../utils/hooks/useToggle";
import {Navigate} from "react-router-dom";
import {Arrow} from "../../Other/Arrow";
import {EmptyButton} from "../../Button/EmptyButton.styles";
import {useTabOnItem} from "../../../../utils/hooks/useTabOnItem";
import {useNavigate} from "react-router-dom";


const ListItem = ({chapterNumber, mangaId, onKeyDown}) => {
    return (

            <NavLink to={`/reader/${mangaId}/${chapterNumber}`} onKeyDown={onKeyDown} tabIndex={0} className={s.link_wrapper}>
                <div className={s.item}>
                    {`Глава ${chapterNumber}`}<Arrow direction={'right'} size={'12'}/>
                </div>
            </NavLink>

    )

}
export const SearchInput = ({placeholder, value, handleChange, chapters, mangaId}) => {
    const [isFocus, setIsFocus] = useState(false)
    const [timerId, setId] = useState(null)
    const navigate = useNavigate()


    const handleSubmit = (query) => {
        return chapters.filter(c => c.number.toString() === query.toString()).length > 0 ? navigate(`/reader/${mangaId}/${value}`)
            : null
    }
    const onKeyPress = e => {
        e.charCode === 13 && handleSubmit(value)
    }
    const onFocus = () => {
        clearTimeout(timerId)
        setIsFocus(true)
    }
    const onBlur = () => {
        setId(setTimeout(() => setIsFocus(false),100))
    }

    const {ref, onItemKeyDown, onInputKeyDown} = useTabOnItem()
    const chaptersForList = chapters
        .filter(item => item.number.toString().includes(value) && value)
        .filter((x, i) => i < 5)
    return (
        <>
        <div onBlur={onBlur} onFocus={onFocus} style={{position: 'relative'}}>
            <input className={s.input}
                   type={'text'}
                   placeholder={placeholder}
                   value={value}
                   onChange={handleChange}
                   onKeyPress={onKeyPress}
                   onKeyDown={onInputKeyDown}

            />
            {isFocus && <div className={s.list_wrapper} ref={ref}>
                {
                    chaptersForList.length ? chaptersForList.map((item, i, chapters) => <ListItem tabIndex={0}
                                                                                                  onKeyDown = {onItemKeyDown}
                        chapterNumber={item.number}
                        mangaId={mangaId}
                    />) : <h2>Ничего не найдено</h2>}
            </div>}
        </div>

            </>

    )
}