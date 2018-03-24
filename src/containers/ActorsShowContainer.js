import { connect } from 'react-redux';
import { fetchActors } from '../actions';
import ActorsShow from '../components/ActorsShow';

function mapStateToProps(state) {
  return {
    actors: state.movies.actors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchActors: (id) => dispatch(fetchActors(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActorsShow)
