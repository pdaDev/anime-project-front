import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Profile from "./Profile/Profile.container";
import Header from "../common/layout/Header/Header.container";
import Content from "../components/Content/Content.container";
import ContentAnime from "./Content/ContentAnime/ContentAnime.container";
import ContentManga from "./Content/ContentManga/ContentManga.container";
import Reader from './Reader/Reader.container'
import {GlobalStyles} from "../common/layout/GlobalStyles";

import Catalog from "./Catalog/Catalog.container";
import {Layout} from "../common/layout/Layout";
import {useSelector} from "react-redux";
import {store} from "../store/rootReducer";

export const RootRouter = () => {
    const readingStatus = useSelector((state) => state.app.isReading)
    return (
        <>
            <GlobalStyles/>
            <Layout readingStatus={readingStatus}>
                <Routes>
                    <Route path={'/'} element=<Navigate to='/catalog'/>/>
                    <Route path={'/catalog'} element=<Catalog/> />
                    <Route path={'/profile/:id'} element=<Profile/>/>
                    <Route path={'/content/anime/:animeId/:contentId'} element=<ContentAnime/>/>
                    <Route path={'/content/manga/:id'} element=<ContentManga/>/>
                    <Route path={'/reader/:mangaId/:chapterId'} element=<Reader/>/>
                </Routes>
            </Layout>

        </>

    )

}

/**
 *
 * <Route path={'/content/:manga/:id'} element =<></>/>
 */