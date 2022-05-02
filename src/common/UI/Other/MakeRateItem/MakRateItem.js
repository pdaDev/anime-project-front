import React, {useState} from "react";
import {Star} from "./Star";

export const MakRateItem = ({maxRate, starProperties, makeRate}) => {
    const [currentRate, setCurrentRate] = useState(0)
    return (
        <>
            {Array.apply(null, new Array(maxRate)).map((x, i) => <Star
                onMouserOverEvent={setCurrentRate}
                handleStarClick={makeRate}
                number={i + 1} key={i}
                title={i + 1}
                active={i < currentRate}
                starProperties={starProperties}
            />)}
        </>
    )
}
