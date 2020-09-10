import React from 'react';
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';

import About from './About';

const App = styled.div`
  color: rgb(74,74,74);
  position: relative;
  font-family: sans-serif;
  width: 100%;
`;

export default ({ path }) => {

  return (
    <App id='application'>
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
        </Switch>
    </App>
  )
}
