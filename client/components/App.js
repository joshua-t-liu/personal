import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import styled, { css, keyframes } from 'styled-components';

// const About = lazy(() => import('./About'));
// const Portfolios = lazy(() => import('./Portfolios'));
import About from './About';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

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
