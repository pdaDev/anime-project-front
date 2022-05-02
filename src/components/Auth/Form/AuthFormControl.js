import React, {useState} from "react";
import AuthFormLogin from "./Login/AuthFromLogin.container";
import AuthFormRegister from "./Register/AuthFormRegister.container";
import {AnimatedComponent} from "../../../common/UI/Other/AnimatedComponent";

export const AuthFormControl = ({type, toggleSetOpen}) => {
    const [formType, setFormType] = useState(type)
    return (
        <>
            {formType==='REGISTER' && <AuthFormRegister toggleSetOpen={toggleSetOpen} onLinkClick={() => setFormType('SIGN-IN')} /> }
            {formType === 'SIGN-IN' &&  <AuthFormLogin toggleSetOpen={toggleSetOpen} onLinkClick={() => setFormType('REGISTER')}/>}
        </>
    )

}