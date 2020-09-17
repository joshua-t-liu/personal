import React from 'react';
import { StaticRouter } from 'react-router-dom';
import createReactClass from 'create-react-class';
import App from './components/App';

const AppSSR = createReactClass({
  render() {
    return (
      <StaticRouter location={this.props.location}>
        <App />
      </StaticRouter>
    );
  },
});

export {
  AppSSR,
};
