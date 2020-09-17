import React, { useState, useEffect } from 'react';

import TimeLineParalax from './TimelineParallax';
import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio';
import { HomeButton } from './Buttons';

export default () => {
  const [innerHeight, setInnerHeight] = useState(100000);
  const [hash, setHash]: [string, Function] = useState('#home');

  useEffect(() => {
    const scrollTop = () => {
      let id: string = window.location.hash.substr(1);
      if (id === '') id = 'home';
      const ele: HTMLElement = document.getElementById(id);

      if (ele.scrollTo) {
        ele.scrollTo(0, 0);
      } else {
        ele.scrollTop = 0;
      }

      window.scrollTo(0, ele.offsetTop);
    };

    setInnerHeight(window.innerHeight);
    setHash(window.location.hash);

    window.addEventListener('hashchange', () => {
      setHash(window.location.hash);
      scrollTop();
    });

    window.addEventListener('resize', () => {
      setInnerHeight(window.innerHeight);
      scrollTop();
    });
  }, []);

  return (
    <React.Fragment>
      {(hash !== '#home' && hash.length > 0) && <HomeButton />}
      <Home />
      <Portfolio active={hash === '#work'} innerHeight={innerHeight} />
      <Skills active={hash === '#skills'} innerHeight={innerHeight} />
      <TimeLineParalax active={hash === '#about'} innerHeight={innerHeight} />
    </React.Fragment>
  );
};
