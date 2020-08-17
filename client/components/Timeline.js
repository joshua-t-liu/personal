import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

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
  animation: ${extend} 0.5s ease-in-out 0.5s forwards;
  display: ${({ last }) => (last) ? 'none' : null};
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
  animation: ${fill} 0.4s linear 0.1s forwards;
`;

const StyledEvents = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  align-items: flex-start;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3em);
  }
  to {
    opacity: 1;
    transform: translateY(-0.25em);
  }
`;

const EventText = styled.div`
  font-size: 2em;
  padding-bottom: ${({ last }) => (last) ? '0px' : '2em' };
  padding-left: 1em;
  justify-content: flex-start;
  text-align: left;
  opacity: 0;
  animation: ${slideIn} 0.5s ease-in-out 0s forwards;
`;

const Title = styled.span`
  font-weight: bold;
  color: dodgerblue;
`;

const NodePath = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`
const StyledEvent = styled.div`
  display: flex;
  &:first-child {
    margin-top: 3em;
  // &:nth-child(${({ size }) => size + 1})) {
  //   & > ${NodePath} > ${Path} {
  //     display: none;
  //   }
  // }
`;

const Event = ({ last, title, year, description, setAnimState }) => {
  return (
    <StyledEvent>
      <NodePath>
        <Node />
        <Path last={last} onAnimationEnd={() => setAnimState(curr => curr + 1)}/>
      </NodePath>
      <EventText last={last} >
        <Title>{title}</Title>
        <br/>
        {year}
        <br/>
        {description}
      </EventText>
    </StyledEvent>
  )
}

const Space = styled(EventText)`
  visibility: hidden;
  font-size: 2.25em;
  padding-bottom: 0;
`;

const Events = ({ events = [] }) => {
  const [animState, setAnimState] = useState(0);
  let max = '';
  events.forEach(({ title, description }) => {
    if (max.length < title.length) max = title;
    if (max.length < description.length) max = description;
  });

  return (
    <StyledEvents>
      <Space><Title>{max}</Title></Space>
      {events.filter((_,idx) => idx <= animState).map((event, idx) => <Event last={idx + 1 === events.length} setAnimState={setAnimState} {...event} />)}
    </StyledEvents>
  );
};

const events = [
  { title: 'Epic', year: '2012 - 2015', description: 'Technical Services' },
  { title: 'Huron Consulting', year: '2016 - 2016', description: 'Consultant' },
  { title: 'HCI Group', year: '2017 - 2017', description: 'Consultant' },
  { title: 'Mass General Brigham', year: '2018 - 2020', description: 'Implementation Analyst' },
];

export default forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      {props.startTimeLine && <Events events={events} />}
    </Container>
  )
});