import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { ChatButton } from './Buttons';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_HEIGHT = '414px';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 1em;
  min-height: calc(100vh - 10em);
  @media (max-width: ${MEDIUM_WIDTH}) {
    padding: 2em 0;
    min-height: calc(100vh - 6em);
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

const StyledLink = styled(Link)`
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
  // margin: 0.2em auto;
  margin: 0;
  text-align: center;
  color: #333;
  white-space: pre;
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 4em;
  }
  visibility: hidden;
  animation: ${({ delay }) => css`${appear} 0.5s ease-in ${0.5 / 2 * delay}s forwards`};
`;

const highlight = keyframes`
  0%{
    left: 0;
  }
  20% {
    width: 100%;
    left: 0;
  }
  80% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0%;
    left: 100%;
  }
`;

const HighLight = styled(Title)`
  position: absolute;
  top: 0;
  margin: auto;
  background-color: #333;
  color: transparent;
  width: 0%;
  visibility: visible;
  overflow: hidden;
  animation: ${({ delay }) => css`${highlight} 0.5s ease-in ${0.5 / 2 * delay}s forwards`};
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
  animation: ${shiftUp} 0.25s ease-in-out 0.75s forwards;
`;

const HeadLine = ({ title, delay }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Title delay={delay}>{title}</Title>
      <HighLight delay={delay}>{title}</HighLight>
    </div>
  )
}

const HeadLines = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
`;

export default ({ stickyTitle, setStickyTitle, stickyChat, setStickyChat }) => {
  const title = useRef();
  const chat = useRef();

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    const intersectionCb = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === chat.current) {
          setStickyChat(!entry.isIntersecting);
        }
        if (entry.target === title.current) {
          setStickyTitle(!entry.isIntersecting);
        }
      });
    }

    const observer = new IntersectionObserver(intersectionCb, options);
    observer.observe(title.current);
    observer.observe(chat.current);
  }, []);

  return (
    <Container>

        <Banner>
          <Name>Full Stack Engineer </Name>
          <HeadLines ref={title} sticky={stickyTitle} >
            {['JOSHUA LIU'].map((title, idx) => (
              <HeadLine key={idx} title={title} delay={idx} />
            ))}
          </HeadLines>
          <About>
            <AboutText>
              Math and software implementation background. Passionate about technology. Check out my <StyledLink to='/portfolio'>portfolio</StyledLink> and see what I've been working on.  <b>Actively</b> looking for new opportunities, and would love to connect and hear from you.
            </AboutText>
            <div style={{ margin: '3em 0', textAlign: 'center' }}>
              <ChatButton ref={chat}>LET'S CHAT</ChatButton>
            </div>
          </About>
        </Banner>
    </Container>
  )
};
