import React, {useEffect, useRef} from "react";
import s from './Footer.module.css'
export const Footer = ({footerRef}) => {
    return (
        <footer ref={footerRef} className={s.footer_wrapper}>

        </footer>
    )
}