import React from "react";
import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || 'center'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  flex-direction: ${({direction}) => direction};
  
`