import { connect } from 'react-redux';
import { fetchMovieThunk, fetchActors } from '../actions';
import MovieShow from '../components/MovieShow';

function mapStateToProps(state) {
  return {
	  movie: state.movies.selectedMovie,
	  isLoading: state.movies.isLoading
  }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchMovieThunk: (id) => dispatch(fetchMovieThunk(id)),
    fetchActors: (id) => dispatch(fetchActors(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow)
