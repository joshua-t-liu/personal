import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH_INT = 1248;

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

const ImageFrame = styled.div`
  width: 33vw;
  max-width: 100%;
  height: 16vw;
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
  height: 100%;
`;

export default ({ event, offset, innerHeight, innerWidth }) => {
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
    if (ref.current && visible) return `calc(0.75 + (${offset} + ${innerHeight / 2} - ${ref.current.offsetTop}) /  ${innerHeight})`;
  };

  const getImgTranslation = () => {
    let shift = (innerWidth < MEDIUM_WIDTH_INT) ? 0.75 : shift = 0.75;
    if (ref.current && visible) return `50% ${25 + 75 * (offset + innerHeight - ref.current.offsetTop) / innerHeight}%`;
  }

  const props = {
    $offset: visible ? offset : undefined,
    $innerHeight: innerHeight,
    $innerWidth: innerWidth,
    $offsetTop: ref.current && ref.current.offsetTop,
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
          id={event.left.title}
          style={{
            transform: getTranslation(true),
            opacity: getOpacity(),
          }}
          ref={ref}
          className={visible && 'watch'}
          $left={true}
          {...props}>
            {event.left.img && (
            <ImageFrame >
              <Image className='lazyload' data-src={event.left.img} style={{ objectPosition: getImgTranslation() }} />
            </ImageFrame>
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
          $right={true}
          {...props}>
            {event.right.img && (
            <ImageFrame >
              <Image className='lazyload' data-src={event.right.img} style={{ objectPosition: getImgTranslation() }} />
              </ImageFrame>
            )}
            <Title>{event.right.title}</Title>
            <Role>{event.right.role}</Role>
            <Description>{event.right.description}</Description>
        </EventContent>
      )}
    </EventContainer>
  )
};
