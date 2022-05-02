import styled, {keyframes} from "styled-components";


const middleLineAnimationOpen = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  } 
`
const middleLineAnimationClose = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

`
const topLineAnimationOpen = keyframes`
  0% {
    top: 0
  }
  50% {
    top: 50%;
    transform: translateY(-50%);
  }
  100% {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }`
const topLineAnimationClose = keyframes`
  0% {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  50% {
    top: 50%;
    transform: translateY(-50%);
  }
  100% {
    top: 0;
  }`
const bottomLineAnimationOpen = keyframes`
  0% {
    bottom: 0;
  }
  50% {
    bottom: 50%;
    transform: translateY(50%);
  }
  100% {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }`
const bottomLineAnimationClose = keyframes`
  0% {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
  50% {
    bottom: 50%;
    transform: translateY(50%);
  }
  100% {
    bottom: 0;
  }`

export default {
    topLineAnimationClose,
    topLineAnimationOpen,
    middleLineAnimationOpen,
    middleLineAnimationClose,
    bottomLineAnimationOpen,
    bottomLineAnimationClose
}