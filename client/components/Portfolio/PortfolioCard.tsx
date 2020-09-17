import React, {
  useRef, FC,
} from 'react';
import styled, { css, keyframes } from 'styled-components';

import PortfolioInfo from './PortfolioInfo';

const SMALL_WIDTH = '768px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH = '1248px';
const PADDING = 3;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
`;

const WorkTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.25em;
  z-index: 5;
  opacity: 0;
  font-size: 5em;
  font-weight: 900;
  color: rgb(255,255,255);
  text-align: center;
  @media (max-width: ${MEDIUM_WIDTH}) {
    font-size: 2em;
  }
  &:after {
    content: "Read More";
    display: block;
    font-size: 0.5em;
    font-weight: bold;
  }
`;

const openPortfolio = (top, offsetWidth) => keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(calc(${offsetWidth}px), 0px);
  }
  100% {
    transform: translate(calc(50% + 3em), calc(-${top}px + 3em)) scale(2, 0.5);
  }
`;

const openPortfolioMobile = (shift = 0) => keyframes`
  from{
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, -${200 + shift}vh);
  }
`;

const shiftRight = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(calc(100% + ${2 * PADDING}em), 0);
  }
`;

const StyledPortfolio = styled.div`
  position: relative;
  height: 100%;
  width: calc(50% - ${2 * PADDING}em);
  margin: 0 ${PADDING}em;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0,0,0);
  cursor: pointer;
  transform-origin: top;
  &:not(.active):not(.still):not(.deactive):hover {
    & > ${ImageWrapper} {
      opacity: 0.8;
    }
    & > ${WorkTitle} {
      opacity: 1;
    }
  }
  @media (min-width: ${SMALL_WIDTH}) {
    &.active, &.still, &.deactive {
      cursor: auto;
      &:not(&.still) > ${WorkTitle} {
        display: none;
      }
    }
    &.active + & {
      animation: ${shiftRight} 0.5s ease-in-out 0s forwards;
    }
    &.still + & {
      transform: translate(calc(100% + ${2 * PADDING}em), 0);
    }
    &.deactive + & {
      transform: translate(calc(100% + ${2 * PADDING}em), 0);
      animation: ${shiftRight} 0.5s ease-in-out 0.5s reverse;
    }
    &.active {
      animation: ${({
    $inactive, $offsetTop, $offsetWidth,
  }) => (!$inactive ? css`${openPortfolio($offsetTop, $offsetWidth)} 1s ease-in-out 0s forwards` : '')};
      & > ${ImageWrapper} > img {
        transform: scale(1, 4);
        transition: transform 0.5s ease-in-out 0.5s;
      }
    }
    &.still {
      transform: ${({ $offsetTop }) => `translate(calc(50% + 3em), calc(-${$offsetTop}px + 3em)) scale(2, 0.5)`};
      & > ${ImageWrapper} > img {
        transform: scale(1, 4);
      }
      & > ${ImageWrapper} {
        opacity: 0.8;
      }
      & > ${WorkTitle} {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0.5, 2);
        transition-property: transform, opacity;
        transition-duration: 0.2s;
        transistion-timing-function: ease-in-out;
        &:after {
          content: "";
        }
      }
    }
    &.deactive {
      animation: ${({ $inactive, $offsetTop, $offsetWidth }) => (!$inactive ? css`${openPortfolio($offsetTop, $offsetWidth)} 1s ease-in-out 0s reverse` : '')};
      & > ${ImageWrapper} > img {
        transform: scale(1, 1);
        transition: transform 0.5s ease-in-out 0s;
      }
    }
  }
  @media (max-width: ${SMALL_WIDTH}) {
    width: 100%;
    height: 50vh;
    margin: 2em 0;
    & > ${ImageWrapper} {
      opacity: 0.8;
    }
    & > ${WorkTitle} {
      opacity: 1;
    }
    &.active {
      animation: unset;
    }
    &.still {
      animation: ${({ $inactive }) => ($inactive ? css`${openPortfolioMobile()} 1s ease-in-out 0s forwards` : '')};
    }
    &.deactive {
      animation: ${({ $inactive }) => (!$inactive ? css`${openPortfolioMobile(1)} 1s ease-in-out 0s reverse` : '')};
    }
  }
`;

const PortfolioWrapper = styled.div`
  opacity: 0;
  pointer-events: none;
  transform: scale(0);
  &.active {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
  }
`;

interface Card {
  Work: {};
  animState: string;
  offsets: {
    offsetWidth: number,
    offsetTop: number,
    width: number,
  };
  active: boolean;
  index: number;
  shift: number;
  close(): void;
  setShiftLeft(): void;
  setCurrPortfolio(): void;
  setAnimState(): void;
  setImgIsReady(): void;
}

const PortfolioCard: FC<Card> = ({
  Work, animState, offsets, active, index, shift, close, setShiftLeft, setCurrPortfolio, setAnimState, setImgIsReady,
}) => {
  const ref = useRef(null);

  return (
    <StyledPortfolio
      ref={ref}
      className={active && animState}
      $inactive={animState === 'still'}
      $offsetWidth={offsets.offsetWidth}
      $offsetTop={offsets.offsetTop}
      $width={offsets.width}
      onClick={() => {
        if (!animState) {
          // setShiftLeft(portfolioRef.current && portfolioRef.current.getBoundingClientRect().x / window.innerWidth > 0.5);
          setShiftLeft((Math.abs(shift / 50) + index) % 2);
          setCurrPortfolio(index);
          setAnimState(() => ((offsets.width <= SMALL_WIDTH_INT) ? 'still' : 'active'));
        }
      }}
      onAnimationEnd={() => {
        if (active) {
          if (animState === 'active') setAnimState('still');
          if (animState === 'deactive') {
            setAnimState(null);
            setCurrPortfolio(null);
          }
        }
      }}
    >
      <WorkTitle>{Work.title}</WorkTitle>
      <ImageWrapper>
        <Work.Image onLoad={() => setImgIsReady((curr) => ((index < 2) ? curr + 1 : curr))} />
      </ImageWrapper>

      {active && (
        <PortfolioWrapper
          className={animState && 'active'}
        >
          <PortfolioInfo
            width={offsets.width}
            active={animState === 'still'}
            reverse={animState === 'deactive'}
            close={close}
            portfolio={Work}
          />
        </PortfolioWrapper>
      )}

    </StyledPortfolio>
  );
};

export default PortfolioCard;
