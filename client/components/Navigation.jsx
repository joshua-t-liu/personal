import React from 'react';
import styled from 'styled-components';

const SMALL_WIDTH = '768px';

const Link = styled.div`
  margin: 1.75em;
  border: solid 0.1em rgb(51,51,51);
  border-radius: 2em;
  padding: 0.5em 1em;
  font-weight: bold;
  color: rgb(51,51,51);
  cursor: pointer;
  text-decoration: none;
  background-color: rgb(255,255,255);
  position: relative;
  &:hover {
    color: dodgerblue;
    border-color: dodgerblue;
  }
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

export default () => (
  <NavBar>
    <Line />
    {['work', 'skills', 'about'].map((title) => (
      <Link
        as="a"
        href={`#${title}`}
        key={title}
      >
        {title.toUpperCase()}
      </Link>
    ))}
  </NavBar>
);
