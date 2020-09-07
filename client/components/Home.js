import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Navigation from './Navigation';
import { Social } from './Buttons';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_HEIGHT = '414px';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 1em;
  height: calc(100vh - 6em);
  @media (max-width: ${MEDIUM_WIDTH}) {
    padding: 2em 0;
    height: calc(100vh - 4em);
    font-size: 0.75em;
  }
`;

const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 60%;
  @media (max-width: ${SMALL_WIDTH}) {
    width: 90%;
  }
  @media (max-height: ${SMALL_HEIGHT}) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin: auto;
  }
`;

const AboutText = styled.p`
  font-size: 1.25em;
  line-height: 1.5em;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  & + & {
    margin-top: 1em;
  }
  @media (max-width: ${MEDIUM_WIDTH}) {
    width: 90%;
  }
`;

const Name = styled(AboutText)`
  color: dodgerblue;
  font-weight: bold;
  font-size: 1.75em;
`;

const StyledLink = styled.div`
  color: dodgerblue;
  text-decoration: none;
`;

const appear = keyframes`
  20% {
    visibility: hidden;
  }
  21% {
    visibility: visible;
  }
  100% {
    visibility: visible;
  }
`;

const Title = styled.h1`
  font-size: 5em;
  margin: 0;
  text-align: center;
  white-space: pre;
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 4em;
  }
`;

const shiftUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0em);
  }
`;

const About = styled.div`
  transform: translateY(2em);
  opacity: 0;
  animation: ${shiftUp} 0.5s ease-in-out 0s forwards;
`;

const HeadLine = ({ title, delay }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Title delay={delay}>{title}</Title>
    </div>
  )
}

const HeadLines = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
  color: rgb(51,51,51);
`;

export default ({ innerHeight }) => {

  return (
    <Container id='home' innerHeight={innerHeight}>
      <Banner>
        <Name>Full Stack Engineer </Name>
        <HeadLines>
          {['JOSHUA LIU'].map((title, idx) => (
            <HeadLine key={idx} title={title} delay={idx} />
          ))}
        </HeadLines>
        <About>
          <Navigation />
          <Social justifyContent='center'/>
        </About>
      </Banner>
    </Container>
  )
};
