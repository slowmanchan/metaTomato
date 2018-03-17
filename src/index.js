import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import FavoritesList from './components/favorites-list';
import reducers from './reducers';

import Home from './components/home';
import SearchResultsContainer from './containers/SearchResultsContainer';
import MovieShowContainer from './containers/MovieShowContainer';
import AppLayout from './components/AppLayout';
import SignupForm from './containers/SignupContainer';

require('../style/style.scss')

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <AppLayout>
          <Switch>
            <Route path='/sign-up' component={SignupForm} />
            <Route path='/test' component={SearchResultsContainer} />
            <Route path='/favorites' component={FavoritesList} />
            <Route path='/search-results' component={SearchResultsContainer} />
            <Route path='/movie/:id' component={MovieShowContainer} />
            <Route path='/' component={Home} />
          </Switch>
        </AppLayout>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
