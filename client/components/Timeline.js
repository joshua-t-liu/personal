import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

const events = [
  { title: 'Georgia Institute of Technology', year: '2012', description: 'B.S. Math' },
  { title: 'Epic', year: '2012 - 2015', description: 'Technical Services' },
  { title: 'Huron Consulting', year: '2016', description: 'Consultant' },
  { title: 'HCI Group', year: '2017', description: 'Consultant' },
  { title: 'Mass General Brigham', year: '2018 - 2020', description: 'Implementation Analyst' },
  { title: 'Hack Reactor', year: '2020', description: 'Advanced Software Engineering Immersive Program' },
];

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;
  text-align: center;
  &.gray {
    background-color: rgb(247,247,247);
  }
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 0.75em;
  }
`;

const fill = keyframes`
  0% {
  }
  25% {
    border-top-color: rgb(74,74,74);
  }
  50% {
    border-top-color: rgb(74,74,74);
    border-right-color: rgb(74,74,74);
  }
  75% {
    border-top-color: rgb(74,74,74);
    border-right-color: rgb(74,74,74);
    border-bottom-color: rgb(74,74,74);
  }
  100% {
    border-top-color: rgb(74,74,74);
    border-right-color: rgb(74,74,74);
    border-bottom-color: rgb(74,74,74);
    border-left-color: rgb(74,74,74);
  }
`;

const extend = keyframes`
  from {
    height: 0em;
  }
  to {
    visibility: visible;
    height: 100%;
  }
`;

const Path = styled.div`
  margin-top: -0.5em;
  height: 0em;
  border: solid 1px rgb(196,196,196);
  width: 0.1em;
  background-color: rgb(196,196,196);
  visibility: hidden;
`;

const Node = styled.div`
  height: 1em;
  width: 1em;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 50%;
  background-color: white;
  flex-shrink: 0;
  z-index: 1;
`;

const NodePath = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Events = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  // min-height: ${({ size }) => `${8 * size}em`};
  align-items: flex-start;
  @media (max-width: ${SMALL_WIDTH}) {
    // min-height: ${({ size }) => `${10.5 * size}em`};
  }
`;

const EventText = styled.div`
  font-size: 1.5em;
  padding-bottom: ${({ last }) => (last) ? '0px' : '2em' };
  padding-left: 1em;
  justify-content: flex-start;
  text-align: left;
  opacity: 0;
  transform: translateY(3em);
  transition: opacity 0.5s ease 0s, transform 0.5s ease 0s;
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 2em;
  }
`;

const Title = styled.span`
  font-weight: bold;
  color: dodgerblue;
`;

const Description = styled.span`
  color: rgb(123,123,123);
`;

const StyledEvent = styled.div`
  display: flex;
  &.active {
    & > ${NodePath} > ${Node} {
      animation: ${fill} 0.4s linear 0.1s forwards;
    }
    & > ${NodePath} > ${Path} {
      animation: ${extend} 0.5s ease-in-out 0.5s forwards;
    }

    & > ${EventText} {
      opacity: 1;
      transform: translateY(-0.25em);
    }
  }
  &:last-child {
    & > ${NodePath} > ${Path} {
      display: none;
    }
  }
`;

const Event = ({ activateEvent, title, year, description, setAnimState }) => {
  return (
    <StyledEvent className={activateEvent}>
      <NodePath>
        <Node />
        <Path onAnimationEnd={() => setAnimState(curr => curr + 1)}/>
      </NodePath>
      <EventText>
        <Title>{title}</Title>
        <br/>
        {year}
        <br/>
        <Description>{description}</Description>
      </EventText>
    </StyledEvent>
  )
};

export default forwardRef((props, ref) => {
  const [animState, setAnimState] = useState(0);
  return (
    <Container ref={ref}>
      <Events>
        {events.map((event, idx) => (
          <Event
            key={idx}
            last = {idx + 1 === events.length}
            activateEvent={props.startTimeLine && (idx <= animState) && 'active'}
            setAnimState={setAnimState}
            {...event} />
        ))}
      </Events>
    </Container>
  )
});