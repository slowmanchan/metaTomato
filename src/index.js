import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import ReduxPromise from 'redux-promise';
import FavoritesList from './components/favorites-list';
import MovieList from './components/movie-list';
import MovieShow from './components/movie-show';

import reducers from './reducers';

require('../style/style.scss')

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>

        <Route path='/movie/:id' component={MovieShow} />
        <Route path='/' component={MovieList} />
        <Route path='/favorites' component={FavoritesList} />

      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
