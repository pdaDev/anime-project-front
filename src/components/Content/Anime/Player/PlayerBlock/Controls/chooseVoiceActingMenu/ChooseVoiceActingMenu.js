import React, {useState} from "react";
import styled from "styled-components";
import {BurgerMenuButton} from "../../../../../../../common/UI/Button/burgerMenuButton/BurgerMenuButotn";
import {EmptyButton} from "../../../../../../../common/UI/Button/EmptyButton.styles";

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`
const ContentBlock = styled.div`
  min-width: 280px;
  border: 3px solid white;
  min-height: auto;
  background: rgba(40, 40, 40, 0.34);
  position: absolute;
  top: 70px;
  right: 0;
`
const ButtonWrapper = styled.div`
    
    float: right;
`
const Item = styled(EmptyButton)`
  width: 100%;
  height: 50px;
  background: ${props => props.active && '#FF4940'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  color: white;
  cursor: pointer;
  
`

export const ChooseVoiceActingMenu =({availableVoiceActors, setCurrentVoiceActors, chosenActor}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <Wrapper>
            <ButtonWrapper>
                <BurgerMenuButton isOpen={isMenuOpen}
                                  setIsOpen={setIsMenuOpen}
                                  option={{color: 'white', width: 40,
                                      height: 30, lineWeight: 5}}
                />
            </ButtonWrapper>

            {isMenuOpen && <ContentBlock>
                {[...availableVoiceActors].map(x => <Item key={x.id}
                                                          active={chosenActor === x.id}
                                                          onClick={() => setCurrentVoiceActors(x.id)}
                >{x.name}</Item>)}
            </ContentBlock>}
        </Wrapper>
    )

}