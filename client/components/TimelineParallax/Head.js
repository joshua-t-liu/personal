import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Background from '../Background';

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
  visibility: hidden;
  &.active {
    visibility: visible;
  }
  @media (max-width: ${MEDIUM_WIDTH}) {
    visibility: hidden;
    &.active {
      visibility: hidden;
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
  const ref = useRef();

  const words = ['ABOUT'];

  return (
    <HeadContainer id='head' ref={ref}>
      <TimeLine className={ref.current && offset && 'active'} />
      <Mobile><Background words={words} stationary={true} size='7em' active={active} /></Mobile>
      <Desktop><Background words={words} stationary={true} size='15em' active={active} /></Desktop>
      <ScrollNote className={ref.current && offset && 'active'}>scroll down</ScrollNote>
    </HeadContainer>
  )
};