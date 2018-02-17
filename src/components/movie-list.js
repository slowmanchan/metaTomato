import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import SearchBar from '../components/search-bar';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies('movie')

  }

  render() {
    const movies = this.props.movies.map((movie, idx) => {
       return (
           <img
             style={{'width': '200px', 'height': '300px'}}
             key={idx}
             id={movie.imdbID}
             src={movie.Poster}
           />
       )
    })
    console.log('Index Comp', this.props.movies)
    return (
      <div>
        <SearchBar/>
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
