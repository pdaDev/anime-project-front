import React, {useState} from "react";
import s from "../AuthForm.module.css";
import {SubmitButton} from "../../../../common/UI/Button/Submit/SubmitButton";
import {AuthForm} from "../AuthForm";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "../../../../common/UI/Other/ErrorMessage.styles";
import {passwordValidator} from "../../../../utils/validators/validators";
import {CommonErrorMessage} from "../../../../common/UI/Other/CommonErrorMessage";
import {usePopap} from "../../../../utils/hooks/usePopap";

export const AuthFormRegister =({onLinkClick, toggleSetOpen, registerUser}) => {
    const {register, watch, handleSubmit, formState: {errors, isValid},resetField,setError, reset}
        = useForm({mode: 'onBlur', reValidateMode: 'onBlur'})
    const password = watch('password')
    usePopap()
    const [commonError, setCommonError] = useState(null)
    const setSomeError = (error, time) => {
        setCommonError(error)
        setTimeout(() => setCommonError(null), time)
    }
    const onSubmit = (data) => {
           registerUser(data.login, data.password).then(
            resultCode => {
                switch (resultCode) {
                    case 0: {
                        toggleSetOpen()
                        break
                    }
                    case 1: {
                        reset()
                        setError('login', {type: 'custom', message: 'Данные пользователь уже существует'},{shouldFocus: true})
                        break
                    }
                    case 2: {
                        setSomeError('Пожалуйста, повтори попытку позже', 3000)
                        break
                    }

                }
            }
        )
    }
    return (
        <AuthForm title='Регистрация' toggleSetOpen={toggleSetOpen}>
            <form className={s.from_wrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.login_input}>
                    {commonError && <CommonErrorMessage message={commonError}/>}
                    <span className={s.form_content}>Логин</span>
                    <ErrorMessage message={errors.login?.message}/>
                    <input {...register('login',
                        { required: 'Обязательное поле'})}
                           className={s.login} type={'text'}
                           autoComplete={'off'}
                    />
                </div>
                <div className={s.password_input}>
                    <span className={s.form_content}>Пароль</span>
                    <ErrorMessage message={errors.password?.message}/>
                    <input {...register('password',
                        { required: 'Обязательное поле',
                        validate: passwordValidator
                        })}
                           type="text" className= {s.password}
                           autoComplete={'off'}
                    />
                    <span className={s.form_content}>Повторите пароль</span>
                    <ErrorMessage message={errors.repeatPassword?.message}/>
                    <input type="text" className= {s.password}
                           autoComplete={'off'}
                           {...register('repeatPassword',
                               {required: 'Обязательное поле',
                                   validate: value => {
                                   if (value !== password)
                                       return 'Пароли должны совпадать'
                                   }
                    })}/>
                    <p className={s.form_content} style={{marginTop: '8px'}}>Уже есть аккаунт? <a onClick={onLinkClick} className={s.reg_link}>
                            Войти
                        </a>
                    </p>
                </div>
                <SubmitButton name = 'Зарегистрироваться'/>
            </form>
        </AuthForm>

    )
}