import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import styled, { css, keyframes } from 'styled-components';

import NavBar from './Navigation';
// const About = lazy(() => import('./About'));
// const Portfolios = lazy(() => import('./Portfolios'));
import About from './About';
import Portfolios from './Portfolios';
import Footer from './Footer';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const App = styled.div`
  color: rgb(74,74,74);
  position: relative;
  font-family: sans-serif;
  width: 100%;
`;

export default ({ path }) => {
  const [stickyTitle, setStickyTitle] = useState(null);
  const [stickyChat, setStickyChat] = useState(null);
  const ref = useRef();
  const [height, setHeight] = useState();
  const history = useHistory();

  useEffect(() => {
    setHeight(ref.current && ref.current.offsetHeight);
  }, [ref.current]);

  return (
    <App id='application'>
      <NavBar ref={ref} {...{ stickyTitle, stickyChat }} />
      {/* <Suspense fallback={<div style={{ height: '100vh', width: '100vw' }}></div>}> */}
        <Switch>
          <Route exact path='/'>
            <About {...{ stickyTitle, setStickyTitle, stickyChat, setStickyChat }} />
          </Route>
            }
          <Route path='/portfolio'>
            <Portfolios height={height} />
          </Route>
        </Switch>
      {/* </Suspense> */}
      <Footer />
    </App>
  )
}
