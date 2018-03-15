import React from 'react';
import { Spin, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
const { Meta } from 'card';

const SearchResults = (props) => {
	const { moviesList } = this.props.moviesList;
	
	if (!moviesList || this.props.isLoading) {
				return (
				  <div style={{ marginTop: '100px', textAlign: 'center'}}>
					<Spin tip='Gimme a sec....' size='large' />
				  </div>
		)
	}
	
	const movieCards = moviesList.map((movie, idx) => {
		return (
			<Col key={uniqid()} xs={24} sm={12} md={8} lg={4}>
			  <Link to={`/movie/${movie.imdbID}`}>
				<Card
				  style={{width: '170px', margin: '20px 10px'}}
				  hoverable
				  cover={<img style={{height: '250px'}} alt="example" src={movie.Poster} />}>
				  <Meta
					title={movie.Title}
				  />
				</Card>
			  </Link>

			</Col>
		  )
    })

	return (
	  <Row>{movieCards}</Row>
	)
}

export default SearchResults;