import React, { Component } from 'react';
import { connect } from 'react-redux';
import Favorites from '../components/Favorites';

class FavoritesContainer extends Component {	
	componentDidMount() {
		this.props.fetchFavoritesThunk()
	}

	render() {
	    const { favorites, isLoading } = this.props;
		return (
		  <Favorites 
		    favorites={favorites}
			isLoading={isLoading}
		  />
		)
	}
}

function mapStateToProps(state) {
	return {
		favorites: state.movies.favorites
	}
}

export default connect(mapStateToProps, { fetchFavoritesThunk })(FavoritesContainer)