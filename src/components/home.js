import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../actions';
import Sider from './sider';

import axios from 'axios';
import Auth from '../modules/Auth';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'

class Home extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies()
  }
  render() {
    if (this.props.upComingMovies.length == 0) {
      return <div></div>
    }

    return (
<div>Home</div>


    )
  }
}


function mapStateToProps(state) {
  return {
      upComingMovies: state.movies.upComingMoviesList,
      isLoading: state.movies.isLoading
  }
}
export default connect(mapStateToProps, { fetchUpcomingMovies })(Home)
