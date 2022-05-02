import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-start;
  padding-left: 30px;
  z-index: 1;
  top: 50%;
  left: 100%;
  transform-origin: left;
  transform: rotate(90deg) translateY(-50%);


`
const Title = styled.div`
  padding: 0 40px 0 10px;
  display:inline-flex;
  align-items: center;
  background: #976BD6;
  border-radius: 15px;
  transform-origin: center;
  color: white;
  font-size: 27px;
  transform: rotate(180deg);
  height: inherit;

  

`

export const CurrentContentMark = ({title}) => {
    return (
        <Wrapper>
            <Title>
                {title}
            </Title>


        </Wrapper>
    )
}
//