import React from "react";
import styled from "styled-components";
import {Transition} from "react-transition-group";

const StylesAnimatedComponent = styled.span`
  transition: ${props => props.timeout}ms;
  opacity: ${({state}) => {
    switch (state) {
      case 'entering':
        return 1
      case 'entered':
        return 1
      case 'exiting':
        return 0
      case 'exited':
        return 0
    }
  }
  }
`

export const AnimatedComponent = ({timeout, children, isOpen}) => {
    return (
        <Transition in={isOpen} timeout={timeout} mountOnEnter unmountOnExit>
            {state => <StylesAnimatedComponent state={state} timeout={timeout}>
                {children}
            </StylesAnimatedComponent>}
        </Transition>
    )
}