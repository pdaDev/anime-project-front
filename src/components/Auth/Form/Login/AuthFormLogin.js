import React, {useState} from "react";
import s from './../AuthForm.module.css'
import {SubmitButton} from "../../../../common/UI/Button/Submit/SubmitButton";
import {AuthForm} from "../AuthForm";
import {useForm} from "react-hook-form";
import {passwordValidator} from "../../../../utils/validators/validators";
import {ErrorMessage} from "../../../../common/UI/Other/ErrorMessage.styles";
import {PasswordInput} from "../../../../common/UI/Input/PasswordInput/PasswordInput";
import {CommonErrorMessage} from "../../../../common/UI/Other/CommonErrorMessage";
import {usePopap} from "../../../../utils/hooks/usePopap";

export const AuthFormLogin = ({onLinkClick, toggleSetOpen, login}) => {
    const [commonError, setCommonError] = useState(null)
    usePopap()
    const {register,reset,resetField, formState: {errors}, setError, handleSubmit}
        = useForm({mode: "onBlur", reValidateMode: 'onBlur'})
    const setSomeError = (error, time) => {
        setCommonError(error)
        setTimeout(() => setCommonError(null), time)
    }
    const onSubmit = (data) => {

        if (passwordValidator(data.password)) {
            resetField('password')
            setError('password', {type: 'custom', message: 'Неверный пароль'}, {shouldFocus: true})
        } else {
            login(data.login, data.password).then(data => {
                console.log(data)
                switch (data.resultCode) {
                    case 0: {
                        toggleSetOpen()
                        break
                    }
                    case 1: {
                        reset()
                        setSomeError('Неверный логин или пароль', 3000)
                        break
                    }
                    case 2: {
                       setSomeError('Пожалуйсте, повтори попытку позже', 3000)
                        break
                    }
                }
            })
        }
        }

    return (
        <AuthForm title = 'Вход' toggleSetOpen = {toggleSetOpen}>
            <form className={s.from_wrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.login_input}>
                    {commonError && <CommonErrorMessage message={commonError}/>}
                    <span className={s.form_content}>Логин</span>
                    <ErrorMessage  message={errors.login?.message}/>
                    <input className={s.login} type={'text'}
                        {...register('login', {required: 'Обязательное поле'})}
                    />
                </div>

                <div className={s.password_input}>
                    <span className={s.form_content}>Пароль</span>
                    <ErrorMessage message={errors.password?.message}/>
                    <PasswordInput className= {s.password}
                                  inputRegister = {register('password', {required: 'Обязательное поле'})}/>
                    <p className={s.form_content} style={{marginTop: '8px'}}>Нет аккаунта? <a onClick={onLinkClick} className={s.reg_link}>Зарегистрироваться</a></p>
                </div>
                <SubmitButton name = 'Войти'/>

            </form>
        </AuthForm>

    )
}