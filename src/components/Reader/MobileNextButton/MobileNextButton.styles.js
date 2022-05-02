import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 3000px;
  background: red;

`
const Line = styled.div.attrs(props => ({
    style: {
        width: `${props.progress || 0}%`,
        transition: `${!props.progress ? 300 : 0}ms`
    }
}))`
  height: 20px;
  background: black;
`
export const ChapterCircle = styled.div.attrs(props => ({
    style: {
        transition: `${!props.progress ? 300 : 0}ms`,
        transform: `scale(${props.progress + 1}) translateY(-${props.progress * 50}px)`
    }
}))`

  width: 40px;
  border: 3px solid transparent;
  height: 40px;
  position: absolute;
  bottom: -40px;
  z-index: 10;
  box-sizing: border-box;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-right-color: ${props => props.progress > 0.25 && 'black'};
  border-bottom-color: ${props => props.progress > 0.5 && 'yellow'};
  border-left-color: ${props => props.progress > 0.75 && 'blue'};
  border-top-color: ${props => props.progress > 0.9 && 'green'};
`