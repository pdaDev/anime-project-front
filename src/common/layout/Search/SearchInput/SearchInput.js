import React, {useEffect, useRef} from "react";
import styled from 'styled-components'
import s from './search.module.css'
export const SearchInput = () => {
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    },[])
    return (

            <input className={s.search_input}
                   type='text' ref={ref}
                   placeholder='Введите название'
            />

    )
}

