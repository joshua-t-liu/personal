import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { PortfolioDesktop, PortfolioMobile } from './PortfolioModal';
import portfolios from '../portfolio_data';
import { LeftArrow, RightArrow, HomeButton } from './Buttons';
import { computeClassNames } from '../helper';

const SMALL_WIDTH = '768px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  position: relative;
  height: calc(100vh - 4em);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  &.stop-animations * {
    animation: none !important;
    transistion: none !important;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 1em;
  opacity: 0;
  transform: translate(0, 300%);
  transition-property: opacity, transform;
  transition-delay: 0s, 0s;
  transition-duration: 0.33s, 0.33s;
  transition-timing-function: ease-in, ease-in;
  &.active {
    opacity: 1;
    transform: translate(0, 0);
  }
  @media (max-width: ${SMALL_WIDTH}) {
    margin: 0;
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const PADDING = 3;

const Carousel = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  margin: auto 0;
  height: 60vh;
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

const Space = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left ? `-${PADDING}em` : null};
  right: ${({ left }) => !left ? `-${PADDING}em` : null};
  height: 100%;
  width: ${() => `${2 * PADDING}em`};
  background-color: rgb(255,255,255);
  z-index:10;
  opacity: 0;
  transition: opacity 0.1s 0.5s ease-in-out;
  &.active {
    opacity: 1;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    display: none;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CarouselInner = styled.div`
  width: calc(100vw - 4em);
  display: flex;
  visibility: hidden;
  opacity: 0;
  transform: ${({ $shift }) => `translate(${$shift}%, -125%)`};
  transition-property: opacity, transform;
  transition-delay: 0s, 0s;
  transition-duration: 0.25s, 0.5s;
  transition-timing-function: ease-in, ease-in-out;
  &.active {
    visibility: visible;
    opacity: 1;
    transform: ${({ $shift }) => `translate(${$shift}%, 0)`};
    transition-duration: 0.25s, 0.5s;
  }
  &.shift-left {
    transform: ${({ $shift }) => `translate(${$shift - 50}%, 0)`};
    transition-duration: 0.25s, 0.5s;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    flex-wrap: wrap;
    visibility: visible;
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
  width: calc(100% - 0.5em);
  padding: 0.25em;
  z-index: 5;
  visibility: hidden;
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

const openPortfolio = (top) => keyframes`
  0% {
    width: calc(50% - ${2 * PADDING}em);
    height: 100%;
    margin: 0 ${PADDING}em;
    transform: translate(0px, 0px);
  }
  50% {
    margin-right: 50%;
    margin-left: calc(25% + ${PADDING}em + 1em);
    width: 50%;
    height: 100%;
    transform: translate(0px, 0px);
    padding: 0;
  }
  100% {
    transform: translate(0, calc(-${top}px + 3em));
    width: calc(100vw - 20em);
    padding: 0 10em;
    margin-left: -2em;
    height: 50%;
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
  background: linear-gradient(rgb(0,0,0), rgb(0,0,0));
  cursor: pointer;
  &:not(.active):not(.still):not(.deactive):hover {
    & > ${ImageWrapper} {
      opacity: 0.8;
    }
    & > ${WorkTitle} {
      visibility: visible;
    }
  }
  @media (min-width: ${SMALL_WIDTH}) {
    &.active, &.still, &.deactive {
      cursor: auto;
      background: linear-gradient(transparent, transparent);
    }
    &.active {
      animation: ${({ $inactive, $top }) =>  !$inactive ? css`${openPortfolio($top)} 1s ease-in-out 0s forwards` : ''};
    }
    &.still {
      width: calc(100vw - 20em);
      padding: 0 10em;
      margin-left: -2em;
      height: 50%;
      transform: ${({ $inactive, $top }) => $inactive ? `translate(0, calc(-${$top}px + 3em))` : ''};
    }
    &.deactive {
      animation: ${({ $inactive, $top }) => !$inactive ? css`${openPortfolio($top)} 1s ease-in-out 0s reverse` : ''};
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
      visibility: visible;
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

const Buttons = styled.div`
  display: flex;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-timing-function: ease-in;
  margin-top: 1em;
  &.active {
    opacity: 1;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    display: none;
  }
`;

const Button = styled.div`
  position: relative;
  margin: 1em 0.25em;
  cursor: pointer;
  width: 2em;
  height: 0.2em;
  background-color: rgb(192,192,192);
  &.active {
    background-color: rgb(74,74,74);
  }
`;

export default ({ active }) => {
  const [shift, setShift] = useState(0);
  const [shiftLeft, setShiftLeft] = useState(null);
  const [offsetTop, setoffsetTop] = useState({});
  const [offsetHeight, setoffsetHeight] = useState({});
  const [width, setWidth] = useState(window.innerWidth);

  const [activePortfolio, setActivePortfolio] = useState(null);
  const [still, setStill] = useState(true);
  const [deactivePortfolio, setDeactivePortfolio] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const refresh = () => {
      requestAnimationFrame(refresh);
      setoffsetTop(ref.current.offsetTop);
      setoffsetHeight(ref.current.offsetHeight);
      setWidth(window.innerWidth);
    }
    refresh();
  }, []);

  const close = () => {
    setActivePortfolio(null);
    setDeactivePortfolio(activePortfolio);
    setStill(null);
    if (shiftLeft) setTimeout(() => setShiftLeft(null), 500);
  };

  return (
    <Container id='work'>

      {activePortfolio !== null && <HomeButton type='div' onClick={close} />}

      <Title className={active ? 'active' : ''}>Work</Title>

      <Carousel ref={ref} id='carousel'>

        <Space left={true} className={active && activePortfolio === null ? 'active' : ''}>
          <ArrowContainer>
            <LeftArrow active={active && shift} onClick={() => setShift(0)} />
          </ArrowContainer>
        </Space>

        <CarouselInner
          className={computeClassNames({
            active,
            'shift-left': shiftLeft,
          })}
          $shift={shift}>
          {portfolios.map((Work, idx) => {
            const portfolioRef = useRef();

            return (
                <Portfolio
                  key={idx}
                  ref={portfolioRef}
                  $inactive={still !== null}
                  $top={offsetTop}
                  className={computeClassNames({
                    'active': activePortfolio === idx && still !== idx,
                    'still': still === idx,
                    'deactive':deactivePortfolio === idx,
                  })}
                  onClick={() => {
                    if (activePortfolio === null) {
                      setStill(null);
                      setShiftLeft(portfolioRef.current && portfolioRef.current.getBoundingClientRect().x / window.innerWidth > 0.5);
                      setActivePortfolio(idx);
                      if (width <= SMALL_WIDTH_INT) setStill(idx);
                    }
                  }}
                  onAnimationEnd={() => {
                    if (activePortfolio === idx) setStill(idx);
                    if (deactivePortfolio === idx) setDeactivePortfolio(null);
                  }}>
                    <WorkTitle>{Work.title}</WorkTitle>
                    <ImageWrapper>
                      <Work.Image />
                    </ImageWrapper>
                </Portfolio>
            )
          })}
        </CarouselInner>

        <Space className={(active && activePortfolio === null) && 'active'}>
          <ArrowContainer>
            <RightArrow active={active && !shift} onClick={() => setShift(-50)}/>
          </ArrowContainer>
        </Space>

      </Carousel>
      {parseInt(still) > -1 && width > SMALL_WIDTH_INT && <div style={{ marginTop: `calc(3em - ${offsetTop}px - ${offsetHeight / 2}px)`, height: '100%' }}>
            <PortfolioDesktop reverse={activePortfolio === null} portfolio={portfolios[parseInt(still) > -1 ? still : deactivePortfolio]} />
          </div>}

      {(parseInt(still) > -1 || parseInt(deactivePortfolio) > -1) && width <= SMALL_WIDTH_INT && (
        <PortfolioMobile reverse={activePortfolio === null} portfolio={portfolios[parseInt(still) > -1 ? still : deactivePortfolio]} close={close} />
      )}

      <Buttons className={(active && activePortfolio === null) && 'active'}>
        <Button className={!shift && 'active'} onClick={() => setShift(0)}></Button>
        <Button className={shift && 'active'} onClick={() => setShift(-50)}></Button>
      </Buttons>

    </Container>
  )
};
