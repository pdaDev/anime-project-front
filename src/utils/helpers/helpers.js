import {set} from "react-hook-form";

export const addCheckedProperty = (array, defaultValue = false) => {
    return array.map(i => ({...i, checked: defaultValue}))
}
export const addCheckedPropertyForObject = (obj, defaultValue = false) => {
    const copy = {...obj}
    Object.keys(copy).forEach(x => copy[x] = addCheckedProperty(copy[x]))
    return copy
}
export const debounce = (func, time = 100) => {
    let timer
    return e => {
        clearTimeout(timer)
        timer = setTimeout(func, time, e)
    }

}
export const isMobileDevice = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

export const singleToneFunction = (func, time = 100) => {
    let timer
    let isTouched = false
    return e => {
        clearTimeout(timer)
        if (!isTouched) {
            func(e)
            isTouched = true
        }
        timer = setTimeout(() => isTouched = false, time)
    }
}

export const convertTime = (timeInSeconds) => {
    const time = {
        sec: null,
        min: null,
        hours: null
    }
    time.hours = Math.floor(timeInSeconds / 3600)
    time.min = Math.floor((timeInSeconds - time.hours * 3600) / 60)
    time.sec = timeInSeconds - time.min * 60 - time.hours * 3600
    return time
}