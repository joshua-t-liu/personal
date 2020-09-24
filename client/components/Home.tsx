import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import Container from './Container';
import Navigation from './Navigation';
import { Social } from './Buttons';
import { SMALL_WIDTH } from '../helper';

const Banner = styled.div`
  margin: auto;
  width: 60%;
  @media (max-width: ${SMALL_WIDTH}) {
    width: 90%;
  }
`;

const Role = styled.p`
  color: dodgerblue;
  font-weight: bold;
  font-size: 1.75em;
  margin: 0 auto;
  text-align: center;
`;

const shiftUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0em);
  }
`;

const Menu = styled.div`
  transform: translateY(2em);
  opacity: 0;
  animation: ${shiftUp} 0.5s ease-in-out 0s forwards;
`;

const Title = styled.h1`
  font-size: 5em;
  margin: 0.1em 0;
  text-align: center;
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 4em;
  }
`;

interface Props {
  innerHeight: number;
}

const Home: FC<Props> = ({ innerHeight }) => (
  <Container id="home" innerHeight={innerHeight}>
    <Banner>
      <Role>Full Stack Engineer </Role>
      <Title>JOSHUA LIU</Title>
      <Menu>
        <Navigation />
        <Social justifyContent="center" />
      </Menu>
    </Banner>
  </Container>
);

export default Home;
