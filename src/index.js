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
import Navbar from './components/nav-bar';
import Home from './components/home';

require('../style/style.scss')
require('../style/bootstrap.scss')

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>


          <Route path='/favorites' component={FavoritesList} />
          <Route path='/search-results' component={MovieList} />
          <Route path='/movie/:id' component={MovieShow} />
          <Route path='/' component={Home} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
