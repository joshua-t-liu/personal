import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import About from './About';

const StyledApp = styled.div`
  color: rgb(74,74,74);
  position: relative;
  font-family: sans-serif;
  width: 100%;
`;

interface Props {
  path: string,
}

const App: FC <Props> = ({ path }) => (
  <Router>
    <StyledApp id="application">
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
      </Switch>
    </StyledApp>
  </Router>
);

export default App;
