import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import ReduxPromise from 'redux-promise';
import MovieList from './components/movie-list';

import reducers from './reducers';

require('../style/style.scss')

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MovieList} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
