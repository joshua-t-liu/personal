import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { GitHubButton } from './Buttons';
import portfolios from '../portfolio_data';

const SMALL_WIDTH = '768px';
const SMALL_WIDTH_NUM = 768;
const MEDIUM_WIDTH = '1248px';

const Layout = styled.div`
  display: flex;
  margin-top: ${({ height }) => `${height}px`};
  @media (max-width: ${MEDIUM_WIDTH}) {
    font-size: 0.75em;
  }
  flex-direction: ${({ odd }) => !odd && 'row-reverse'};
`;

const Cell = styled.div`
  width: 50%;
  padding: 0 2em;
  &.sticky {
    position: sticky;
    height: ${({ height }) => `calc(100vh - ${height}px)`};
    display: flex;
    align-items: center;
    top: ${({ height }) => `${height}px`};
  }
  @media (max-width: ${SMALL_WIDTH}) {
    width: 100%;
    &.sticky {
      display: none;
    }
  }
`;

const CellMobile = styled.div`
  display: none;
  margin: 5em 0;
  @media (max-width: ${SMALL_WIDTH}) {
    display: block;
  }
`;

const Divider = styled.div`
  box-sizing: border-box;
  height: 1px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  display: block;
  background: rgb(236, 236, 236);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5em 0;
  &:first-child {
    padding-top: 3em;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 3em;
  text-align: left;
`;

const Situation = styled.p`
  font-size: 1.5em;
`;

const Info = styled.p`
  font-size: 1.5em;
  @media (max-width: ${SMALL_WIDTH}) {
    text-align: left;
  }
`;

const Bullet = styled.li`
  font-size: 1.5em;
  margin-top: 1em;
  &:first-child {
    margin-top: 0;
  }
`;

const Result = styled.p`
  font-size: 1.5em;
`;

const Subheader = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  text-align: left;
  margin-top: 2em;
  margin-bottom: 0;
  @media (max-width: ${SMALL_WIDTH}) {
    text-align: left;
  }
`;

const ActionList = styled.ul`
  padding: 1.5em;
  padding-top: 1em;
`;

const Portfolio = (props) => {
  const Component = props.Component;

  return (
    <React.Fragment>
      <Container>
        <Title>{props.title}</Title>
        <Subheader>Overview</Subheader>
        <Situation>{props.situation}</Situation>
        <Subheader>Technology</Subheader>
        <Info>{props.technology.join(', ')}</Info>
        <Subheader>My Work</Subheader>
        <ActionList>
          {props.actions.map((action, idx) => <Bullet key={idx}>{action}</Bullet>)}
        </ActionList>
        <Subheader>Outcome</Subheader>
        <Result>{props.result}</Result>
        {props.isMobile && (
          <CellMobile>
            <Component />
          </CellMobile>
        )}
        {props.href && (
          <div style={{ margin: 'auto', marginTop: '3em' }}>
            <GitHubButton href={props.href} />
          </div>
        )}
      </Container>
    </React.Fragment>
  )
};

export default ({ height }) => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > SMALL_WIDTH_NUM);
    setIsMobile(window.innerWidth <= SMALL_WIDTH_NUM);

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = './bundle.js';
      document.body.append(script);
    }
    loadScript();

    window.addEventListener('resize', () => {
      setIsDesktop(window.innerWidth > SMALL_WIDTH_NUM);
      setIsMobile(window.innerWidth <= SMALL_WIDTH_NUM);
      if (!document.getElementById('image-gallery').childElementCount) loadScript();
    })
    window.scrollTo(0, 0);

  }, []);

  return (
    <React.Fragment>
      {portfolios.map((portfolio, idx) => {
        const Component = portfolio.Component;
        return (
          <React.Fragment key={idx}>
            <Layout height={height} odd={idx % 2} >
              {isDesktop && <Cell className='sticky' height={height} ><Component /></Cell>}
              <Cell><Portfolio {...portfolio} isMobile={isMobile} /></Cell>
            </Layout>
            {(idx < portfolios.length - 1) && <Divider />}
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
};
