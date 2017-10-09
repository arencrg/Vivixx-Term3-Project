import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import OppsPage from './components/OppsPage'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/opportunity/:id" component={OppsPage}/>
      <Route path="*">
        <IndexRedirect to="/" />
      </Route>
    </Router>
  )
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
