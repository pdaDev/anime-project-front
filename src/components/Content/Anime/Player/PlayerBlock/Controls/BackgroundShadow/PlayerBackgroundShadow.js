import styled from 'styled-components'

const Shadow = styled.div`

    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(black, black, black, 0.02);
  box-shadow: inset 0px 0px 250px 100px black;
  z-index: 0;
  pointer-events: none;
`


export const PlayerBackgroundShadow = () => {
    return <Shadow/>
}