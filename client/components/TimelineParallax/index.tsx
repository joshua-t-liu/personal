import React, {
  useRef, useState, useEffect, FC,
} from 'react';
import styled from 'styled-components';

import Head from './Head';
import Event from './Event';
import Present from './Present';
import events from '../../timeline_data';
import { HomeButton } from '../Buttons';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${({ innerHeight }) => `calc(${innerHeight}px)`};
  overflow-y: scroll;
  overflow-x: hidden;
`;

interface Props {
  active: boolean;
  innerHeight: number;
}

const TimeLine: FC<Props> = ({ active, innerHeight }) => {
  const ref = useRef();
  const [offset, setOffset] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  const adjustOffset = () => {
    requestAnimationFrame(adjustOffset);
    if (ref.current) setOffset(ref.current.scrollTop);
  };

  useEffect(() => adjustOffset(), [active]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
  }, []);

  return (
    <Container id="about" ref={ref} innerHeight={innerHeight}>
      <HomeButton />
      <Head offset={offset} active={active} />
      {events.map((event, idx) => (
        <Event
          key={idx}
          event={event}
          offset={offset}
          innerHeight={innerHeight}
          innerWidth={innerWidth}
        />
      ))}
      <Present />
    </Container>
  );
};

export default TimeLine;
