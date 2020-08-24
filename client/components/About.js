import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import TimeLineParalax from './TimelineParallax';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';

export default ({ stickyTitle, setStickyTitle, stickyChat, setStickyChat }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <React.Fragment>
      <Home {...{ stickyTitle, setStickyTitle, stickyChat, setStickyChat }} />
      <Skills />
      <TimeLineParalax />
      {/* <Experience /> */}
    </React.Fragment>
  );
};