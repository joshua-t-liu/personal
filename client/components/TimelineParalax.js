import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

import events from '../timeline_data';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  position: relative;
  width: 100%;
  // overflow-x: hidden; breaks sticky
  padding: 5em 0;
  background-color: rgb(247,247,247);
`;

const TimeLine = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 50%;
  width: 0.15em;
  background-color: rgb(196,196,196);
  // border: solid 1px rgb(196,196,196);
  transform: translateX(-50%);
`;

const TimeMark = styled.div`
  position: absolute;
  width: 100%;
  visibility: hidden;
`;

const TimeMarkBubble = styled.div`
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5em;
  border: solid 1px dodgerblue;
  border-radius: 50%;
  background-color: white;
`;

const TimeMarkLine = styled.div`
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: ${({ left }) => `translate(${(left) ? '-100%' : null})`};
  width: ${({ left }) => `5vw`};
  background: ${({ left }) => `linear-gradient(${(left) ? 'to left' : 'to right'}, rgb(196,196,196), transparent)`};
  height: 0.15em;
`;

const Date = styled.div`
  position: absolute;
  top: -5vh;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.25em 1em;
  border: solid 1px rgb(196,196,196);
  border-radius: 1em;
  background-color: white;
`;

/**
 *   transform: ${({ offset, offsetTop, left }) => {
    if (left) {
      return `translate(min(calc(-${offsetTop}px + ${offset}px + 60vh), calc(45vw - 100%)))`
    }
    return `translate(max(calc(${offsetTop}px - ${offset}px - 60vh + 50vw), calc(55vw)))`;
  }};
  opacity: ${({ offset, innerHeight, innerWidth, offsetTop, left }) => (
    `calc(0.9 + (-${offsetTop} + ${offset} + ${innerHeight}) / ${innerWidth})`
  )};
 */

const EventContent = styled.div`
  width: 25%;
  padding: 1em 2em;
  background-color: rgb(247,247,247);
  color: rgb(74,74,74);
  transform: ${({ offset, offsetTop, left }) => {
    if (left) {
      return `translate(min(calc(-${offsetTop}px + ${offset}px + 100vh), calc(45vw - 100%)))`
    }
    return `translate(max(calc(${offsetTop}px - ${offset}px - 100vh), -45vw + 100%))`;
  }};
  opacity: ${({ offset, innerHeight, innerWidth, offsetTop, left }) => (
    `calc(1 + (-${offsetTop} + ${offset} + ${innerHeight}) / ${innerWidth})`
  )};
`;

const Title = styled.div`
  font-size: 2.5em;
`;

const Role = styled.div`
  margin: 1em 0;
  font-size: 1em;
`;

const Description = styled.div`
  margin-bottom: 1em;
  line-height: 1.5em;
  font-size: 1em;
`;

const EventContainer = styled.div`
  display: flex;
  justify-content: ${({ left }) => (left) ? 'flex-start' : 'flex-end'};
  padding: 15vh 0;
  &.active > ${TimeMark} {
    visibility: visible;
  }
`;

//6em
const HeadOutter = styled.div`
  position: sticky;
  top: 5em;
  left: 50%;
  transform: translate(-50%);
  border: solid 2em rgb(196,196,196);
  border-radius: 50%;
  width: 12em;
  height: 12em;
  z-index: 1;
  margin-bottom: 0;
  &.active {
    width: 6em;
    height: 6em;
    border-width: 1em;
    margin-bottom: 8em;
  }
  transition-property: width, height, border-width, margin-bottom;
  transition-duration:0.5s;
  transition-timing-function: ease-in;
`;

const HeadInner = styled(HeadOutter)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10em;
  height: 10em;
  border-color: rgb(247,247,247);
  ${HeadOutter}.active > & {
    width: 4em;
    height: 4em;
    border-width: 1em;
  }
`;

const HeadContent = styled(HeadInner)`
  background-color: white;
  border-color: white;
  width: 8em;
  height: 8em;
  text-align: center;
  white-space: pre;
  &:after {
    content: ${({ text }) => `'${text}'`};
    margin-left: -100%;
    margin-right: -100%;
  }
  ${HeadOutter}.active > ${HeadInner} > & {
    width: 2em;
    height: 2em;
    border-width: 1em;
  }
`;

const Head = ({ offset }) => {
  const ref = useRef();

  return (
    <React.Fragment>
      <div ref={ref} style={{ marginTop: '-50vh', height: '50vh' }} />
      <HeadOutter className={ref.current && (ref.current.offsetTop < offset) && 'active'}>
        <HeadInner>
          <HeadContent text='My Journey' />
        </HeadInner>
      </HeadOutter>
      <div style={{ height: '25vh' }} />
    </React.Fragment>
  )
};

const Event = ({ title, year, role, description, left, offset, innerHeight, innerWidth }) => {
  const ref = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `0px ${2 * innerWidth * 45 / 100}px` ,
      threshold: 0,
    };

    const stop = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.intersectionRatio === 1);
        }
      });
    };

    const observer = new IntersectionObserver(stop, options);
    observer.observe(ref.current);
  });

  return (
    <EventContainer className={active && 'active'} left={left}>
      <TimeMark>
        <Date>{year}</Date>
        <TimeMarkLine left={left} />
        <TimeMarkBubble />
      </TimeMark>

      <EventContent
        id={title}
        ref={ref}
        left={left}
        offset={offset}
        innerHeight={innerHeight}
        innerWidth={innerWidth}
        offsetTop={ref.current && ref.current.offsetTop}>
          <Title>{title}</Title>
          <Role>{role}</Role>
          <Description>{description}</Description>
      </EventContent>
    </EventContainer>
  )
}

export default () => {
  const ref = useRef();
  const [offset, setOffset] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const adjustOffset = () => {
      if (ref.current) return window.pageYOffset  - ref.current.offsetTop;
      return window.pageYOffset ;
    };

    setOffset(() => adjustOffset());
    setInnerWidth(window.innerWidth / 4);
    setInnerHeight(window.innerHeight / 2);
    window.addEventListener('scroll', () => setOffset(() => adjustOffset()));
    // window.addEventListener('resize', () => setInnerDim({ innerHeight: window.innerHeight / 2, innerWidth: window.innerWidth / 2}));
  });

  const dim = {
    offset,
    innerHeight,
    innerWidth,
  }

  return (
    <Container id='timeline' ref={ref}>
      <TimeLine />
      <Head offset={offset} />
      {events.map((event, idx) => (
        <Event
          key={idx}
          {...event}
          {...dim}
          left={idx % 2}></Event>
      ))}
    </Container>
  )
}