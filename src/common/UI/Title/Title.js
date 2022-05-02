import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
font-size: ${({size}) => size || '32'}px;
  display: inline-block;
  margin-right: ${({mRight}) => mRight || 15}px;
  color: ${({color}) => color || 'black'}
 
`

export const Title = ({message, ...props}) => {
    return (
        <StyledTitle {...props}>
            {message}:
        </StyledTitle>
    )
}