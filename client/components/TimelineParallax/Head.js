import React, { useState } from 'react';
import styled from 'styled-components';

import Background from '../Background';
import Spinner from '../Spinner';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH_INT = 1248;

const TimeLine = styled.div`
  position: absolute;
  height: 100vh;
  left: 50%;
  width: 0.1em;
  background-color: rgb(196,196,196);
  transform: translateX(-50%);
  opacity: 0;
  &.active {
    opacity: 1;
  }
  @media (max-width: ${MEDIUM_WIDTH}) {
    opacity: 0;
    &.active {
      opacity: 0;
    }
  }
`;

const HeadContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100%;
  width: 100%;
  font-weight: bold;
`;

const ScrollNote = styled.div`
  position: absolute;
  bottom: 5em;
  left: 50%;
  transform: translate(-50%);
  opacity: 1;
  transition: opacity 0.2s ease-in 0s;
  &.active {
    opacity: 0;
  }
`
const Desktop = styled.div`
  @media (max-width: ${SMALL_WIDTH}) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: ${SMALL_WIDTH}) {
    display: block;
  }
`;

export default ({ offset, active }) => {
  const [isReady, setIsReady] = useState(false);
  const words = ['ABOUT'];

  const onLoad = () => {
    setIsReady(true);
  };

  return (
    <HeadContainer id='head'>
      {!isReady && active && <Spinner /> }
      <TimeLine className={offset && 'active'} />
      <Mobile>
        <Background words={words} stationary={true} size='7em' active={active} onLoad={onLoad} />
      </Mobile>
      <Desktop>
        <Background words={words} stationary={true} size='15em' active={active} onLoad={onLoad} />
      </Desktop>
      <ScrollNote className={offset && 'active'}>scroll down</ScrollNote>
    </HeadContainer>
  )
};