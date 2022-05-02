import React from "react";
import styled from 'styled-components'
import {CatalogGenresTitle} from "./GenreTitle/CatalogGenreTitle";

export const CatalogGenresList = ({genres, ...props}) => {
    console.log(genres)
    return (
        <div>
            <h2 style={{fontSize: "30px", display: 'inline-block'}}>{'Жанры:'}</h2>
            {' '}
            {genres.map((g, i) => <React.Fragment key={g}>
                <CatalogGenresTitle  name={g.name} commaNeed={i !== genres.length - 1}/>

            </React.Fragment>)}
        </div>
)
}
