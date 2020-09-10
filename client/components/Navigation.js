import React from 'react';
import styled from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const StyledLink = styled.div`
  margin: 1.75em;
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
`;

const NavBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  &:before, &:after {
    content: "";
    display: block;
  }
  align-items: center;
  z-index: 1000;
`;

const Line = styled.div`
  position: absolute;
  background-color: rgb(51,51,51);
  width: 80%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${SMALL_WIDTH}) {
    width: 80%;
  }
`;

export default () => {
  return (
    <NavBar>
      <Line />
      {['work', 'skills', 'about'].map((title) => (
          <StyledLink
            as='a'
            href={`#${title}`}
            key={title}>
            {title.toUpperCase()}
          </StyledLink>
        ))}
    </NavBar>
  )
};