import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import PortfolioInfo from './PortfolioModal';
import portfolios from '../../portfolio_data';
import { computeClassNames } from '../../helper';
import { Buttons, Space } from './CarouselButtons';
import { HomeButton } from '../Buttons';
import Spinner from '../Spinner';

const SMALL_WIDTH = '768px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH = '1248px';
const PADDING = 3;

const Container = styled.div`
  position: relative;
  height: ${({ innerHeight }) => `calc(${innerHeight}px - 4em)`};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 1em;
  opacity: 0;
  transform: translate(0, 300%);
  transition-property: opacity, transform;
  transition-delay: 0s;
  transition-duration: 0.33s;
  transition-timing-function: ease-in;
  &.active {
    opacity: 1;
    transform: translate(0, 0);
  }
  &.reverse {
    transform: translate(0, -300%);
  }
  @media (max-width: ${SMALL_WIDTH}) {
    margin: 0;
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  margin: auto 0;
  height: 60vh;
  z-index: 10;
  @media (max-width: ${SMALL_WIDTH}) {
    flex-wrap: wrap;
    height: 100%;
    &:before {
      content: none;
    }
    &:after {
      content: none;
    }
  }
`;

const CarouselInner = styled.div`
  width: calc(100vw - 4em);
  display: flex;
  opacity: 0;
  transform: ${({ $shift }) => `translate(${$shift}%, -125%)`};
  transition-property: opacity, transform;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  &.active {
    opacity: 1;
    transform: ${({ $shift }) => `translate(${$shift}%, 0)`};
  }
  &.shift-left {
    transform: ${({ $shift }) => `translate(${$shift - 50}%, 0)`};
  }
  @media (max-width: ${SMALL_WIDTH}) {
    flex-wrap: wrap;
    opacity: 1;
    transform: ${({ $shift }) => `translate(0, 25%)`};
    &.active {
      transform: ${({ $shift }) => `translate(0, 0)`};
    }
  }
`;

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

const openPortfolio = (top, offsetWidth, width) => keyframes`
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

const Portfolio = styled.div`
  position: relative;
  z-index: 1;
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
      animation: ${({ $inactive, $offsetTop, $offsetWidth, $width }) =>  !$inactive ? css`${openPortfolio($offsetTop, $offsetWidth, $width)} 1s ease-in-out 0s forwards` : ''};
      & > ${ImageWrapper} > img {
        transform: scale(1, 4);
        transition: transform 0.5s ease-in-out 0.5s;
      }
    }
    &.still {
      transform: ${({ $offsetTop, $offsetWidth, $width }) => `translate(calc(50% + 3em), calc(-${$offsetTop}px + 3em)) scale(2, 0.5)`};
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
      animation: ${({ $inactive, $offsetTop, $offsetWidth }) => !$inactive ? css`${openPortfolio($offsetTop, $offsetWidth)} 1s ease-in-out 0s reverse` : ''};
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
      animation: ${({ $inactive }) =>  $inactive ? css`${openPortfolioMobile()} 1s ease-in-out 0s forwards` : ''};
    }
    &.deactive {
      animation: ${({ $inactive }) =>  !$inactive ? css`${openPortfolioMobile(1)} 1s ease-in-out 0s reverse` : ''};
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

export default ({ active, innerHeight }) => {
  const [shift, setShift] = useState(0);
  const [shiftLeft, setShiftLeft] = useState(null);
  const [offsets, setOffsets] = useState({ $width: window.innerWidth });
  const [currPortfolio, setCurrPortfolio] = useState(null);
  const [animState, setAnimState] = useState(null);
  const [imgIsReady, setImgIsReady] = useState(0);
  const ref = useRef();

  const getOffsets = () => {
    setOffsets(() => {
      const { offsetWidth, offsetTop } = ref.current;
      return { $offsetWidth: offsetWidth / 4, $offsetTop: offsetTop, $width: window.innerWidth };
    });
  };

  useEffect(() => {
    if (!window.ResizeObeserver) getOffsets();
  }, [ref.current]);

  useEffect(() => {
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(entries => {
        if (entries[0].target === ref.current) getOffsets();
      });
      resizeObserver.observe(ref.current);
    } else {
      getOffsets();
    }
  }, []);

  const close = () => {
    const ele = document.getElementById('work');

    const closePortfolio = () => {
      if (!ele.scrollTop) {
        setAnimState('deactive');
        if (shiftLeft) setTimeout(() => setShiftLeft(null), 500);
        ele.removeEventListener('scroll', closePortfolio);
      } else {
        setTimeout(closePortfolio, 50);
      }
    };

    if (ele.scrollTo) {
      ele.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      ele.scrollTop = 0;
    }

    closePortfolio();
  };

  const isReady = active && imgIsReady === 2;

  return (
    <Container id='work' innerHeight={innerHeight}>
      {!isReady && active && <Spinner />}

      {animState && <HomeButton type='div' onClick={close} />}
      <Title className={computeClassNames({ active: isReady, reverse: animState })}>Work</Title>

      <Carousel ref={ref} id='carousel'>
        <Space {...{ left: true, active: isReady, animState, shift, onClick: () => setShift(0) }} />

        <CarouselInner
          className={computeClassNames({ active: isReady, 'shift-left': shiftLeft })}
          $shift={shift}>

          {portfolios.map((Work, idx) => {
            const portfolioRef = useRef();

            return (
                <Portfolio
                  key={idx}
                  ref={portfolioRef}
                  $inactive={animState === 'still'}
                  {...offsets}
                  className={currPortfolio === idx && animState}
                  onClick={() => {
                    if (!animState) {
                      // setShiftLeft(portfolioRef.current && portfolioRef.current.getBoundingClientRect().x / window.innerWidth > 0.5);
                      setShiftLeft((Math.abs(shift / 50) + idx) % 2);
                      setCurrPortfolio(idx);
                      setAnimState(() => (offsets.$width <= SMALL_WIDTH_INT) ? 'still' : 'active');
                    }
                  }}
                  onAnimationEnd={() => {
                    if (currPortfolio === idx) {
                      if (animState === 'active') setAnimState('still');
                      if (animState === 'deactive') {
                        setAnimState(null);
                        setCurrPortfolio(null);
                      }
                    }
                  }}>
                    <WorkTitle>{Work.title}</WorkTitle>
                    <ImageWrapper>
                      <Work.Image onLoad={() => setImgIsReady((curr) => (idx < 2) ? curr + 1 : curr)} />
                    </ImageWrapper>

                    {currPortfolio === idx && (
                      <PortfolioWrapper
                        className={animState && 'active'}>
                        <PortfolioInfo
                          {...offsets}
                          active={animState === 'still'}
                          reverse={animState === 'deactive'}
                          close={close}
                          portfolio={Work} />
                      </PortfolioWrapper>)}

                </Portfolio>
            )
          })}
        </CarouselInner>

        <Space {...{ active: isReady, animState, shift, onClick: () => setShift(-50) }} />
      </Carousel>

      <Buttons {...{ active: isReady, animState, shift, setShift }} />
    </Container>
  )
};
