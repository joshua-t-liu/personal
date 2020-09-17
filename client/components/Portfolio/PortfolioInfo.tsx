import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

import { GitHubButton, CloseV2 } from '../Buttons';
import { computeClassNames } from '../../helper';

const SMALL_WIDTH = '768px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH = '1248px';

const appear = (top = 0) => keyframes`
  from {
    top: ${200 + top}vh
  }
  to {
    top: 0;
  }
`;

const Modal = styled.div`
  height: calc(100% - 4em);
  width: calc(100% - 4em);
  padding: 2em;
  font-family: sans-serif;
  position: fixed;
  z-index: 1000;
  top: 200vh;
  overflow-y: scroll;
  background-color: white;
  animation: ${appear()} 1s ease-in-out 0s forwards;
  &.reverse {
    animation: ${appear(1)} 1s ease-in-out 0s reverse;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3em 0;
  background-color: white;
  @media (max-width: ${MEDIUM_WIDTH}) {
    font-size: 0.75em;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 3em;
  text-align: left;
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

const Subheader = styled.p`
  font-weight: 900;
  font-size: 2em;
  text-align: left;
  margin-bottom: 0;
  @media (max-width: ${SMALL_WIDTH}) {
    text-align: left;
  }
`;

const ActionList = styled.ul`
  padding: 1.5em;
  padding-top: 1em;
  margin-bottom: 0;
`;

interface DetailProps {
  portfolio: {
    isMobile: boolean;
    title: string;
    situation: string;
    technology: string;
    actions: string;
    result: string;
    href: string;
    Component: {};
  }
}

const Portfolio: FC<DetailProps> = ({ portfolio }) => {
  const {
    isMobile, title, situation, technology, actions, result, href, Component,
  } = portfolio;
  if (!Component) return <div />;
  return (
    <Layout>
      {isMobile && <Title>{title}</Title>}
      <Info>{situation}</Info>
      <Subheader>Technology</Subheader>
      <Info>{technology.join(', ')}</Info>
      <Subheader>My Work</Subheader>
      <ActionList>
        {actions.map((action, idx) => <Bullet key={idx}>{action}</Bullet>)}
      </ActionList>
      <Subheader>Outcome</Subheader>
      <Info>{result}</Info>
      <div style={{ marginTop: '3em' }}>
        <Component />
      </div>
      {href && (
      <div style={{ margin: 'auto', marginTop: '3em' }}>
        <GitHubButton href={href} />
      </div>
      )}
    </Layout>
  );
};

const slide = (top = 0) => keyframes`
  from {
    opacity: 0;
    transform: translate(0, ${50 + top}%)  scale(0.5, 2);
  }
  to {
    opacity: 1;
    transform: translate(0, 0)  scale(0.5, 2);
  }
`;

const Container = styled.div`
  width: calc(100vw - 20em);
  padding: 0 10em;
  margin: 0;
  opacity: 0;
  transform: translate(0, 50%) scale(0.5, 2);
  transform-origin: top;
  &.active {
    animation: ${slide()} 0.25s ease-in-out 0s forwards;
  }
  &.reverse {
    animation: ${slide(1)} 0.25s ease-in-out 0s reverse;
  }
`;

interface Props {
  width?: number;
  active?: boolean;
  portfolio: {};
  close?(): void;
  reverse: boolean;
}

const PortfolioDesktop: FC<Props> = ({ active, portfolio, reverse }) => (
  <Container
    onAnimationEnd={(event) => event.stopPropagation()}
    className={computeClassNames({ reverse, active })}
  >
    <Portfolio portfolio={portfolio} />
  </Container>
);

const PortfolioMobile: FC<Props> = ({ portfolio, close, reverse }) => createPortal((
  <Modal
    className={reverse ? 'reverse' : ''}
    onClick={(event) => event.stopPropagation()}
  >
    <CloseV2 type="div" position="fixed" onlyMobile={false} onClick={close} />
    <Portfolio portfolio={portfolio} isMobile />
  </Modal>
), document.getElementById('modal-portfolio'));

const PortfolioInfo: FC<Props> = ({
  width, active, portfolio, reverse, close,
}) => {
  if (width < SMALL_WIDTH_INT) {
    return (
      <PortfolioMobile
        reverse={reverse}
        portfolio={portfolio}
        close={close}
      />
    );
  }
  return (
    <PortfolioDesktop
      active={active}
      reverse={reverse}
      portfolio={portfolio}
    />
  );
};

export default PortfolioInfo;
