import styled from "styled-components";

const Title = styled.h2`
  color: white;
  font-size: 32px;
  position: absolute;
  top: 20px;
  max-width: 80%;
  max-height: 80%;
  left: 20px;
`

export const PlayerEpisodeTitle = ({message}) => {
    return (
        <Title>
            {message}
        </Title>
    )
}