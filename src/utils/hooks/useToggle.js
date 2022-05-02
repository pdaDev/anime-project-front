import React, {useState} from "react";

export const useToggle = (initState) => {
    const [state, setState] = useState(initState)
    const toggle = () => setState(!state)
    return [state, toggle]
}