import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

import { GitHubButton, CloseV2 } from './Buttons';

const SMALL_WIDTH = '768px';
const SMALL_WIDTH_NUM = 768;
const MEDIUM_WIDTH = '1248px';

const appear = keyframes`
  to {
    opacity: 1;
  }
`;

const Modal = styled.div`
  font-family: sans-serif;
  position: fixed;
  z-index: 1000;
  height: calc(100% - 4em);
  width: calc(100% - 4em);
  top: 0;
  left: 0;
  padding: 2em;
  backdrop-filter: blur(0.25em);
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  animation: ${appear} 0.25s ease-in-out 0s forwards;
  @media (max-width: ${SMALL_WIDTH}) {
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const ModalBody = styled.div`
  position: relative;
  height: calc(100% - 2em);
  padding: 1em 0;
  background-color: white;
  @media (max-width: ${SMALL_WIDTH}) {
    border-radius: 0;
  }
`;

const Layout = styled.div`
  display: flex;
  height: calc(100% - 2em);
  margin-top: ${({ height }) => `${height}px`};
  @media (max-width: ${MEDIUM_WIDTH}) {
    font-size: 0.75em;
  }
  flex-direction: ${({ odd }) => !odd && 'row-reverse'};
`;

const Cell = styled.div`
  width: 50%;
  padding: 0 2em;
  overflow-y: scroll;
  &.sticky {
    overflow-y: hidden;
    position: sticky;
    height: 100%;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  )
};

export default ({ height, portfolio, close }) => {
  const [isMounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > SMALL_WIDTH_NUM);
    setIsMobile(window.innerWidth <= SMALL_WIDTH_NUM);
  }, []);

  const Component = portfolio.Component;

  return createPortal((
          <Modal onClick={close}>
            <ModalBody onClick={(event) => event.stopPropagation()}>
              {/* <div style={{ position: 'absolute', top: '1em', right: '1em', padding: '0 1em' }}><Close fill='rgb(74,74,74)' onClick={close} /></div> */}

              <div onClick={close}><CloseV2 type='div' position='absolute' onlyMobile={false}/></div>
              <Layout height={height}>
                <Cell><Portfolio {...portfolio} isMobile={isMobile} /></Cell>
                {isDesktop && <Cell className='sticky' height={height} ><Component /></Cell>}
              </Layout>
            </ModalBody>
          </Modal>
        ), document.getElementById('modal-portfolio'));
};
