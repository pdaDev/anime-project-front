import styled from "styled-components";
import {StyledFilterForm} from "../../../../components/Сatalog/FilterForm/CatalogFilterForm";
import {FormOpenButton} from "../../../../components/Сatalog/FilterForm/OpenButton/FormOpenButton";
import {useToggle} from "../../../../utils/hooks/useToggle";
import React from "react";
import {ContentChooseFormItem} from "./Item/ContentChooseFormItem";
import {CurrentContentMark} from "./CurrentContentMark/CurrentContentMark";



const Content = styled.div`
  z-index: 1337;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: #C4C4C4;
    border-radius: 5px;
    
  }
  &::-webkit-scrollbar-thumb {
    background: #976BD6;
    border-radius: 10px;
  }
`

const Form = styled(StyledFilterForm)`

  height: 900px;
  left: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  padding-right: 5px;
  

`
export const AnimeContentChooseForm = ({content, getRelatedContent}) => {
    const [isOpen, toggleOpen] = useToggle(false)
    return (
        <Form basicPos={-102} isOpen={isOpen}>
            <Content>
                {content.map(c => <ContentChooseFormItem type={c.type}
                                                         dateOfRelease={c.dataOfRelease}
                                                         title={c.title}
                                                         episodes={c.countOfEpisodes}
                                                         image={c.image}
                                                         key={c.id}
                                                         id={c.id}
                                                         status={c.status}
                                                         elements={c.related}
                                                         countOfRelated ={c.countOfRelatedContent}
                                                         rate={c.rate}
                                                         getRelatedContent={getRelatedContent}
                />)}
            </Content>
            <FormOpenButton isOpen={isOpen}
                            toggleOpen={toggleOpen}
                            options={{borderRadius: 20}}/>
            <CurrentContentMark title={'Сезон 1'}/>
        </Form>
    )
}

