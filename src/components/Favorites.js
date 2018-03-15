import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { Card, Row, Col, Spin } from 'antd';
const { Meta } = Card;

const Favorites = (props) => {
	const { favorites, isLoading } = this.props

	if (!favorites || isLoading) {
		return (
		  <div style={{ marginTop: '100px', textAlign: 'center'}}>
			<Spin tip='Gimme a sec....' size='large' />
		  </div>
		)
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
	  <Row>{favoritesList}</Row>
	)
}

export default Favorites;