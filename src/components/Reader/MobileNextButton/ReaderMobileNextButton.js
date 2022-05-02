import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ChapterCircle} from "./MobileNextButton.styles";


export const ReaderMobileNextButton = ({nextChapter, mangaId}) => {
    const [progress, setProgress] = useState()
    const [isTouched, setIsTouched] = useState(false)
    const navigate = useNavigate()
    if (progress === 1 && isTouched) {
        {
            navigate(`/reader/${mangaId}/${nextChapter}`)
            setIsTouched(false)
        }
    }
    useEffect(() => {
        if( progress === 0 )
              document.body.style.overflow = 'scroll'
    }, [isTouched])

    useEffect(() => {
        let startY
        let limit = 500;
        const handleScroll = e => {
        }
        const handleMouseUp = () => {
            document.removeEventListener('touchmove', handleTouchMove)
            setProgress(0)
        }
        const handleMouseDown = e => {
            document.body.style.overflow = 'hidden'
            setIsTouched(true)
            startY = e.touches[0].screenY
            document.addEventListener('touchmove', handleTouchMove)
        }
        const handleTouchMove = e => {

            let delta = startY - e.touches[0].screenY

            if (delta >= 0){
                setProgress(Math.min(delta / limit, 1))
            }
            else
                setProgress(0)

        }

        document.addEventListener('touchend', handleMouseUp)
        document.addEventListener('scroll', handleScroll)
        document.addEventListener('touchstart', handleMouseDown)
        return () => {

            document.removeEventListener('touchstart', handleMouseDown)
            document.removeEventListener('touchend', handleMouseUp)
            document.removeEventListener('scroll', handleScroll)
        }
    }, [nextChapter])
    return (
        <>{isTouched && <ChapterCircle progress={progress}>{nextChapter}</ChapterCircle>}
        </>
    )


}