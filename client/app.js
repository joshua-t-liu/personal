import React from 'react';
import App from './components/App';
import { StaticRouter } from 'react-router-dom';
import createReactClass from 'create-react-class';

const AppSSR = createReactClass({
  render: function() {
    return (
      <StaticRouter location={this.props.location}>
        <App />
      </StaticRouter>
    );
  }
});

export {
  AppSSR,
};