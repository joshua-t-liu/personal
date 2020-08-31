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
  justify-content: space-evenly;
`;

const StyledLink = styled.div`
  margin: ${({ margin }) => margin || '1.75em'};
  border: solid 0.1em rgb(51,51,51);
  border-radius: 2em;
  padding: 0.5em 1em;
  font-weight: bold;
  color: rgb(51,51,51);
  cursor: pointer;
  text-decoration: none;
  background-color: rgb(255,255,255);
  z-index: 1;
  position: relative;
  &:before {
    background-color: white;
    content: "";
    width: 1em;
    left: -1.1em;
    position: absolute;
    height: 100%;
    top: 0;
  }
  &:after {
    background-color: white;
    content: "";
    width: 1em;
    right: -1.1em;
    position: absolute;
    height: 100%;
    top: 0;
  }
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
  justify-content: space-evenly;
  align-items: center;
  z-index: 1000;
  &.active {
    background-color: rgb(255,255,255);
    border-bottom: 1px solid rgb(218, 218, 218);
  }
  // @media (max-width: ${MEDIUM_WIDTH}) {
  //   flex-wrap: wrap
  // }
`;

const Line = styled.div`
  position: absolute;
  background-color: rgb(51,51,51);
  width: 90%;
  height: 0.1em;
  @media (max-width: ${SMALL_WIDTH}) {
    width: 80%;
  }
`;

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
      <Line />
      {['work', 'skills', 'about'].map((title) => (
          <StyledLink
            as='a'
            href={`#${title}`}
            key={title}
            active={(`/${(title !== 'home') ? title : ''}` === location.pathname) ? 1 : 0}>
            {title.toUpperCase()}
          </StyledLink>
        ))}
    </NavBar>
  )
});
