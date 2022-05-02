import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {CatalogItem} from "../Item/CatalogItem";
import {useScrollReflect} from "../../../utils/hooks/useScrollRefflect";

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
`
const ListWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

`

export const CatalogList = ({items, addItems}) => {

    useScrollReflect(
        (scrollHeight, scrollTop, height) =>
            scrollHeight - (scrollTop + height) < 80,
        () => addItems()
    )

    return (
        <ListWrapper>
            <StyledList>
                {items.map(item => <CatalogItem
                    description={item.description}
                    genres={item.genres}
                    title={item.title}
                    ageDistinction={item.ageDistinction}
                    img={item.img}
                    rate={item.rate}
                    key={item.id}
                    mangaId={item.mangaId}
                    id={item.id}
                    content={item.content}
                />)}

            </StyledList>
        </ListWrapper>

    )
}