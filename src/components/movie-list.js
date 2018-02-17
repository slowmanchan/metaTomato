import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies('war')

  }

  render() {
    const movies = this.props.movies.map((movie, idx) => {
       return (
           <img style={{'width': '200px', 'height': '300px'}} key={idx} src={movie.Poster}/>
       )
    })
    console.log('Index Comp', this.props.movies)
    return (
      <div>
        <h3>Search Results</h3>
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
