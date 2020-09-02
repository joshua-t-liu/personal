import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Head from './TimelineParallax/Head';
import Event from './TimelineParallax/Event';
import Present from './TimelineParallax/Present';
import events from '../timeline_data';

const Container = styled.div`
  position: relative;
  width: 100%;
  // height: ${({ innerHeight }) => `calc(min(100vh, ${innerHeight}px) - 10em)`};
  height: ${({ innerHeight }) => `calc(${innerHeight}px)`};
  overflow-y: scroll;
  overflow-x: hidden;
  // padding: 5em 0;
`;

export default ({ innerHeight }) => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const delay = 15;

  useEffect(() => {
    const adjustOffset = () => {
      if (active) requestAnimationFrame(adjustOffset);
      if (ref.current) return setOffset((curr) => ref.current.scrollTop);
    };

    const adjustDim = () => setInnerWidth(window.innerWidth);

    adjustOffset();
    adjustDim();
    window.addEventListener('resize', adjustDim);

    window.addEventListener('hashchange', () => {
      setActive(window.location.hash === '#about');
      if (active) adjustOffset();
    });

    return () => window.removeEventListener('resize', adjustDim);
  }, [active]);

  const dim = {
    offset,
    innerHeight,
    innerWidth,
  };

  return (
    <React.Fragment>
      <div id='about'/>
      <Container ref={ref} innerHeight={innerHeight} >
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
    </React.Fragment>
  )
};