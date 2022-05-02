import React from "react";

import styled from 'styled-components'

export const ContentWrapper = styled.div`
  width: 100%;
 height: 100%;
  display: flex;
  background: ${props=> props.grey && '#FBFBFB'};
  justify-content: center;
  align-items: flex-start;
  padding-bottom: ${props => props.pBottom || 0};
  padding-top: ${props => props.pTop || 0};
`