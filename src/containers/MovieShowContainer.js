import { connect } from 'react-redux';
import { fetchMovieThunk } from '../actions';
import MovieShow from '../components/MovieShow';

function mapStateToProps(state) {
  return {
	  movie: state.movies.selectedMovie,
	  isLoading: state.movies.isLoading
  }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchMovieThunk: (id) => dispatch(fetchMovieThunk(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow)
