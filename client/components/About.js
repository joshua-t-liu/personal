import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import TimeLineParalax from './TimelineParallax';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Portfolio from './Portfolio-new';
import { HomeButton, CloseV2 } from './Buttons';

export default ({ stickyTitle, setStickyTitle, stickyChat, setStickyChat }) => {
  const [hash, setHash] = useState('#home');

  useEffect(() => {
    window.scrollTo(0, 0);
    setHash(window.location.hash);
    window.addEventListener('hashchange', () => setHash(window.location.hash));
    window.addEventListener('resize', () => {
      let id = window.location.hash.substr(1);
      if (id === '') id = 'home';
      const ele = document.getElementById(id);
      window.scroll(0, ele.offsetTop);
    });
  }, []);

  return (
    <React.Fragment>
      {hash !== '#home' && hash !== '' && (
        <React.Fragment>
          <HomeButton />
          <CloseV2 />
        </React.Fragment>
      )}
      <Home {...{ stickyTitle, setStickyTitle, stickyChat, setStickyChat }} />
      <Portfolio active={hash === '#works'} />
      <Skills />
      <TimeLineParalax />
    </React.Fragment>
  );
};