import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesThunk } from '../actions';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Spin } from 'antd';
import uniqid from 'uniqid';
const { Meta } = Card;

class MovieList extends Component {
  componentDidMount() {
    !this.props.moviesList ? this.props.fetchMoviesThunk('movie') : null;

  }

  render() {
    console.log(this.props)
  	const { moviesList } = this.props
  	if (!moviesList || this.props.isLoading) {
			return (
			  <div style={{ marginTop: '100px', textAlign: 'center'}}>
			    <Spin tip='Gimme a sec....' size='large' />
			  </div>
		)
	}

    const movies = moviesList.map((movie, idx) => {
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
       <div>
         <Row>{movies}</Row>
       </div>
    )
 }
}

function mapStateToProps(state) {
  return {
     moviesList: state.movies.moviesList,
     isLoading: state.movies.isLoading
  }
}

export default connect(mapStateToProps, { fetchMovies, fetchMoviesThunk })(MovieList);
