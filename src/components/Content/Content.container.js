import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

const ContentContainer = () => {
    const {type, id} = useParams()
    useEffect(() => {

    },[])
    switch (type) {
        case 'manga': {
            return
        }
        case 'anime': {
            return;
        }

    }

}
export default ContentContainer
