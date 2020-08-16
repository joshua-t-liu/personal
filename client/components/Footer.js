import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Social } from './Buttons';

//Icons made by <a href="https://www.flaticon.com/free-icon/email_181535" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

//Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Footer = styled.div`
  display: flex;
  background-color: rgb(49,49,49);
  padding: 1em;
  align-items: center;
  padding: 2em;
  @media (max-width: ${SMALL_WIDTH}) {
    flex-direction: column-reverse;
  }
`;

const Acknowledge = styled.div`
  flex-grow: 1;
  justify-self: flex-start;
  color: rgba(183,183,183,0.5);
`;

const PlainLink = styled.a`
  color: rgba(183,183,183,0.5);
`;

export default () => {
  return (
    <Footer>
      <Acknowledge>
        Icons made by <PlainLink href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</PlainLink>, <PlainLink href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</PlainLink>, <PlainLink href="https://www.flaticon.com/free-icon/email_181535" title="Chanut">Chanut</PlainLink>, <PlainLink href="https://www.flaticon.com/free-icon/exercise_2928158" title="Good Ware">Good Ware</PlainLink>, and <PlainLink href="http://www.dariusdan.com/" title="Darius Dan">Darius Dan</PlainLink> from <PlainLink href="https://www.flaticon.com/" title="Flaticon"> flaticon</PlainLink>.
      </Acknowledge>
      <div><Social /></div>
    </Footer>
  );
}
