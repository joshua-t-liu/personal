import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import { ChatNavButton, More, Close, Social } from './Buttons';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const contacts = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/joshuathliu/',
  },
  {
    title: 'Github',
    href: 'https://github.com/joshua-t-liu',
  }
];

const WideMenu = styled.div`
  display: flex;
  width: 33.3%;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  margin: 1em;
  text-decoration: none;
  color: ${({ active, brighter }) => {
    if (brighter) return (active) ? 'rgb(183,183,183)' : 'rgb(255,255,255)';
    return (active) ? 'rgb(187,187,187)' : 'rgb(74,74,74)';
  }};
  &:hover {
    text-decoration: ${({ active }) => (!active) ? 'underline' : null};
  }
`;

const Contact = styled.a`
  margin: 1em;
  text-decoration: none;
  color: rgb(74,74,74);
  &:hover {
    text-decoration: underline;
  }
`;

const drop = keyframes`
  to {
    margin: 1em;
  }
`;

const Title = styled.div`
  font-weight: bold;
  animation: ${drop} 0.1s ease-in 0s forwards;
`;

const NavBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  z-index: 1000;
  &.active {
    background-color: rgb(255,255,255);
    border-bottom: 1px solid rgb(218, 218, 218);
  }
  @media (max-width: ${SMALL_WIDTH}) {
    & ${Contact} {
      display: none;
    }
  }
  @media (max-width: ${MEDIUM_WIDTH}) {
    & ${StyledLink} {
      display: none;
    }
  }
`;

const slide = keyframes`
  from {
    margin-left: -280px;
  }
  to {
    margin-left: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  &.close {
    animation: ${slide} 0.25s ease-in 0s reverse forwards;
  }
`;

const StyledMoreMenu = styled.div`
  position: absolute;
  top: 0;
  left 0;
  right: 0;
  width: 280px;
  bottom: 0;
  height: 100vh;
  margin-left: -280px;
  display: flex;
  flex-direction: column;
  background-color: rgb(49,49,49);
  color: white;
  @media (max-width: ${MEDIUM_WIDTH}) {
    & ${StyledLink}{
      display: block;
    }
  }
  animation: ${slide} 0.25s ease-in 0s forwards;
`;

const MoreMenu = ({ onClick }) => {
  let location = useLocation();
  const [slideBack, setSlideBack] = useState(false);

  return (
    <Overlay className={slideBack && 'close'} onClick={() => setSlideBack(true)} onAnimationEnd={() => {if(slideBack) onClick()}}>
      <StyledMoreMenu>
        <div style={{ alignSelf: 'flex-end' }}>
          <Close onClick={() => setSlideBack(true)} />
        </div>

        {['about', 'portfolio'].map((title) => (
          <StyledLink
            to={`/${(title !== 'about') ? title : ''}`}
            brighter={true}
            active={`/${(title !== 'about') ? title : ''}` === location.pathname}>
            {capitalizeFirstLetter(title)}
          </StyledLink>
        ))}

        <Social />
      </StyledMoreMenu>
    </Overlay>
  )
};

const capitalizeFirstLetter = (str) => {
  if (!str.length) return;
  return str[0].toUpperCase() + str.substr(1);
}

export default ({ stickyTitle, stickyChat }) => {
  const [showMore, setShowMore] = useState(false);
  let location = useLocation();
  const isActive = location.pathname === '/portfolio';

  return (
    <NavBar className={(stickyTitle || isActive) && 'active'}>
      <WideMenu style={{ justifyContent: 'flex-start' }}>
       <More onClick={() => setShowMore(!showMore)} />

        {showMore && <MoreMenu onClick={() => setShowMore(!showMore)} />}

        {['about', 'portfolio'].map((title) => (
          <StyledLink
            to={`/${(title !== 'about') ? title : ''}`}
            active={`/${(title !== 'about') ? title : ''}` === location.pathname}>
            {capitalizeFirstLetter(title)}
          </StyledLink>
        ))}

      </WideMenu>
      <WideMenu>
        {(stickyTitle || isActive) && <Title>Joshua Liu</Title>}
      </WideMenu>
      <WideMenu style={{ justifyContent: 'flex-end' }}>
        {contacts.map(({ title, href}) => <Contact href={href}>{title}</Contact>)}
        <ChatNavButton className={(stickyChat || isActive) && 'active'} />
      </WideMenu>
    </NavBar>
  )
};
