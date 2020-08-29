import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import PortfolioModal from './PortfolioModal';
import portfolios from '../portfolio_data';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  @media (max-width: ${SMALL_WIDTH}) {
    padding: 2em 0;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 1em;
  opacity: 0;
  transform: translate(0, 300%);
  transition-property: opacity, transform;
  transition-delay: 0.5s, 0s;
  transition-duration: 0.5s, 1s;
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
  height: 60vh;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: ${() => `-${PADDING}em`};
    height: 100%;
    width: ${() => `${PADDING}em`};
    background-color: rgb(255,255,255);
    z-index:10;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: ${() => `-${PADDING}em`};
    height: 100%;
    width: ${() => `${PADDING}em`};
    background-color: rgb(255,255,255);
    z-index:10;
  }
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
  display: flex;
  visibility: hidden;
  opacity: 0;
  transform: ${({ $shift }) => `translate(${$shift}%, -125%)`};
  transition-property: opacity, transform;
  transition-delay: 0.5s, 0s;
  transition-duration: 0.5s, 1s;
  transition-timing-function: ease-in, ease-in-out;
  &.active {
    visibility: visible;
    opacity: 1;
    transform: ${({ $shift }) => `translate(${$shift}%, 0)`};
  }
  @media (max-width: ${SMALL_WIDTH}) {
    flex-wrap: wrap;
    visibility: visible;
    transform: ${({ $shift }) => `translate(0, 25%)`};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Overlay = styled.div`
  z-index: 1;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: ${() => `${PADDING}em`};
  height: 100%;
  width: ${() => `calc(100% - ${2 * PADDING}em)`};
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(0.25em);
  background-color: rgba(0, 0, 0, 0.3);
  color: rgb(255,255,255);
  font-weight: bold;
  @media (max-width: ${SMALL_WIDTH}) {
    visibility: visible;
    top: 2em;
    left: 2em;
    backdrop-filter: blur(0.1em);
    background-color: rgba(0, 0, 0, 0.4);
    height: calc(100% - 4em);
    width: calc(100% - 4em);
  }
`;

const WorkTitle = styled.div`
  font-size: 3em;
  padding: 0.25em;
  @media (max-width: ${MEDIUM_WIDTH}) {
    font-size: 2em;
  }
`;

const Work = styled.div`
  position: relative;
  flex-shrink: 0;
  width: ${() => `calc(50% - ${2 * PADDING}em)`};
  padding: ${() => `0 ${PADDING}em`};
  cursor: pointer;
  &:hover {
    & > ${Overlay} {
      visibility: visible;
    }
  }
  @media (max-width: ${SMALL_WIDTH}) {
    width: ${() => `calc(100% - 4em)`};
    padding: 2em;
    height: 50vh;
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

export default () => {
  const [shift, setShift] = useState(0);
  const [animState, setAnimState] = useState(false);
  const [currPortfolio, setPortfolio] = useState(null);
  const ref = useRef();

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const intersectionCb = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref.current) setAnimState((curr) => curr || entry.intersectionRatio >= 0.1);
        });
    };

    const observer = new IntersectionObserver(intersectionCb, options);
    observer.observe(ref.current);
  }, []);

  return (
    <Container id='works'>
      {currPortfolio && <PortfolioModal portfolio={currPortfolio} close={() => setPortfolio(null)}/>}
      <Title className={animState && 'active'}>Works</Title>
      <Carousel ref={ref}>
        <CarouselInner className={animState && 'active'} $shift={shift}>
          {portfolios.map((portfolio, idx) => {
            const Image = portfolio.Image;
            return (
              <Work key={idx}>
                <Overlay onClick={() => setPortfolio(portfolio)}>
                  <WorkTitle>{portfolio.title}</WorkTitle>
                </Overlay>
                <ImageWrapper>
                  <Image />
                </ImageWrapper>
              </Work>
            )
          })}
        </CarouselInner>
      </Carousel>
      <Buttons className={animState && 'active'}>
        <Button className={!shift && 'active'} onClick={() => setShift(0)}></Button>
        <Button className={shift && 'active'} onClick={() => setShift(-50)}></Button>
      </Buttons>
    </Container>
  )
};
