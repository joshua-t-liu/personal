import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Head from './TimelineParallax/Head';
import Event from './TimelineParallax/Event';
import Present from './TimelineParallax/Present';
import events from '../timeline_data';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${({ innerHeight }) => `calc(min(100vh, ${innerHeight}px) - 10em)`};
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5em 0;
`;

export default ({ innerHeight }) => {
  const ref = useRef();
  const [offset, setOffset] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const delay = 15;

  useEffect(() => {
    const adjustOffset = () => {
      requestAnimationFrame(adjustOffset);
      if (ref.current) return setOffset((curr) => {
        // return window.pageYOffset  - ref.current.offsetTop;
        return ref.current.scrollTop;
      });
    };

    const adjustDim = () => {
      setInnerWidth(window.innerWidth);
    };

    adjustOffset();
    adjustDim();
    window.addEventListener('resize', adjustDim);
    // setInterval(adjustOffset, delay);

    return () => window.removeEventListener('resize', adjustDim);
  }, []);

  const dim = {
    offset,
    innerHeight,
    innerWidth,
  };

  return (
    <Container ref={ref} innerHeight={innerHeight} >
      <div id='about' style={{ marginTop: '-5em', height: '5em' }} />
      <Head offset={offset} />
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