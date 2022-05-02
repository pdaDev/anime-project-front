import React from 'react'
import {GenreItem} from "../../../common/UI/Other/GenresModule/GenreItem";
import {StyledCatalogItem} from "./CatalogItem.styles";
import CatalogItemDescription from "./Description/CatalogItemDescription";
import {RateItem} from "../../../common/UI/Other/RateItem";
import {CatalogItemTitle} from "./Title/CatalogItemTitle";
import {CatalogItemImage} from "./Image/CtalogItemImage";
import {AgeDistinctionItem} from "../../../common/UI/Other/AgeDistinctionItem";
import {CatalogItemMangaIcon} from "./MangaIcon/CatalogItemMangaIcon";
import {NavLink} from "react-router-dom";
import {GenresModule} from "../../../common/UI/Other/GenresModule/GenreModule";
import {ContentAgeGenresBLock} from "../../../pages/Content/Common/ContentAgeGenresBLock";
import {Flex} from "../../../common/UI/Grid/Flex";
import {CatalogItemContentLinksBlock} from "./ContentLinksBlock/CatalogItemContentLinksBlock";

export const CatalogItem = ({description, genres, title, ageDistinction, img, rate, mangaId, id, content}) => {
    return (
        <NavLink to={`/content/anime/${id}/1`}>
            <StyledCatalogItem>

                <RateItem rate={rate}/>
                <CatalogItemImage image={img}/>
                <div style={{height: 'inherit'}}>
                    <CatalogItemTitle title={title}/>
                    <Flex justifyContent={'space-between'}>
                        <ContentAgeGenresBLock ageDistinction={ageDistinction} genres={genres}/>
                        {mangaId && <CatalogItemMangaIcon id={mangaId}/>}
                    </Flex>
                    <CatalogItemContentLinksBlock content={content}/>
                </div>

            </StyledCatalogItem>
        </NavLink>
    )
}