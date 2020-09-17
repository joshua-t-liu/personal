import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
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
  <StyledApp id="application">
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
    </Switch>
  </StyledApp>
);

export default App;
