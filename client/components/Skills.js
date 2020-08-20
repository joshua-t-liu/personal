import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5em 1em;
  align-items: stretch;
  text-align: center;
  background-color: rgb(247,247,247);
  @media (max-width: ${SMALL_WIDTH}) {
    font-size: 0.75em;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 0;
`;

const SkillSets = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 3em;
  @media (max-width: ${SMALL_WIDTH}) {
    margin-top: 1em;
  }
`;

const SkillSetTitle = styled.div`
  color: dodgerblue;
  transform: translateY(5em);
  opacity: 0;
  @media (max-width: ${SMALL_WIDTH}) {
    align-self: flex-start;
  }
  transition: transform 0.5s ease-in-out 0.25s,opacity 0.5s ease-in-out 0.25s};
`;

const Skills = styled.p`
  font-size: 0.75em;
  font-weight: normal;
  line-height: 2em;
  margin: 0;
  transform: translateY(5em);
  opacity: 0;
  transition: ${({ delay }) => css`transform 0.5s ease-in-out ${(1 + delay)/8 + 0.25}s,opacity 0.5s ease-in-out ${(1 + delay)/8 + 0.25}s`};
`;

const SkillSet = styled.div`
  width: 20%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  text-align: left;
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
    width: 33%;
  }
`;

const SKILLS = {
  languages: ['JavaScript', 'Python', 'MUMPS'],
  frameworks: {
    Languages: ['JavaScript', 'Python', 'MUMPS'],
    'Other': ['Docker', 'AWS', 'Git', 'Jest, Enzyme', 'Webpack', 'Babel', 'Mocha, Chai', 'New Relic', 'Loader.io'],
    'Front End': ['React', 'React-Native', 'Redux', 'React Router', 'jQuery', 'HTML', 'CSS'],
    'Back End': ['Node', 'Express', 'Nginx', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
};

const List = ({ skillset, skills, reverse }) => {
  const [animState, setAnimState] = useState(false);
  const ref = useRef();

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const intersectionCb = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref.current) setAnimState(curr => curr || entry.isIntersecting);
        });
    };

    const observer = new IntersectionObserver(intersectionCb, options);
    observer.observe(ref.current);
  }, []);

  return (
    <SkillSet ref={ref} className={animState && 'active'}>
      <div>
        <SkillSetTitle>{skillset}</SkillSetTitle>
        {skills.map((skill, idx) => <Skills key={idx} delay={idx}>{skill}</Skills>)}
      </div>
    </SkillSet>
  );
};

export default () => {
  return (
    <Container>
      <Title>Here's What I Bring</Title>
      <SkillSets>
        {Object.entries(SKILLS.frameworks).map(([skillset, skills], idx) => (
          <List key={skillset} {...{ skillset, skills }} />
        ))}
      </SkillSets>
    </Container>
  )
}
