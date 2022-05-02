import {useRef} from "react";

export const useTabOnItem = () => {

    const ref = useRef(null)
    const onInputKeyDown = e => {
        if (e.keyCode === 40) {
            e.target.blur()
            setTimeout(() => ref.current?.children[0].focus())
            e.preventDefault()
        }
    }
    const onItemKeyDown = e => {
        if (e.keyCode === 38) {
            e.target.blur()
            setTimeout(() => !e.target.previousElementSibling ? ref.current?.children[ref.current?.children.length - 1].focus() : e.target?.previousElementSibling?.focus())
            e.preventDefault()
        }
        if (e.keyCode === 40) {
            e.preventDefault()
            e.target.blur()
            setTimeout(() => !e.target?.nextElementSibling ? ref.current?.children[0].focus() : e.target?.nextElementSibling?.focus())
        }
    }
    return ({ref, onInputKeyDown, onItemKeyDown})
}