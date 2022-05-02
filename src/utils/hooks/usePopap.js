import {useEffect} from "react";
import {appActions} from "../../store/App/App.actions";
import {useDispatch} from "react-redux";

export const usePopap = () => {
    useEffect(() => {
        const paddingSize = window.innerWidth - document.body.clientWidth
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = `${paddingSize}px`
        return () => {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = `0px`
        }
    })
}