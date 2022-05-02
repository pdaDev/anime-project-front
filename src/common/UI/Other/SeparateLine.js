import React from "react";
import styled from "styled-components";

export const SeparateLine = styled.div`
  width: ${props => props.width ?? 100}%;
  height: ${props => props.height ?? 8}px;
  margin-top: ${props => props.mTop ?? 10}px;
  margin-bottom: ${props => props.mBottom ?? 10}px;
  padding: 0 ${props => props.padding ?? 0}px;
  background: ${props => props.backgorund ?? '#FF4940'};
`