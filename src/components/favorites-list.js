import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux'
import { deleteFavorite, fetchFavorites } from '../actions';
import { Button, ButtonGroup } from 'reactstrap';
import uniqid from 'uniqid';
import {  ListGroup, ListGroupItem, Media} from 'reactstrap';

class FavoritesList extends Component {

	componentDidMount() {
		this.props.fetchFavorites()
	}

	render() {

	  const { favorites } = this.props

		if (!favorites) {
			return <div>Loading...</div>
		}

	  const favoritesList = favorites.map((favorite) => {
			return (

					<span
						style={{ display: 'inline-block'}}
						key={uniqid()}>
						<img
							style={{ width: '200px'}}
							src={favorite.poster}
						/>
						<div >
							<h4 className='card-title'>{favorite.title}</h4>
							<button
								onClick={() => this.props.deleteFavorite(favorite)}
								className='btn btn-primary btn-danger'
							>
								Delete
							</button>
						</div>
					</span>

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
