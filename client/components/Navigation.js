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
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
`;

// const StyledLink = styled(Link)`
const StyledLink = styled.div`
  cursor: pointer;
  margin: ${({ margin }) => margin || '1.75em'};
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
  margin: 1.75em;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  &.active {
    background-color: rgb(255,255,255);
    border-bottom: 1px solid rgb(218, 218, 218);
  }
  @media (max-width: ${MEDIUM_WIDTH}) {
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
  //bottom: 0;
  //right: 0;
  height: ${({ height }) => `${height}px` || '100%'};
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
  height: 100%;
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
  const [height, setHeight] = useState(window.innerHeight);
  let location = useLocation();
  const [slideBack, setSlideBack] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setHeight(window.innerHeight));
  }, []);

  return (
    <Overlay height={height} className={slideBack && 'close'} onClick={() => setSlideBack(true)} onAnimationEnd={() => {if(slideBack) onClick()}}>
      <StyledMoreMenu>
        <div style={{ alignSelf: 'flex-end' }}>
          <Close onClick={() => setSlideBack(true)} />
        </div>
        {['works', 'skills', 'about'].map((title) => (
          <StyledLink
            as='a'
            href={`#${title}`}
            key={title}
            brighter={true}
            margin='1em'
            active={(`/${(title !== 'home') ? title : ''}` === location.pathname) ? 1 : 0}>
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

export default forwardRef(({ stickyTitle, stickyChat }, ref) => {
  const [showMore, setShowMore] = useState(false);
  let location = useLocation();
  const isActive = location.pathname === '/portfolio';

  return (
    <NavBar ref={ref} className={(stickyTitle || isActive) && 'active'}>

      <WideMenu style={{ justifyContent: 'flex-start' }}>
       <More onClick={() => setShowMore(!showMore)} />
        {showMore && <MoreMenu onClick={() => setShowMore(!showMore)} />}

        {['works', 'skills', 'about'].map((title) => (
          <StyledLink
            as='a'
            href={`#${title}`}
            key={title}
            active={(`/${(title !== 'home') ? title : ''}` === location.pathname) ? 1 : 0}>
            {capitalizeFirstLetter(title)}
          </StyledLink>
        ))}
        {contacts.map(({ title, href}) => <Contact key={title} href={href}>{title}</Contact>)}
      </WideMenu>

      <WideMenu style={{ justifyContent: 'flex-end' }}>
        <ChatNavButton className={(stickyChat || isActive) && 'active'} />
      </WideMenu>

    </NavBar>
  )
});
