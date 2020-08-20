import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { ChatButton } from './Buttons';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 1em;
  min-height: calc(100vh - 10em);
  @media (max-width: ${MEDIUM_WIDTH}) {
    padding: 3em 0;
    min-height: calc(100vh - 6em);
    font-size: 0.75em;
  }
`;

const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 70%;
`;

const Title = styled.h1`
  font-size: 6em;
  margin: 0.2em auto;
  text-align: center;
  color: #333;
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 4em;
  }
`;

const About = styled.p`
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

const Name = styled(About)`
  color: dodgerblue;
  font-weight: bold;
  font-size: 1.75em;
`;

const StyledLink = styled(Link)`
  color: dodgerblue;
  text-decoration: none;
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
          <Name>Joshua Liu</Name>
          <Title ref={title} sticky={stickyTitle}>DESIGN DEVELOP DEPLOY</Title>
          <About>
            Full stack enginer with a background in math and software implementation. Check out my <StyledLink to='/portfolio'>portfolio</StyledLink> and see what I've been working on.  <b>Actively</b> looking for new opportunities, and would love to connect and hear from you.
          </About>
          <div style={{ margin: '3em 0', textAlign: 'center' }}>
            <ChatButton ref={chat}>LET'S CHAT</ChatButton>
          </div>
        </Banner>
    </Container>
  )
};
