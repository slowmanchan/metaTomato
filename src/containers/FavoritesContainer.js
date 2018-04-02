import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites, deleteFavorite } from '../actions'
import Favorites from '../components/Favorites';

function mapStateToProps(state) {
	return {
		favorites: state.movies.favorites
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchFavorites: () => { dispatch(fetchFavorites())},
		deleteFavorite: (id) => { dispatch(deleteFavorite(id)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
