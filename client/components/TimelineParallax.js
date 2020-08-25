import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

import events from '../timeline_data';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH_INT = 1248;

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 5em 0;
`;

const TimeLine = styled.div`
  position: absolute;
  top: ${3 + 5}em;
  height: calc(100% - ${3 + 5}em);
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

const TimeMark = styled.div`
  position: absolute;
  width: 100%;
  visibility: hidden;
`;

const TimeMarkBubble = styled.div`
  z-index: 5;
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5em;
  border: solid 1px dodgerblue;
  border-radius: 50%;
  background-color: white;
  @media (max-width: ${MEDIUM_WIDTH}) {
    display: none;
  }
`;

const TimeMarkLine = styled.div`
  z-index: 5;
  position: absolute;
  top: 5vh;
  left: 50%;
  width: ${({ left, right }) => `${(left && right && 10) || 5}vw`};
  transform: ${({ left, right }) => {
    if (left && right) {
      return `translate(-50%)`;
    } else {
      return `translate(${(left) ? '-100%' : null})`;
    }
  }};
  background: ${({ left, right }) => {
    if (right && left) {
      return `linear-gradient(0.25turn, transparent, rgb(196,196,196), transparent)`;
    } else {
      return `linear-gradient(${(left) ? 'to left' : 'to right'}, rgb(196,196,196), transparent)`;
    }
  }};
  height: 0.1em;
  @media (max-width: ${MEDIUM_WIDTH}) {
    display: none;
  }
`;

const Date = styled.div`
  z-index: 5;
  position: absolute;
  top: -5vh;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.25em 1em;
  border: solid 1px rgba(196,196,196,0.7);
  border-radius: 1em;
  background-color: white;
  backdrop-filter: blur(8px);
  background-color: rgba(255,255,255,0.7);
`;

/**  &.watch {
    transform: ${({ $offset: offset, $offsetTop: offsetTop, $left: left }) => {
      if (left) {
        return css`translate(min(calc(-${offsetTop}px + ${offset}px + 75vh), calc(45vw - 100%)))`;
      }
      return css`translate(max(calc(${offsetTop}px - ${offset}px - 75vh), -45vw + 100%))`;
    }};
    opacity: ${({ $offset: offset, $innerHeight: innerHeight, $innerWidth: innerWidth, $offsetTop: offsetTop, $left: left }) => {
      return css`calc(1 + (-${offsetTop} + ${offset} + ${innerHeight}) / ${innerWidth})`;
    }};
  } */
const EventContent = styled.div`
  z-index: 1;
  width: 25%;
  padding: 0 2em;
  backdrop-filter: blur(8px);
  background-color: rgba(247,247,247,0.3);
  color: rgb(74,74,74);
  margin-left: ${({ $right }) => ($right) ? 'auto' : null};
  margin-right: ${({ $left }) => ($left) ? 'auto' : null};
  @media (max-width: ${SMALL_WIDTH}) {
    width: 100%;
    padding: 0 1em;
    box-sizing: border-box;
  }
  @media (min-width: ${SMALL_WIDTH}) and (max-width: ${MEDIUM_WIDTH}) {
    margin: auto;
    box-sizing: border-box;
    width: 60%;
  }
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
  padding: 15vh 0;
  overflow: hidden;
  &.active > ${TimeMark} {
    visibility: visible;
  }
  @media (max-width: ${MEDIUM_WIDTH}) {
    flex-direction: column;
  }
`;

const HeadContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  font-size: 3em;
  font-weight: bold;
  overflow: hidden;
`;

const HeadOutter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: auto;
  border-radius: 50%;
  width: 12em;
  height: 12em;
  margin-bottom: 0;
  background-color: rgba(255,255,255,1);
  &.active {
    width: 5em;
    height: 5em;
    margin-bottom: 9em;
    font-size: 1em;
  }
  transition-property: width, height, border-width, margin-bottom, font-size, border-color, color;
  transition-duration:0.25s;
  transition-timing-function: ease-in-out;
  @media (max-width: ${SMALL_WIDTH}) {
    &.active {
      width: 6em;
      height: 6em;
    }
  }
`;

const HeadInner = styled(HeadOutter)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 11em;
  height: 11em;
  background-color: rgba(30,144,255,1);
  ${HeadOutter}.active > & {
    width: 5em;
    height: 5em;
    background-color: rgba(30,144,255,0.5);
  }
  @media (max-width: ${SMALL_WIDTH}) {
    ${HeadOutter}.active > & {
      width: 6em;
      height: 6em;
    }
  }
