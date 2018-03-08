import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux'
import { deleteFavorite, fetchFavorites } from '../actions';
import uniqid from 'uniqid';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;


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
				<Col key={uniqid()} xs={24} sm={12} md={8} lg={4}>
					<Card
					  style={{width: '170px', margin: '20px 10px'}}
					  hoverable
					  cover={<img style={{height: '250px'}} alt="example" src={movie.Poster} />}>
					  <Meta
						title={movie.Title}
					  />
					</Card>
				</Col>
			)

	})

	return (  
				<div>
					{favoritesList}
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
