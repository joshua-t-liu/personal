import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5em 1em;
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

const rotate = (to) => keyframes`
  to {
    transform: rotate3d(0, 1, 0, ${to}deg);
  }
`;

const SkillSetTitle = styled.div`
  @media (max-width: ${SMALL_WIDTH}) {
    align-self: flex-start;
  }
`;

const SkillSet = styled.div`
  display: flex;
  width: 10em;
  height: 6em;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  border-radius: 0.25em;
  padding: 1em;
  margin 1em;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 0px, rgba(0, 0, 0, 0.16) 0px 47px 46px -27px;
  background-color: ${({ flip }) => (flip) ? `rgb(255,255,255)` : 'dodgerblue'};
  justify-content: ${({ flip }) => !flip && `center`};
  transform: ${({ flip }) => `rotate3d(0, 1, 0, ${(flip) ? 90 : 0}deg)`};
  & > ${SkillSetTitle} {
    margin: ${({ flip }) => !flip && `auto`};
  }
  &.active {
    animation: ${({ flip }) => css`${rotate((flip) ? 0 : -90)} 0.5s linear 0s forwards`};
  }
  & > ${SkillSetTitle} {
    color: ${({ flip }) => (flip) ? 'dodgerblue' : 'white'};
  }
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

const SKILLS = {
  languages: ['JavaScript', 'Python', 'MUMPS'],
  frameworks: {
    'Front End': ['React', 'React-Native', 'Redux', 'React Router', 'jQuery', 'HTML', 'CSS'],
    'Back End': ['Node', 'Express', 'Nginx', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    'Other': ['Docker', 'AWS', 'Git', 'Jest, Enzyme', 'Webpack', 'Mocha, Chai', 'New Relic', 'Loader.io'],
  },
};

const Card = ({ skillset, skills, reverse }) => {
  const [animState, setAnimState] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }

    const intersectionCb = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref.current) setAnimState(curr => {
          if (curr === 0 && entry.isIntersecting) return curr + 1;
          return curr;
        });
      });
    }

    const observer = new IntersectionObserver(intersectionCb, options);
    observer.observe(ref.current);
  }, []);

  return (
    <React.Fragment>
      {animState < 2 && (
          <SkillSet
            ref={ref}
            className={animState && 'active'}
            onAnimationEnd={() => setAnimState(curr => curr + 1)}
            >
            <SkillSetTitle>{skillset}</SkillSetTitle>
          </SkillSet>
      )}
      {animState > 1 && (
          <SkillSet flip={true} className={animState && 'active'}>
            <SkillSetTitle>{skillset}</SkillSetTitle>
            <Skills>{skills.join(', ')}</Skills>
          </SkillSet>
      )}
    </React.Fragment>
  );
};

export default () => {
  return (
    <Container>
      <Title>Here's What I Bring</Title>
      <SubTitle><b>Languages:</b> {SKILLS.languages.join(', ')}</SubTitle>
      <Groups>
        {Object.entries(SKILLS.frameworks).map(([skillset, skills], idx) => (
          <Card key={skillset} {...{ skillset, skills }} />
        ))}
      </Groups>
    </Container>
  )
}
