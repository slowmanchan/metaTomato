import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../actions';
import { Carousel, Item, Caption } from 'react-bootstrap'
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies()
  }
  render() {
    if (this.props.upComingMovies.length == 0) {
      return <div></div>
    }

    return (
      <div></div>

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
