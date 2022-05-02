import styled, {css} from "styled-components";
import {EmptyButton} from "../../../../../../../common/UI/Button/EmptyButton.styles";
import {useState} from "react";
import {Flex} from "../../../../../../../common/UI/Grid/Flex";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #282828;
  position: absolute;
  top: 0;
  z-index: 100;
  left: 0;
  justify-content: center;
  align-items: center;
  display: ${props => props.action === 'hide' ? 'none' : 'flex'};
`
const ButtonWrapper = styled(EmptyButton)`

  width: 200px;
  height: 50px;
  border: 4px solid white;
  color: white;
  margin: 0 10px;
  font-size: 170%;
  ${prop => prop.type === 'accept' && css`
    border: 0;
    background: #F43939;
  `}
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translate(-50%, -50%);

`
const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: 50px;
  margin-bottom: 20px;
`

export const AgeDistinctionProtector = () => {
    const [action, setAction] = useState('show')
    const close = () => setAction('hide')
    const forbid = () => setAction('forbid')
    return (
        <Wrapper action={action}>
            <ContentWrapper>
                {
                    action === 'forbid'
                        ? <>
                            <Title>
                                Простите, но нужно еще <span style={{color: '#F43939'}}> повзрослеть</span>
                            </Title>
                        </>
                        : <>
                            <Title>
                                Вам уже есть <span style={{color: '#F43939'}}>18</span>?
                            </Title>
                            <Flex justifyContent={'space-between'}>
                                <ButtonWrapper onClick={forbid}>
                                    НЕТ
                                </ButtonWrapper>
                                <ButtonWrapper type='accept' onClick={close}>
                                    ДА
                                </ButtonWrapper>
                            </Flex>
                        </>}
                }



            </ContentWrapper>


        </Wrapper>
    )
}