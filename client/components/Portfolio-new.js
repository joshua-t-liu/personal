import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import PortfolioModal from './PortfolioModal';
import portfolios from '../portfolio_data';
import { LeftArrow, RightArrow } from './Buttons';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  height: calc(100vh - 4em);
  overflow-y: auto;
  overflow-x: hidden;
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
  transition-delay: 0s, 0s;
  transition-duration: 0.25s, 0.5s;
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
  margin: auto 0;
  height: 60vh;
  // &:before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: ${() => `-${PADDING}em`};
  //   height: 100%;
  //   width: ${() => `${2 * PADDING}em`};
  //   background-color: rgb(255,255,255);
  //   z-index:10;
  // }
  // &:after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   right: ${() => `-${PADDING}em`};
  //   height: 100%;
  //   width: ${() => `${2 * PADDING}em`};
  //   background-color: rgb(255,255,255);
  //   z-index:10;
  // }
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
  backdrop-filter: blur(0em);
  background-color: rgba(0, 0, 0, 0.3);
  color: rgb(255,255,255);
  font-weight: bold;
  @media (max-width: ${SMALL_WIDTH}) {
    visibility: visible;
    top: 2em;
    left: 2em;
    backdrop-filter: blur(0em);
    background-color: rgba(0, 0, 0, 0.4);
    height: calc(100% - 4em);
    width: calc(100% - 4em);
  }
`;

const WorkTitle = styled.div`
  width: 100%;
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

export default ({ active }) => {
  const [shift, setShift] = useState(0);
  const [animState, setAnimState] = useState(false);
  const [currPortfolio, setPortfolio] = useState(null);
  const ref = useRef();

  useEffect(() => {
    // let options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0.1,
    // }

    // const intersectionCb = (entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.target === ref.current) setAnimState(entry.intersectionRatio >= 0.1);
    //     });
    // };

    // const observer = new IntersectionObserver(intersectionCb, options);
    // observer.observe(ref.current);
  }, []);

  return (
    <Container id='work'>
      {currPortfolio && <PortfolioModal portfolio={currPortfolio} close={() => setPortfolio(null)}/>}
      <Title className={active && 'active'}>Work</Title>
      <Carousel ref={ref}>
        <Space left={true} className={active && 'active'}>
          <ArrowContainer>
            <LeftArrow active={active && shift} onClick={() => setShift(0)} />
          </ArrowContainer>
        </Space>
        <CarouselInner className={active && 'active'} $shift={shift}>
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
        <Space className={active && 'active'}e>
          <ArrowContainer>
            <RightArrow active={active && !shift} onClick={() => setShift(-50)}/>
          </ArrowContainer>
        </Space>
      </Carousel>
      <Buttons className={active && 'active'}>
        <Button className={!shift && 'active'} onClick={() => setShift(0)}></Button>
        <Button className={shift && 'active'} onClick={() => setShift(-50)}></Button>
      </Buttons>
    </Container>
  )
};
