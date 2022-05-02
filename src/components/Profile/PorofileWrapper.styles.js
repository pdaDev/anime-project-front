import React from 'react'
import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: grid;
  width: 70%;
  grid-column-gap: 40px;
  grid-row-gap: 65px;
  box-sizing: border-box;
  grid-template-areas: 
          'info extra extra'
          'list list list'
;
`
