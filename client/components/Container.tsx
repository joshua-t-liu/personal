import React, { FC } from 'react';
import styled from 'styled-components';

import { MEDIUM_WIDTH } from '../helper';

const StyledContatiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2em;
  height: ${({ $innerHeight }) => `calc(${$innerHeight}px - 4em)`};
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: ${MEDIUM_WIDTH}) {
    padding: 2em 0.5em;
    // font-size: 0.75em;
  }
`;

interface Props {
  id?: string;
  innerHeight: number;
  children: {};
}

const Container: FC<Props> = ({ id, innerHeight, children }) => (
  <StyledContatiner id={id} $innerHeight={innerHeight}>
    {children}
  </StyledContatiner>
)

export default Container;