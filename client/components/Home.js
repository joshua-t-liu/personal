import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ChatButton } from './Buttons';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;
  min-height: calc(100vh - 10em);
  @media (max-width: ${SMALL_WIDTH}) {
    padding: 4em 0;
    min-height: calc(100vh - 8em);
  }
`;

const Title = styled.h1`
  margin-top: ${({ sticky }) => (sticky) ? '-0.05em' : null};
  font-family: cursive;
  font-size: 5em;
  text-align: center;
  transition: margin-top 0.2s ease-in;
  &:after {
    content: 'Full stack engineer.  Math major. Software implementation experience.';
    font-size: 0.4em;
    display: block;
    margin-top: 0.25em;
    // font-weight: normal;
    font-family: sans-serif;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 4em;
  }
`;

const About = styled.p`
  font-size: 1.5em;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  @media (max-width: ${MEDIUM_WIDTH}) {
    width: 90%;
  }
  // @media (max-width: ${SMALL_WIDTH}) {
  //   text-align: left;
  // }
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
        <Title ref={title} sticky={stickyTitle}>Joshua Liu</Title>
        <About>
            This is my personal website where I showcase my front end skills in developing responsive, accessible web applications. Actively looking for new opportunities, and would love to connect and hear from you.
          </About>
        <div style={{ marginTop: '6em' }}>
          <ChatButton ref={chat}>LET'S CHAT</ChatButton>
        </div>
        {/* <div style={{ position: 'absolute', bottom: 0, right: 0, zIndex: -1 }}>
          <img src='./portrait_cartoon.jpeg' />
        </div> */}
    </Container>
  )
};
