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

import Home from './Home';
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

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    window.addEventListener('resize', () => setInnerHeight(window.innerHeight));
  }, []);
  
  return (
    <Router>
      <StyledApp id="application">
        <Switch>
          <Route exact path="/">
            <Home innerHeight={innerHeight} />
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
