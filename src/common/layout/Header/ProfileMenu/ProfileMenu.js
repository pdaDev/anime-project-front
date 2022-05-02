import React, {useEffect, useRef, useState} from "react";
import s from './ProfileMenu.module.css'
import {NavLink} from "react-router-dom";

export const ProfileMenu = ({profileId, logout, profileMenuClose}) => {
    const [timer, setTimer] = useState(null)
    const handleOnBlur = () => {
        const timerId = setTimeout(() => {
            profileMenuClose()
        }, 230)
        setTimer(timerId)

    }
    const menuRef = useRef()
    const handleOnFocus = () => {
        clearTimeout(timer)
    }
    const profileMenuClick = (event) => {
        event()
        profileMenuClose()
    }
    useEffect(() => menuRef.current.focus(), [])
    return (

        <div ref={menuRef} className={s.account_interaction_menu} onBlur={handleOnBlur} onFocus={handleOnFocus}
             tabIndex={0}>
            <ul>
                <NavLink to={`profile/${profileId}`}>
                    <li onClick={profileMenuClose} className={s.account_menu_btn}>Личный&#160;кабинет</li>
                </NavLink>
                <li tabIndex={0} onClick={() => profileMenuClick(logout)} className={s.account_exit_btn}>Выйти</li>
            </ul>
        </div>


    )
}

/**
 *
 * export const ProfileMenu = ({profileId, logOut, profileMenuClose}) => {
 *     const profileRef = useRef(null)
 *     const handleClick = (e) => {
 *         //!profileRef.current.contains(e.target))  вот как можно было
 *         if (e.target !== profileRef.current)
 *             setTimeout(() => {
 *                 profileMenuClose()
 *             }, 125)
 *
 *     }
 *     useEffect(() => {
 *         document.addEventListener('mousedown', handleClick)
 *         return () => document.removeEventListener('mousedown', handleClick)
 *     }, [])
 *     return (
 *
 *         <div className={s.account_interaction_menu} ref={profileRef}>
 *             <ul>
 *                 <NavLink to={`profile/${profileId}`}>
 *                     <li className={s.account_menu_btn}>Личный&#160;кабинет</li>
 *                 </NavLink>
 *                 <li onClick={logOut} className={s.account_exit_btn}>Выйти</li>
 *             </ul>
 *         </div>
 *
 *
 *     )
 * }*/