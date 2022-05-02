import {useEffect, useLayoutEffect, useState} from "react";
import styled from 'styled-components'
import asuke from './../../../assets/images/asuka.png'
import {Preloader} from "../Preloader/Preloader";
import {StyledImage} from "../Other/ContentImage";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const PreloaderWrapper = styled.div`
    position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  background: transparent;
  transform: translate(-50%, -50%);
`

export const Image = ({image, PreloaderComponent = Preloader}) => {
    const [isFetching, setIsFetching] = useState(false)
    const [timer, setTimer] = useState(null)
    useLayoutEffect(()=> {
        setTimer(setTimeout(() => setIsFetching(true)))
    }, [])
    return (
        <Wrapper>
            {isFetching &&
                <PreloaderWrapper>
                    <PreloaderComponent/>
                </PreloaderWrapper>
            }
            <StyledImage src={image}
                        onLoad={({currentTarget}) => {
                            clearTimeout(timer)
                            setIsFetching(false)
                        }}
                        onError={({currentTarget}) => {
                            setIsFetching(false)
                            currentTarget.onerror = null
                            currentTarget.src = asuke
                        }}

                        />
        </Wrapper>
    )

}

/**
 * */