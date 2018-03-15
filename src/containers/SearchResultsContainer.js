import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesThunk } from '../actions';
import SearchResults from '../components/SearchResults';

class SearchResultsContainer extends Component {
  render() {  
    return (
         <SearchResults 
		   moviesList={this.props.moviesList}
		   isLoading={this.props.isLoading}
		 />
    )
 }
}

function mapStateToProps(state) {
  return {
     moviesList: state.movies.moviesList,
     isLoading: state.movies.isLoading
  }
}

export default connect(mapStateToProps, { fetchMoviesThunk })(MovieList);
