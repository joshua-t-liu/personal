import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Head from './TimelineParallax/Head';
import Event from './TimelineParallax/Event';
import events from '../timeline_data';

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 5em 0;
`;

export default () => {
  const ref = useRef();
  const [offset, setOffset] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const delay = 15;

  useEffect(() => {
    const adjustOffset = () => setOffset(window.pageYOffset  - ref.current.offsetTop);
    const adjustDim = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };

    adjustOffset();
    adjustDim();
    window.addEventListener('resize', adjustDim);
    setInterval(adjustOffset, delay);

    return () => window.removeEventListener('resize', adjustDim);
  }, []);

  const dim = {
    offset,
    innerHeight,
    innerWidth,
  };

  return (
    <Container id='about' ref={ref}>
      <Head offset={offset} />
      {events.map((event, idx) => (
        <Event
          key={idx}
          event={event}
          {...dim}>
        </Event>
      ))}
      <div style={{ height: '25vh' }} />
    </Container>
  )
};