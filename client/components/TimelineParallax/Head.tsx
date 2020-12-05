import React, { useState, FC } from 'react';
import styled from 'styled-components';

import Bubble from '../Bubble/';
import Spinner from '../Spinner';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

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
  overflow: hidden;
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
`;
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

interface Props {
  offset: number;
  active: boolean;
}

const TimeLineHead: FC<Props> = ({ offset, active }) => {
  const words: Array<string> = ['ABOUT'];

  return (
    <HeadContainer id="head">
      <TimeLine className={offset && 'active'} />
      <Mobile>
        <Bubble words={words} stationary size="7em" active={active} />
      </Mobile>
      <Desktop>
        <Bubble words={words} stationary size="15em" active={active} />
      </Desktop>
      <ScrollNote className={offset && 'active'}>scroll down</ScrollNote>
    </HeadContainer>
  );
};

export default TimeLineHead;
