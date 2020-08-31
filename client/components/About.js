import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import TimeLineParalax from './TimelineParallax';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Portfolio from './Portfolio-new';
import { HomeButton, CloseV2 } from './Buttons';

export default ({ stickyTitle, setStickyTitle, stickyChat, setStickyChat }) => {
  const [innerHeight, setInnerHeight] = useState(100000);
  const [hash, setHash] = useState('#home');

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setHash(window.location.hash);

    window.addEventListener('hashchange', () => setHash(window.location.hash));
    window.addEventListener('resize', () => {
      setInnerHeight(window.innerHeight);
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
      <Home innerHeight={innerHeight} />
      <Portfolio active={hash === '#works'} />
      <Skills active={hash === '#skills'}  innerHeight={innerHeight} />
      <TimeLineParalax innerHeight={innerHeight} />
    </React.Fragment>
  );
};