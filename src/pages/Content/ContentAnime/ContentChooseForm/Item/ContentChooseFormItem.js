import styled from "styled-components";
import {Image} from "../../../../../common/UI/Image/Image";
import {ContentSpecialInfo} from "../../../../../components/Content/common/SpecialInfo/ContentSpecialInfo";
import {useMemo, useState} from "react";
import {EmptyButton} from "../../../../../common/UI/Button/EmptyButton.styles";
import {Arrow} from "../../../../../common/UI/Other/Arrow";
import {Space} from "../../../../../common/UI/Other/Space";
import {useSingleToneFunction} from "../../../../../utils/hooks/useSingleToneFunction";


const Wrapper = styled.div`
  background: white;
  position: relative;
  filter: drop-shadow(3px 5px 7px rgba(0, 0, 0, 0.25));
  width: 100%;
  height: 200px;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  margin-top: 25px;
  overflow: hidden;
  

  &:first-child {
    margin-top: 0;
  }
`

const Title = styled.h2`
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 15px;
  background: #F43939;
  display: inline-block;
  color: white;

`

export const ContentChooseFormItem = ({
                                          image,
                                          id,
                                          rate,
                                          title,
                                          type,
                                          dateOfRelease,
                                          episodes,
                                          status,
                                          elements,
                                          countOfRelated,
                                          getRelatedContent,
                                      }) => {
    const data = useMemo(() => {
        const data = new Map()
        data.set('Тип', type)
        data.set('Статус', status)
        data.set('Эпизодов', episodes)
        data.set('Год', dateOfRelease)
        return data
    }, [type, status, episodes, dateOfRelease])
    const getRelatedData = useSingleToneFunction(() => getRelatedContent(id))
    const [isRelatedOpen, setIsRelatedOpen] = useState(false)
    const toggleRelatedContent = () => {
        getRelatedData()
        setIsRelatedOpen(!isRelatedOpen)
    }

    return (
        <>
            <Wrapper>
                <ImageWrapper>
                    <Image image={image}/>
                </ImageWrapper>

                <div>
                    <Title>{title}</Title>
                    <ContentSpecialInfo data={data}
                                        fontSize={20}
                                        paddingTop={2}
                                        paddingRight={40}
                    />
                </div>
                {countOfRelated > 0 && <SpreadRelatedButton onClick={toggleRelatedContent}>
                    <Arrow color={'white'}/>
                    <Space width={30}/>
                    <h4>Связанное</h4>
                </SpreadRelatedButton>}
            </Wrapper>
            {isRelatedOpen && <RelatedELementsWrapper>
                {elements.map(item => <RelatedElItem key={item.id}
                                                     id={item.id}
                                                     type={item.type}
                                                     dateOfRelease={item.dateOfRelease}
                                                     title={item.title}
                />)}
            </RelatedELementsWrapper>}

        </>

    )
}
const ImageWrapper = styled.div`
  width: auto;
  height: 100%;
  margin-right: 10px;
`

const AddText = styled.h4`

`
const SpreadRelatedButton = styled(EmptyButton)`
  position: absolute;
  width: 180px;
  background: #F43939;
  border-radius: 15px;
  height: 50px;
  color: white;
  font-size: 22px;
  bottom: -15px;
  right: -115px;
  box-sizing: border-box;
  padding: 0 15px 15px 0;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;
  overflow: hidden;
  transition: 300ms;

  &:hover {
    right: -15px;
  }
`


const RelatedELementsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

`


const RelatedElItemWrapper = styled.div`
  width: 90%;
  transition: 200ms;
  background: seashell;
  &:hover {
    width: 100%;
  }
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;

`
const RelatedElItem = ({id, type, title, dateOfRelease}) => {
    return <RelatedElItemWrapper>
        <h3>{title}</h3><h3>{dateOfRelease}</h3>
    </RelatedElItemWrapper>
}