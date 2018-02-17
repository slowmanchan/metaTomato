import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies('blade runner')

  }

  render() {
    const movies = this.props.movies.map((movie, idx) => {
       return (<li key={idx}>{movie.Title}</li>)
    })
    console.log(this.props.movies)
    return (
      <div>
        <ul>
          { movies }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
