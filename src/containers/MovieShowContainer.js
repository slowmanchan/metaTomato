import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieThunk } from '../actions';
import MovieShow from '../components/MovieShow';

class MovieShowContainer extends Component {
	componentDidMount() {
		this.props.fetchMovieThunk(this.props.match.params.id)
	}
	
	render() {
		const { movie, isLoading } = this.props
		return (
		  <MovieShow
		    movie={movie}
		    isLoading={isLoading}
		  />
		)
	}
}

function mapStateToProps(state) {
  return {
	  movie: state.movies.selectedMovie,
	  isLoading: state.movies.isLoading
  }	
}

export default connect(mapStateToProps, { fetchMovieThunk })(MovieShowContainer)