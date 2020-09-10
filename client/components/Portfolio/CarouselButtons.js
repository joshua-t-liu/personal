import React from 'react';
import styled from 'styled-components';

import { LeftArrow, RightArrow, HomeButton } from '../Buttons';

const PADDING = 3;
const SMALL_WIDTH = '768px';

const StyledButtons = styled.div`
  display: flex;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-timing-function: ease-in;
  margin-top: 1em;
  &.active {
    opacity: 1;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    display: none;
  }
`;

const Button = styled.div`
  position: relative;
  margin: 1em 0.25em;
  cursor: pointer;
  width: 2em;
  height: 0.2em;
  background-color: rgb(192,192,192);
  &.active {
    background-color: rgb(74,74,74);
  }
`;

const Buttons = ({ active, animState, shift, setShift }) => {
  return (
      <StyledButtons className={(active && animState === null) && 'active'}>
        <Button className={!shift && 'active'} onClick={() => setShift(0)}></Button>
        <Button className={shift && 'active'} onClick={() => setShift(-50)}></Button>
      </StyledButtons>
  )
};

const StyledSpace = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left ? `-${PADDING}em` : null};
  right: ${({ left }) => !left ? `-${PADDING}em` : null};
  height: 100%;
  width: ${() => `${2 * PADDING}em`};
  background-color: rgb(255,255,255);
  z-index:10;
  opacity: 0;
  transition: opacity 0.1s 0.5s ease-in-out;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: auto;
  }
  @media (max-width: ${SMALL_WIDTH}) {
    display: none;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Space = ({ left, active, animState, shift, onClick }) => (
  <StyledSpace left={left} className={(active && animState === null) && 'active'}>
    <ArrowContainer>
      {left && <LeftArrow active={active && shift} onClick={onClick}/>}
      {!left && <RightArrow active={active && !shift} onClick={onClick}/>}
    </ArrowContainer>
  </StyledSpace>
)

export {
  Buttons,
  Space,
}