`;

const HeadContent = styled(HeadInner)`
  width: 10em;
  height: 10em;
  text-align: center;
  white-space: pre;
  background-color: rgba(255,255,255,1);
  color: rgba(30,144,255,1);
  &:after {
    content: ${({ text }) => `'${text}'`};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  ${HeadOutter}.active > ${HeadInner} > & {
    width: 6em;
    height: 2em;
    color: rgba(30,144,255,0.5);
  }
  @media (max-width: ${SMALL_WIDTH}) {
    ${HeadOutter}.active > ${HeadInner}> & {
      width: 7em;
      height: 2em;
    }
  }
`;

const ImageFrame = styled.div`
  width: 33vw;
  max-width: 100%;
  height: 16vw;
  // border-top-right-radius: 2em;
  // border-bottom-left-radius: 2em;
  overflow: hidden;
  margin-bottom: 1em;
  @media (max-width: ${MEDIUM_WIDTH}) {
    width: 100%;
    height: 33vh;
  }
`;

const Image = styled.img`
  object-fit: none;
  width: 100%;
  height: auto;
`;

const Head = ({ offset }) => {
  const ref = useRef();

  return (
    <React.Fragment>
      <div ref={ref} />

      <TimeLine className={ref.current && (ref.current.offsetTop < offset) && 'active'} />

      <HeadContainer id='head'>
        <HeadOutter className={ref.current && (ref.current.offsetTop < offset) && 'active'}>
          <HeadInner>
            <HeadContent text='My Journey' />
          </HeadInner>
        </HeadOutter>
      </HeadContainer>

      <div style={{ height: '25vh' }} />
    </React.Fragment>
  )
};

const Event = ({ event, offset, innerHeight, innerWidth }) => {
  const containerRef = useRef();
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [visible, setVisibility] = useState(false);
  const year = (event.left && event.left.year) || (event.right && event.right.year);

  useEffect(() => {

    const optionsVisible = {
      root: null,
      rootMargin: `0px`,
      threshold: 0,
    };

    const observerVisible = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisibility(entry.isIntersecting));
    }, optionsVisible);

    observerVisible.observe(containerRef.current);

    const options = {
      root: document.body,
      rootMargin: `0px -44%`,
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => setActive(entry.isIntersecting));
    }, options);
    observer.observe(ref.current);
  }, []);

  const getTranslation = (left) => {
    let shift = '75vh';
    let leftBound = 'calc(45vw - 100%)';
    let rightBound = 'calc(-45vw + 100%)';
    if (innerWidth < MEDIUM_WIDTH_INT) {
      shift = '50vh';
      leftBound = '0px';
      rightBound = '0px';
    }
    if (visible) {
      if (left) {
        return `translate(min(calc(-${ref.current.offsetTop}px + ${offset}px + ${shift}), ${leftBound}))`
      }
      return `translate(max(calc(${ref.current.offsetTop}px - ${offset}px - ${shift}), ${rightBound}))`
    }
  };

  const getOpacity = () => {
    if (ref.current && visible) return `calc(1 + (-${ref.current.offsetTop} + ${offset} + ${innerHeight / 2}) / ${innerWidth / 4})`;
  };

  const getImgTranslation = () => {
    let shift = 0.25;
    if (innerWidth < MEDIUM_WIDTH_INT) {
      shift = 0.5;
    }
    if (ref.current && visible) return `50% ${100 - (offset + innerHeight * shift - ref.current.offsetTop) * 100 / innerHeight}%`;
  }

  return (
    <EventContainer ref={containerRef} className={active && 'active'}>
      <TimeMark>
        <Date>{year}</Date>
        <TimeMarkLine left={event.left} right={event.right} />
        <TimeMarkBubble />
      </TimeMark>

      {event.left && (
        <EventContent
          style={{
            transform: getTranslation(true),
            opacity: getOpacity(),
          }}
          id={event.left.title}
          ref={ref}
          className={visible && 'watch'}
          $offset={visible ? offset : undefined}
          $left={true}
          $innerHeight={innerHeight}
          $innerWidth={innerWidth}
          $offsetTop={ref.current && ref.current.offsetTop}>
            {event.left && event.left.img && (
            <ImageFrame ><Image src={event.left.img} style={{ objectPosition: getImgTranslation() }} /></ImageFrame>
            )}
            <Title>{event.left.title}</Title>
            <Role>{event.left.role}</Role>
            <Description>{event.left.description}</Description>
        </EventContent>
      )}

      {event.right && (
        <EventContent
          style={{
            transform: getTranslation(),
            opacity: getOpacity(),
          }}
          ref={(!event.left || null)  && ref}
          className={visible && 'watch'}
          $offset={visible ? offset : undefined}
          $right={true}
          $innerHeight={innerHeight}
          $innerWidth={innerWidth}
          $offsetTop={ref.current && ref.current.offsetTop}>
            {event.right && event.right.img && (
            <ImageFrame ><Image src={event.right.img} style={{ objectPosition: getImgTranslation() }} /></ImageFrame>
            )}
            <Title>{event.right.title}</Title>
            <Role>{event.right.role}</Role>
            <Description>{event.right.description}</Description>
        </EventContent>
      )}
    </EventContainer>
  )
}

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
    // window.addEventListener('scroll', adjustOffset);
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
    <Container ref={ref}>
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