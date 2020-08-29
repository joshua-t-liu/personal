import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Social } from '../Buttons';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  position: relative;
  color: white;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  @media (max-width: ${SMALL_WIDTH}) {
    z-index: 10;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  transform: translate(0, 100%);
  background-color: rgb(49,49,49);
  transition: transform 0.2s ease-in 0s;
  font-size: 2em;
  &.active {
    transform: translate(0, 0);
  }
  // @media (max-width: ${SMALL_WIDTH}) {
  //   flex-direction: column-reverse;
  //   font-size: 1em;
  // }
`;

const Panel = styled.div`
  width: calc(100% - 4em);
  height: calc(100% - 2em);
  padding: 1em 2em;
  margin: auto;
  text-align: center;
  overflow: hidden;
  @media (max-width: ${SMALL_WIDTH}) {
    padding: 1em;
    width: calc(100% - 2em);
    margin: 0;
    // max-height: 50%;
    &.cta {
      flex-grow: 1;
      padding: 1em 0;
    }
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  margin: auto;
  overflow: hidden;
  height: 100%;
  @media (max-width: ${MEDIUM_WIDTH}) {
    width: 75%;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1.25);
`;

const StyledBlurb = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-align: left;
`;

const SocialContainer = styled.div`
  height: 3em;
  width: 50%;
  font-size: 0.6em;
  margin: 1em auto;
  // @media (max-width: ${SMALL_WIDTH}) {
  //   align-self: center;
  //   width: 70%;
  //   height: 3em;
  // }
  // @media (max-width: ${MEDIUM_WIDTH}) {
  //   margin-top: 1em;
  // }
`;

const CTA = styled.div`
  text-align: center;
  margin: 1em auto;
  padding: 0 3em;
  @media (max-width: ${SMALL_WIDTH}) {
    padding: 0 1em;
  }
`;

const Blurb = () => {
  return (
    <StyledBlurb>
      <CTA>
      Thanks for visiting my site.  <b style={{ color: 'dodgerblue' }}>Actively</b> looking for new roles, and would love to talk about any new opportunities. <b style={{ color: 'dodgerblue' }}>Let's connect!!!</b>
      </CTA>
      <SocialContainer><Social /></SocialContainer>
    </StyledBlurb>
  )
}

export default () => {
  const ref = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `0px`,
      threshold: 0.99,
    };

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => setActive(entry.isIntersecting));
    }, options);

    observer.observe(ref.current);
  }, []);

  return (
    <Container id='contact' ref={ref}>
      <Content className={active && 'active'}>
        <Panel className='cta'>
          <Blurb />
        </Panel>
        {/* <Panel>
          <ImageContainer><Image className='lazyload' data-src='/portrait.jpg' /></ImageContainer>
        </Panel> */}
      </Content>
    </Container>
  )
};