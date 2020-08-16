import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { GitHubButton } from './Buttons';
import portfolios from '../portfolio_data';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Portfolios = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5em 0;
  width: 50%;
  @media (max-width: ${SMALL_WIDTH}) {
    width: 90%;
  }
`;

const Title = styled.h2`
  margin: 0;
  align-self: center;
  font-size: 3em;
  text-align: center;
  &:after {
    content: ${({ technology }) => (technology) ? `"${technology.join(', ')}"` : null};
    font-size: 0.4em;
    display: block;
    text-align: center;
    margin-top: 0.25em;
    font-weight: normal;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    text-align: left;
    &:after {
      text-align: left;
    }
  }
`;

const Detail = styled.div`
`;

const Situation = styled.p`
  font-size: 1.5em;
  margin-top: 2em;
`;

const Info = styled.li`
  font-size: 1.5em;
  margin-top: 1em;
  &:first-child {
    margin-top: 0;
  }
`;

const Result = styled.p`
  font-size: 1.5em;
`;

const Divider = styled.div`
  box-sizing: border-box;
  height: 1px;
  width: 100%;
  max-width: 1366px;
  display: block;
  margin: 0px auto;
  background: rgb(236, 236, 236);
`;

const Actions = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 0;
`;

const ActionList = styled.ul`
  padding: 1.5em;
  padding-top: 1em;
`;

const Demo = styled.div`
  margin: 3em 0;
`;

const Portfolio = (props) => {
  return (
    <Container even={props.even}>
      <Title technology={props.technology}>{props.title}</Title>
      <Detail>
        <Situation>{props.situation}</Situation>
        <Actions>What I did:</Actions>
        <ActionList>
          {props.actions.map((action) => <Info>{action}</Info>)}
        </ActionList>
        <Result>{props.result}</Result>
      </Detail>
      {props.elementId && <Demo id={props.elementId}/>}
      <div style={{ margin: 'auto', marginTop: '3em' }}>
        <GitHubButton href={props.href} />
      </div>
    </Container>
  )
}

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.25em;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
`;

const PortfolioButton = ({ title }) => {
  return (
    <Button>
      <div>{title}</div>
    </Button>
  );
};

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement('script');
    script.src = './bundle.js';
    document.body.append(script);
  }, []);

  return (
    <Portfolios>
      {portfolios.map((portfolio, idx) => (
        <>
          {(idx > 0) && <Divider />}
          <Portfolio key={idx} even={idx % 2 === 0} {...portfolio}/>
        </>
      ))}
    </Portfolios>
  )
};