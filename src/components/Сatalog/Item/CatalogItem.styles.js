import React from "react";
import styled from 'styled-components'

export const StyledCatalogItem = styled.div`
  padding: 14px;
  max-width: 600px;
  min-width: 400px;
  height: 300px;
  margin: 12px;
  background-color: white;
  filter: drop-shadow(3px 5px 7px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: flex-start;
  transition: linear 0.2s;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    transform: scale(1.01);
    transition: linear 0.2s;
  }

`