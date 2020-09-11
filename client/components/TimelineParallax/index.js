import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Head from './Head';
import Event from './Event';
import Present from './Present';
import events from '../../timeline_data';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${({ innerHeight }) => `calc(${innerHeight}px)`};
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default ({ active, innerHeight }) => {
  const ref = useRef();
  const [offset, setOffset] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  const adjustOffset = () => {
    if (window.location.hash === '#about') requestAnimationFrame(adjustOffset);
    if (ref.current) setOffset(ref.current.scrollTop);
  };

  const adjustDim = () => setInnerWidth(window.innerWidth);

  useEffect(() => adjustOffset(), [active]);

  useEffect(() => {
    adjustDim();
    window.addEventListener('resize', adjustDim);
  }, []);

  const dim = {
    offset,
    innerHeight,
    innerWidth,
  };

  return (
    <Container id='about' ref={ref} innerHeight={innerHeight} >
      <Head offset={offset} active={active} />
      {events.map((event, idx) => (
        <Event
          key={idx}
          event={event}
          {...dim}>
        </Event>
      ))}
      <Present />
    </Container>
  )
};