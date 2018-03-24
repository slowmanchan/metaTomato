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
import SearchV2Container from './containers/SearchV2Container';
import MovieShowContainer from './containers/MovieShowContainer';
import AppLayout from './components/AppLayout';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer';

require('../style/style.scss')


const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <AppLayout>
          <Switch>
            <Route path='/login' component={LoginContainer} />
            <Route path='/search-results-v2' component={SearchV2Container} />
            <Route path='/sign-up' component={SignupContainer} />
            <Route path='/favorites' component={FavoritesList} />
            <Route path='/movie/:id' component={MovieShowContainer} />
            <Route path='/' component={Home} />
          </Switch>
        </AppLayout>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
