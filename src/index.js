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

import SiderNav from './components/sider';
import Home from './components/home';

import SearchResults from './components/SearchResults';
import SearchResultsContainer from './containers/SearchResultsContainer';
import MovieShowContainer from './containers/MovieShowContainer';

require('../style/style.scss')

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>

        <SiderNav>

          <Switch>
            <Route path='/test' component={SearchResultsContainer} />

            <Route path='/favorites' component={FavoritesList} />
            <Route path='/search-results' component={SearchResultsContainer} />
            <Route path='/movie/:id' component={MovieShowContainer} />
            <Route path='/' component={Home} />

          </Switch>
        </SiderNav>

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
