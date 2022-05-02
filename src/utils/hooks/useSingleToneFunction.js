import {useCallback, useState} from "react";

export const useSingleToneFunction = (func, callbackDependencies = []) => {
    let isUsed = false
    return useCallback(() => {
        if (!isUsed) {
            isUsed = true
            func()
        }
    }, [...callbackDependencies])
}