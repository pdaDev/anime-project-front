import React from "react";
import styled from "styled-components";
const StyledAgeDistinctionItem = styled.div`
  background: ${({age}) => {
      switch (age) {
        case 18: 
            return '#FF4940'
        case 16:
            return '#BE008A'
        case 12:
            return '#510FAD'
      }
  }};
  min-width: 30px;
  padding: 4px 6px;
  border-radius: 6px;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 150%;
  box-sizing: border-box;
  user-select: none;
`
export const AgeDistinctionItem = ({age, ...props}) => {
    return (
        <StyledAgeDistinctionItem age={age} {...props}>
            {age}+
        </StyledAgeDistinctionItem>
    )
}