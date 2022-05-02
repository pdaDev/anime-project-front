import styled from 'styled-components'
import {ContentLinksBlockItem} from "./ContentLink/ContetLinksBlockItem";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;

`


export const CatalogItemContentLinksBlock = ({content}) => {
    return (
        <Wrapper>
            {content.map(c => <ContentLinksBlockItem title={c.title}/>)}
        </Wrapper>
    )
}


