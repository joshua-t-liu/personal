import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH_INT = 1248;

const TimeMark = styled.div`
  position: absolute;
  width: 100%;
  opacity: 0;
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
    if (left && right) return `translate(-50%)`;
    return `translate(${(left) ? '-100%' : null})`;
    }};
  background: ${({ left, right }) => {
    if (right && left) return `linear-gradient(0.25turn, transparent, rgb(196,196,196), transparent)`;
    return `linear-gradient(${(left) ? 'to left' : 'to right'}, rgb(196,196,196), transparent)`;
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
    opacity: 1;
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

const getTranslation = (visible, left, innerWidth, offsetTop, offset) => {
  if (!visible) return;

  let shift = (innerWidth < MEDIUM_WIDTH_INT) ? '50vh' : '75vh';
  let leftBound = (innerWidth < MEDIUM_WIDTH_INT) ? '0px' : 'calc(45vw - 100%)';
  let rightBound = (innerWidth < MEDIUM_WIDTH_INT) ? '0px' : 'calc(-45vw + 100%)';

  if (left) {
    return `translate(min(calc(-${offsetTop}px + ${offset}px + ${shift}), ${leftBound}))`;
  }
  return `translate(max(calc(${offsetTop}px - ${offset}px - ${shift}), ${rightBound}))`;
};

const getOpacity = (visible, offset, innerHeight, offsetTop) => {
  if (!visible) return;
  return `calc(0.75 + (${offset} + ${innerHeight / 2} - ${offsetTop}) /  ${innerHeight})`;
};

const getImgTranslation = (innerWidth, visible, offset, innerHeight, offsetTop) => {
  let shift = (innerWidth < MEDIUM_WIDTH_INT) ? 0.75 : shift = 0.75;
  if (!visible) return;
  return `50% ${25 + 75 * (offset + innerHeight - offsetTop) / innerHeight}%`;
};

const Content = ({ right, event, left, props }) => {
  const ref = useRef();

  const { visible, $offset, $innerHeight, $innerWidth, setActive } = props;

  useEffect(() => {
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

  const { title, description, role, img } = event;

  return (
    <EventContent
      style={{
        transform: getTranslation(visible, left, $innerWidth, ref.current && ref.current.offsetTop, $offset),
        opacity: getOpacity(visible, $offset, $innerHeight, ref.current && ref.current.offsetTop),
      }}
      ref={ref}
      className={visible && 'watch'}
      $right={right}
      $offsetTop={ref.current && ref.current.offsetTop}
      {...props}>
        {img && (
          <ImageFrame >
            <Image
              className='lazyload'
              data-src={img}
              style={{
                objectPosition: getImgTranslation($innerWidth, visible, $offset, $innerHeight, ref.current && ref.current.offsetTop)
              }} />
          </ImageFrame>
        )}
        <Title>{title}</Title>
        <Role>{role}</Role>
        <Description>{description}</Description>
    </EventContent>
  )
};

export default ({ event, offset, innerHeight, innerWidth }) => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [visible, setVisibility] = useState(false);
  const year = (event.left && event.left.year) || (event.right && event.right.year);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisibility(entry.isIntersecting));
    }, options);

    observer.observe(ref.current);
  }, []);

  const props = {
    visible,
    $offset: visible ? offset : undefined,
    $innerHeight: innerHeight,
    $innerWidth: innerWidth,
    setActive,
  };

  return (
    <EventContainer ref={ref} className={active && 'active'}>
      <TimeMark>
        <Date>{year}</Date>
        <TimeMarkLine left={event.left} right={event.right} />
        <TimeMarkBubble />
      </TimeMark>

      {event.left && (
        <Content {...{ event: event.left, left: true }} props={props}/>
      )}

      {event.right && (
        <Content {...{ right: true, event: event.right }} props={props} />
      )}
    </EventContainer>
  )
};