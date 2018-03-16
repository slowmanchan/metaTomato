import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import MovieList from './components/movie-list';
import MovieShow from './components/movie-show';
import FavoritesList from './components/favorites-list';
import reducers from './reducers';

import SiderNav from './components/sider';
import Home from './components/home';
import SignUpPage from './components/sign-up-page';
import LoginPage from './components/login-page';

require('../style/style.scss')

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>

        <SiderNav>

          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/sign-up' component={SignUpPage} />
            <Route path='/favorites' component={FavoritesList} />
            <Route path='/search-results' component={MovieList} />
            <Route path='/movie/:id' component={MovieShow} />
            <Route path='/' component={Home} />

          </Switch>
        </SiderNav>

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
