import { connect } from 'react-redux';
import { fetchMovie } from '../actions';
import MovieShow from '../components/MovieShow';

function mapStateToProps(state) {
  return {
	  movie: state.movies.selectedMovie,
	  isLoading: state.movies.isLoading,
    ratings: state.movies.ratings,
    credits: state.movies.credits
  }
}

export default connect(mapStateToProps, {fetchMovie})(MovieShow)
