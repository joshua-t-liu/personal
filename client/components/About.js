import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TimeLineParalax from './TimelineParallax/';
import Form from './Form';
import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio/';
import { HomeButton } from './Buttons';

export default () => {
  const [innerHeight, setInnerHeight] = useState(100000);
  const [hash, setHash] = useState('#home');

  useEffect(() => {

    const jump = () => {
      let id = window.location.hash.substr(1);
      if (id === '') id = 'home';
      const ele = document.getElementById(id);
      window.scroll(0, ele.offsetTop);
    }

    setInnerHeight(window.innerHeight);
    setHash(window.location.hash);

    window.addEventListener('hashchange', () => {
      setHash(window.location.hash);
      jump();
    });

    window.addEventListener('resize', () => {
      setInnerHeight(window.innerHeight);
      jump();
    });

    window.addEventListener('load', () => jump());

  }, []);

  return (
    <React.Fragment>
      {(hash !== '#home' && hash.length > 0) && <HomeButton />}
      <Home />
      <Portfolio active={hash === '#work'} innerHeight={innerHeight} />
      <Skills active={hash === '#skills'} innerHeight={innerHeight} />
      <TimeLineParalax innerHeight={innerHeight} />
      {/* <Form /> */}
    </React.Fragment>
  );
};