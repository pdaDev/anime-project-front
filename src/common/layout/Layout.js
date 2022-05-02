import React, {useRef} from "react";
import styled from "styled-components";
import Header from "./Header/Header.container";
import {Footer} from "./Footer/Footer";
import {ScrollUpButton} from "../UI/Button/scrollUpButton/ScrollUpButton";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
`
const ContentWrapper = styled.div`
  position: relative;
  height: auto;
  flex-grow: 1;
        
`

export const Layout = ({children, readingStatus}) => {
    const footerRef = useRef(null)

    return (
        <LayoutWrapper>
            {!readingStatus && <Header/>}
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <ScrollUpButton footerRef={footerRef}/>
            {!readingStatus && <Footer footerRef={footerRef}/>}
        </LayoutWrapper>
    )
}