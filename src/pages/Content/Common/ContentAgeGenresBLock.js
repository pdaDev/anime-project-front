import {AgeDistinctionItem} from "../../../common/UI/Other/AgeDistinctionItem";
import {GenresModule} from "../../../common/UI/Other/GenresModule/GenreModule";
import {Flex} from "../../../common/UI/Grid/Flex";
import React from "react";

export const ContentAgeGenresBLock = ({ageDistinction, genres, height}) => {
    return (
        <Flex style={{width: '80%', height: `${height || 40}px`}}>
            <AgeDistinctionItem age={ageDistinction}/>
            <GenresModule genres={genres}/>
        </Flex>
    )
}