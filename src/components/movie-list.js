import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { Link } from 'react-router-dom';
import SearchBar from '../components/search-bar';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies('movie')

  }

  render() {
    const movies = this.props.movies.map((movie, idx) => {
       return (
	     <Link key={idx} to={`/movie/${movie.imdbID}`}> 
           <img
             style={{'width': '200px', 'height': '300px'}}
             id={movie.imdbID}
             src={movie.Poster}
           />
		  </Link>
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
