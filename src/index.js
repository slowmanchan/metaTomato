import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import ReduxPromise from 'redux-promise';
import MovieList from './components/movie-list';
import MovieShow from './components/movie-show';
import FavoritesList from './components/favorites-list';
import reducers from './reducers';

require('../style/style.scss')

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
	    <Route path='/favorites' component={FavoritesList} />
	    <Route path='/movie/:id' component={MovieShow} />
        <Route path='/' component={MovieList} />
	    
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
