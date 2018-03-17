import React, { Component } from 'react';
import { connect } from 'react-redux';
import Favorites from '../components/Favorites';

function mapStateToProps(state) {
	return {
		favorites: state.movies.favorites
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchFavoritesThunk: () => dispatch(fetchFavoritesThunk())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)