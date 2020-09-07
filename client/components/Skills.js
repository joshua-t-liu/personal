import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import SKILLS from '../skill_data';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  height: ${({ innerHeight }) => `calc(${innerHeight}px - 8em)`};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 4em 1em;
  align-items: stretch;
  text-align: center;
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 0.75em;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 0;
  opacity: 0;
  transform: translate(0, -5em);
  transition: transform 0.33s ease-in-out 0s, opacity 0.33s ease-in-out 0s;
  &.active {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const SkillSets = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto 0;
  @media (max-width: ${SMALL_WIDTH}) {
    margin-top: 1em;
  }
`;

const SkillSetTitle = styled.div`
  color: dodgerblue;
  transform: translateY(5em);
  opacity: 0;
  background
  @media (max-width: ${SMALL_WIDTH}) {
    align-self: flex-start;
  }
  transition: transform 0.5s ease-in-out 0.11s,opacity 0.5s ease-in-out 0.11s;
  &:before {
    content: ${({ title }) => `"${title }"`};
  }
`;

const Skills = styled.p`
  font-size: 0.75em;
  font-weight: normal;
  line-height: 2em;
  margin: 0;
  transform: translateY(5em);
  opacity: 0;
  transition: ${({ delay }) => css`transform 0.5s ease-in-out ${(1 + delay)/8 + 0.11}s,opacity 0.5s ease-in-out ${(1 + delay)/8 + 0.11}s`};
`;

const SkillSet = styled.div`
  width: calc(20% - 2em);
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  text-align: left;
  margin: 1em;
  background-color: rgba(0,0,0,0.033);
  &.active {
    & > div > ${SkillSetTitle} {
      transform: translateY(0);
      opacity: 1;
    }
    & > div > ${Skills} {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (max-width: ${SMALL_WIDTH}) {
    width: calc(100% - 2em);
    text-align: center;
  }
`;

const List = ({ skillset, skills, active }) => {
  const ref = useRef();

  return (
    <SkillSet ref={ref} className={active && 'active'}>
      <div>
        <SkillSetTitle title={skillset} />
        {skills.map((skill, idx) => <Skills key={idx} delay={idx}>{skill}</Skills>)}
      </div>
    </SkillSet>
  );
};

export default ({ innerHeight, active }) => {
  const ref = useRef();

  return (
    <Container id='skills' ref={ref} innerHeight={innerHeight} >
      <Title className={active && 'active'} >Skills</Title>
      <SkillSets>
        {Object.entries(SKILLS.frameworks).map(([skillset, skills], idx) => (
          <List key={skillset} {...{ skillset, skills }} active={active} />
        ))}
      </SkillSets>
    </Container>
  )
}
