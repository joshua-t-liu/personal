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

export default ({ innerHeight }) => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const adjustOffset = () => {
      if (active) requestAnimationFrame(adjustOffset);
      console.log(ref.current.scrollTop)
      if (ref.current) setOffset(ref.current.scrollTop);
    };

    const adjustDim = () => setInnerWidth(window.innerWidth);

    adjustOffset();
    adjustDim();
    window.addEventListener('resize', adjustDim);

    window.addEventListener('hashchange', () => {
      setActive(window.location.hash === '#about');
      if (active) adjustOffset();
    });

    setActive(window.location.hash === '#about');

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
      <Container id='container' ref={ref} innerHeight={innerHeight} >
        <Head offset={offset} active={active} />
        {events.map((event, idx) => (
          <Event
            key={idx}
            event={event}
            offset={offset}
            innerHeight={innerHeight}
            innerWidth={innerWidth}>
          </Event>
        ))}
        <Present />
      </Container>
    </React.Fragment>
  )
};