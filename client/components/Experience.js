import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Timeline from './Timeline';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 1em;
  text-align: center;
  &.gray {
    background-color: rgb(247,247,247);
  }

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

export default () => {
  const ref = useRef();
  const [startTimeLine, SetStartTimeLine] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const intersectionCb = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref.current) {

          SetStartTimeLine(curr => {
            console.log(curr || entry.isIntersecting);
            return curr || entry.isIntersecting;
          });
        }
      });
    }

    const observer = new IntersectionObserver(intersectionCb, options);
    observer.observe(ref.current);
  }, []);

  return (
    <React.Fragment>
      <Container>
        {/* 7 Years of Software Implementation Experience */}
        <Title>Timeline</Title>
        <SubTitle>7 years of software implementation experience, working with Epic, an enterprise healthcare software</SubTitle>
        <Timeline ref={ref} startTimeLine={startTimeLine}/>
      </Container>

      {/* include experience from past jobs */}
      </React.Fragment>
  );
}
