import { connect } from 'react-redux';
import { fetchMoviesThunk } from '../actions';
import SearchResults from '../components/SearchResults';

function mapStateToProps(state) {
  return {
     moviesList: state.movies.moviesList,
     isLoading: state.movies.isLoading
  }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchMoviesThunk: (movie) => { dispatch(fetchMoviesThunk(movie)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
