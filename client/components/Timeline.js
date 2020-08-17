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
  from {

  }
  to {
    border-color: rgb(74,74,74);
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
  animation: ${extend} 0.1s ease-in 0.5s forwards;
  display: ${({ last }) => (last) ? 'none' : null};
`;

const Node = styled.div`
  height: 1em;
  width: 1em;
  border: solid 1px rgb(128,128,128);
  border-radius: 50%;
  background-color: white;
  flex-shrink: 0;
  z-index: 1;
  animation: ${fill} 0.5s ease-in 0s forwards;
`;

const StyledEvents = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  align-items: flex-start;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const EventText = styled.div`
  font-size: 1.5em;
  padding-bottom: ${({ last }) => (last) ? '0px' : '2em' };
  padding-left: 1em;
  justify-content: flex-start;
  text-align: left;
  opacity: 0;
  animation: ${slideIn} 0.1s ease-in 0.5s forwards;
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

const Events = ({ events = [] }) => {
  const [animState, setAnimState] = useState(0);

  return (
    <StyledEvents>
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