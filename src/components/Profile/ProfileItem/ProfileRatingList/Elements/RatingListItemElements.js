import React from "react";
import styled from "styled-components";
import {RatingListIElement} from "./RatingListElement/RatingListIElement";

const ELementsWrapper = styled.div`
display: flex;
  align-items: flex-end;
  flex-direction: column;
  
`

export const RatingListELements = ({elements, title}) => {
    return (
        <ELementsWrapper>
            {elements?.map(x => <RatingListIElement rate={x.rate}
                                                    name={x.name}
                                                    type={x.type}
                                                    season={x.season}
                                                    title={title}
            />)}
        </ELementsWrapper>
    )

}