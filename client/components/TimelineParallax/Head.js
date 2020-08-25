import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_WIDTH_INT = 768;
const MEDIUM_WIDTH_INT = 1248;

const TimeLine = styled.div`
  position: absolute;
  top: ${3 + 5}em;
  height: calc(100% - ${3 + 5}em);
  left: 50%;
  width: 0.1em;
  background-color: rgb(196,196,196);
  transform: translateX(-50%);
  visibility: hidden;
  &.active {
    visibility: visible;
  }
  @media (max-width: ${MEDIUM_WIDTH}) {
    visibility: hidden;
    &.active {
      visibility: hidden;
    }
  }
`;

const HeadContainer = styled.div`
position: sticky;
top: 0;
height: 100vh;
width: 100%;
font-size: 3em;
font-weight: bold;
overflow: hidden;
`;

const HeadOutter = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 50%;
width: 12em;
height: 12em;
background-color: rgba(255,255,255,1);
transition-property: width, height, border-width, margin-bottom, font-size, border-color, color;
transition-duration:0.25s;
transition-timing-function: ease-in-out;
&.active {
  width: 5em;
  height: 5em;
  margin-bottom: 9em;
  font-size: 1em;
}
@media (max-width: ${SMALL_WIDTH}) {
  &.active {
    width: 6em;
    height: 6em;
  }
}
`;

const HeadInner = styled(HeadOutter)`
width: 11em;
height: 11em;
background-color: rgba(30,144,255,1);
${HeadOutter}.active > & {
  width: 5em;
  height: 5em;
  background-color: rgba(30,144,255,0.5);
}
@media (max-width: ${SMALL_WIDTH}) {
  ${HeadOutter}.active > & {
    width: 6em;
    height: 6em;
  }
}
`;

const HeadContent = styled(HeadInner)`
  width: 10em;
  height: 10em;
  text-align: center;
  white-space: pre;
  background-color: rgba(255,255,255,1);
  color: rgba(30,144,255,1);
  &:after {
    content: ${({ text }) => `'${text}'`};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  ${HeadOutter}.active > ${HeadInner} > & {
    width: 6em;
    height: 2em;
    color: rgba(30,144,255,0.5);
  }
  @media (max-width: ${SMALL_WIDTH}) {
    ${HeadOutter}.active > ${HeadInner}> & {
      width: 7em;
      height: 2em;
    }
}
`;

export default ({ offset }) => {
  const ref = useRef();

  return (
    <React.Fragment>
      <div ref={ref} />

      <TimeLine className={ref.current && (ref.current.offsetTop < offset) && 'active'} />

      <HeadContainer id='head'>
        <HeadOutter className={ref.current && (ref.current.offsetTop < offset) && 'active'}>
          <HeadInner>
            <HeadContent text='My Journey' />
          </HeadInner>
        </HeadOutter>
      </HeadContainer>

      <div style={{ height: '10vh' }} />
    </React.Fragment>
  )
};