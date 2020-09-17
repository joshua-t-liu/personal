import React, { useRef, FC } from 'react';
import styled from 'styled-components';

import SKILLS from '../skill_data';

const SMALL_WIDTH = '768px';

const Container = styled.div`
  height: ${({ innerHeight }) => `calc(${innerHeight}px - 8em)`};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4em 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
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
  justify-content: space-around;
  margin: auto 0;
  @media (max-width: ${SMALL_WIDTH}) {
    margin-top: 1em;
  }
`;

const SkillSetTitle = styled.div`
  color: dodgerblue;
  transform: translateY(5em);
  opacity: 0;
  transition: transform 0.5s ease-in-out 0.11s,opacity 0.5s ease-in-out 0.11s;
  &:before {
    content: ${({ title }) => `"${title}"`};
  }
`;

const Skill = styled.p`
  font-size: 0.75em;
  font-weight: normal;
  line-height: 2em;
  margin: 0;
  transform: translateY(5em);
  opacity: 0;
  &.active {
    transition: ${({ delay }) => `transform 0.5s ease-in-out ${(1 + delay) / 8 + 0.11}s,opacity 0.5s ease-in-out ${(1 + delay) / 8 + 0.11}s`};
  }
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
    & > ${SkillSetTitle} {
      transform: translateY(0);
      opacity: 1;
    }
    & > ${Skill} {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (max-width: ${SMALL_WIDTH}) {
    width: calc(100% - 2em);
    text-align: center;
    &.active {
      & > ${SkillSetTitle} {
        transform: translateY(0);
        opacity: 1;
      }
      & > ${Skill} {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;

interface ListProps {
  skillset: string;
  skills: Array<string>;
  active: boolean;
}

const List: FC<ListProps> = ({ skillset, skills, active }) => {
  const ref = useRef();
  return (
    <SkillSet ref={ref} className={active && 'active'}>
      <SkillSetTitle title={skillset} />
      {skills.map((skill, idx) => <Skill className={active && 'active'} key={skill} delay={idx}>{skill}</Skill>)}
    </SkillSet>
  );
};

interface SkillsProps {
  innerHeight: number;
  active: boolean;
}

const Skills: FC<SkillsProps> = ({ innerHeight, active }) => (
  <Container id="skills" innerHeight={innerHeight}>
    <Title className={active && 'active'}>Skills</Title>
    <SkillSets>
      {Object.entries(SKILLS.frameworks).map(([skillset, skills]) => (
        <List key={skillset} {...{ skillset, skills }} active={active} />
      ))}
    </SkillSets>
  </Container>
);

export default Skills;
