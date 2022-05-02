import styled from 'styled-components'

const LinkWrapper = styled.div`
  height: 35px;
  padding: 3px 6px;
  box-sizing: border-box;
  display: inline-flex;
  width: auto;
  align-items: center;
  font-size: 150%;
  color: #976BD6;
  border: 3px solid #976BD6;
  border-radius: 10px;
  flex-grow: 1;
  justify-content: center;
  margin: 2px;
  grid-row: auto;
  
`
export const ContentLinksBlockItem = ({title}) => {
    return (
        <LinkWrapper>
            {title}
        </LinkWrapper>
    )
}