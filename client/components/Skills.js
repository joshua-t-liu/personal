import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5em 0;
  align-items: center;
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

const SubTitle = styled.div`
  font-size: 1.5em;
  margin-top: 1em;
`;

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1em 0;
`;

const SkillSet = styled.div`
  display: flex;
  width: 10em;
  height: 6em;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  background-color: rgb(255,255,255);
  border-radius: 0.25em;
  padding: 1em;
  margin 1em;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 0px, rgba(0, 0, 0, 0.16) 0px 47px 46px -27px;
  @media (max-width: ${SMALL_WIDTH}) {
    margin-top: 1em;
  }
`;

const Skills = styled.p`
  font-size: 0.75em;
  font-weight: normal;
  line-height: 1.75em;
  text-align: left;
`;

const SkillSetTitle = styled.div`
  color: dodgerblue;
  @media (max-width: ${SMALL_WIDTH}) {
    align-self: flex-start;
  }
`;

const SKILLS = {
  languages: ['JavaScript', 'Python', 'MUMPS'],
  frameworks: {
    'Front End': ['React', 'React-Native', 'Redux', 'React Router', 'jQuery', 'HTML', 'CSS'],
    'Back End': ['Node', 'Express', 'Nginx', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    'Other': ['Docker', 'AWS', 'Git', 'Jest, Enzyme', 'Webpack', 'Mocha, Chai', 'New Relic', 'Loader.io'],
  },
};

const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.substr(1);

export default () => {
  const skillsRef = useRef();
  const [align, setAlign] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const intersectionCb = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === skillsRef.current) {
          // setAlign(!entry.isIntersecting);
        }
      });
    }

    const observer = new IntersectionObserver(intersectionCb, options);
    observer.observe(skillsRef.current);
  }, []);

  return (
    <Container>
      <Title>What's On The Table</Title>
      <SubTitle><b>Languages:</b> {SKILLS.languages.join(', ')}</SubTitle>
      <Groups>
        {Object.entries(SKILLS.frameworks).map(([skillset, skills], idx) => (
          <SkillSet ref={(!idx) ? skillsRef : null} {...{ align }}>
            <SkillSetTitle>{skillset}</SkillSetTitle>
            <Skills>{skills.join(', ')}</Skills>
          </SkillSet>
        ))}
      </Groups>
    </Container>
  )
}
