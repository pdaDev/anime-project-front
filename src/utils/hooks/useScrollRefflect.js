import {useEffect} from "react";

export const useScrollReflect = (condition, func,  altertnativeFunc = () => {} ) => {
    useEffect(() => {
        const handleScroll = e => {
            const scrollHeight = e.target.documentElement.scrollHeight
            const scrollTop = e.target.documentElement.scrollTop
            const height = window.innerHeight
            condition(scrollHeight,scrollTop, height) ? func() : altertnativeFunc()
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })
}