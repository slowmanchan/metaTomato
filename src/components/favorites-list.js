import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux'
import { deleteFavorite, fetchFavorites } from '../actions';
import { Button, ButtonGroup } from 'reactstrap';

class FavoritesList extends Component {
	componentDidMount() {
		this.props.fetchFavorites()
	}

	render() {
    console.log(this.props)

	  const { favorites } = this.props

		if (!favorites) {
			return <div>Loading...</div>
		}

	  const favoritesList = favorites.map((favorite, idx) => {
			return (

					<div>
						<img
							className='card-img-top img-fluid'
							src={favorite.Poster}
						/>
						<div className='card-block'>
							<h4 className='card-title'>{favorite.Title}</h4>
							<button
								onClick={() => this.props.deleteFavorite(favorite)}
								className='btn btn-primary btn-danger'
							>
								Delete
							</button>
						</div>
					</div>

			)

	})

	return (
	    <div >
				<div className='banner'>
					<div className='container'>
						<h2>Favorites</h2>
					</div>

				</div>
				<div>
					{favoritesList}
				</div>


			</div>
	  )
	}
}

function mapStateToProps(state) {
	return {
		favorites: state.movies.favorites
	}
}
export default connect(mapStateToProps, { deleteFavorite, fetchFavorites })(FavoritesList);
