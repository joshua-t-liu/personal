import React, {
  useState,
  useEffect,
  FC,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import styled from 'styled-components';

import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import TimelineParalax from './TimelineParallax';

const StyledApp = styled.div`
  color: rgb(74,74,74);
  position: relative;
  font-family: sans-serif;
  width: 100%;
`;

interface Props {
  path: string,
}

const App: FC <Props> = ({ path }) => {
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
    <Router>
      <StyledApp id="application">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/work">
            <Portfolio active innerHeight={innerHeight} />
          </Route>
          <Route exact path="/skills">
            <Skills active innerHeight={innerHeight} />
          </Route>
          <Route exact path="/about">
            <TimelineParalax active innerHeight={innerHeight} />
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  )
};

export default App;
