import React, {useState} from 'react'
import s from './AuthForm.module.css'

export const AuthForm = ({children, title, toggleSetOpen}) => {
    return (
        <main className={s.main_active}>
            <div className={s.login_wrapper}>
                <button onClick={toggleSetOpen} className={s.close_btn}>&#10006;</button>
                <div className={s.reg_form}>
                    <h1>{title}</h1>
                    <hr/>
                    {children}
                    <div className={s.violet_circle_log}/>
                    <div className={s.pink_circle_log}/>
                </div>
            </div>
        </main>)
}

