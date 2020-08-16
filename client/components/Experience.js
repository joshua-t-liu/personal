import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { College, BootCamp } from './SVG';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;
  text-align: center;
  &.gray {
    background-color: rgb(247,247,247);
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 0;
`;

const SubTitle = styled.div`
  font-size: 1.5em;
  margin-top: 1em;
`;

const Bubbles = styled.div`
  position: relative;
  margin-top: 1.5em;
  align-self: stretch;
  min-height: calc(100vh - 16em);
  z-index: -1;
`;

const StyledBubble = styled.div`
  background-color: rgb(247,247,247);
  border-radius: 50%;
  font-size: 2.5em;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  left: 50%;
  height: ${({ size }) => `${2.25 * size}em`};
  width: ${({ size }) => `${2.25 * size}em`};
  transform: ${({ transform }) => `translate(${transform[0][0]}em, ${transform[0][1]}em)`};
  z-index: -1;
  @media (max-width: ${SMALL_WIDTH}) {
    transform: ${({ transform }) => `translate(${transform[1][0]}em, ${transform[1][1]}em)`};
  }
`;

const SubText = styled.div`
  font-size: 0.5em;
  margin-top: 0.5em;
  font-weight: 900;
`;

const Bubble = ({ company, years, ...props }) => (
  <StyledBubble {...props}>
    <div>{years}</div>
    <SubText>{company}</SubText>
  </StyledBubble>
);

const School = styled.div`
  width: 15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em;
`;

const Circle = styled.div`
  background-color: rgb(255,255,255);
  border-radius: 50%;
  height: 10em;
  width: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Schools = styled.div`
  display: flex;
  margin-top: 3em;
  align-items: center;
  @media (max-width: ${SMALL_WIDTH}) {
    flex-direction: column;
  }
`;

const Program = styled.p`
  color: rgb(123,123,123);
  text-align: center;
`;

const Badge = ({ image, title, degree }) => {
  const Image = image;

  return (
    <School>
      <Circle>
        <Image />
      </Circle>
      <SubTitle><b>{title}</b></SubTitle>
      <Program>{degree}</Program>
    </School>
  )
}

const schools = [
  {
    title: 'Georgia Institute of Techology',
    degree: 'B.S. Mathematics',
    image: College,
  },
  {
    title: 'Hack Reactor',
    degree: 'Advanced Software Engineering Immersive Program',
    image: BootCamp,
  },
]

export default () => {
  const translation = [
    [[-7, -6], [-6, -6]],
    [[0.5, -4.5], [0.5, -2]],
    [[1, 0.5], [-0.5, 3]],
    [[-4, 1], [-5, 1]]
  ];
  return (
    <>
      <Container>
        <Title>7 Years of Software Implementation Experience</Title>
        <SubTitle>Working with Epic, an enterprise healthcare software</SubTitle>
        <Bubbles>
          <Bubble company='Epic' years='3 years' size={3} transform={translation[0]} />
          <Bubble company='HCI Group' years='1 year' size={2} transform={translation[1]} />
          <Bubble company='Mass General Brigham' years='2 years' size={2.5} transform={translation[2]} />
          <Bubble company='Huron Consulting' years='1 year' size={2} transform={translation[3]} />
        </Bubbles>
      </Container>

      {/* <SubTitle>Collaborating in cross-functional teams</SubTitle>
      <SubTitle>In multiple capacities</SubTitle> */}
      {/* {<li>Project Management</li>
            <li>Feature Development</li>
            <li>Requirements Gathering</li>
            <li>Testing</li>
            <li>Release Planning</li>
            <li>Debugging</li>} */}

      <Container className={'gray'}>
        <Title>Where I've Studied</Title>
        <Schools>
          {schools.map((school) => <Badge {...school}/>)}
        </Schools>
      </Container>
      </>
  );
}