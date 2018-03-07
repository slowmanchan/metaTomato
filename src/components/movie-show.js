import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie} from '../actions';
import { Link } from 'react-router-dom';
import AddFavorite from './add-favorite';
import { Row, Col, Progress } from 'antd';

import 'antd/dist/antd.css'

class MovieShow extends Component {
	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.id)
	}
	render() {
		const { movie } = this.props

		if (!movie) {
			return (
			  <div>Loading...</div>
			)
		}

		const { Ratings } = movie
		console.log(Ratings)
		const ratingList = Ratings.map((rating, index) => {
		  return (
		    <div key={index}>{rating.Source} - {rating.Value}</div>
		  )
		})

		const formattedRatings = Ratings.map((rating) => {
			if (rating.Value.length <= 3 || rating.Value === '100%') {
				return +rating.Value.replace('%', '')
			} else if (rating.Value.split('/')[1] === '100') {
				return +rating.Value.split('/')[0]
			} else if (rating.Value.split('/')[1] === '10') {
				return rating.Value.split('/')[0] * 10
			}

		})
		console.log(formattedRatings)
		return (

					<div style={{margin: '40px'}}>
						<Row>
							<Col xs={24} md={8}>
								<img style={{width: '300px'}} src={movie.Poster}/>
							</Col>
							<Col xs={24} md={16}>
								<h1 style={{fontWeight: '900'}}>{movie.Title}&nbsp;<span style={{ fontSize: 'small', fontWeight: 'normal', color: 'grey'}}>({movie.Year})</span></h1>
								<div style={{margin: '40px 0'}}>

									<Progress
										type="circle"
										percent={formattedRatings[1]}
										width={80}
									/>
									<div style={{fontStyle: 'italic',margin: '10px',width: '60px', display: 'inline-block'}}>
										Rotten Tomatoes
									</div>
									<Progress type="circle" percent={formattedRatings[2]} width={80}/>
									<div style={{fontStyle: 'italic',margin: '10px',display: 'inline-block'}}>
										MetaCritic
									</div>
									<Progress type="circle" percent={formattedRatings[0]} width={80}/>
									<div style={{fontStyle: 'italic',margin: '10px',display: 'inline-block'}}>
										IMdb
									</div>
								</div>
								<h3>Overview</h3>

								<p>{movie.Plot}</p>
							</Col>
						</Row>
					</div>

				)
	}
}

function mapStateToProps(state) {
	return {
	  movie: state.movies.selectedMovie
	}
}

export default connect(mapStateToProps, { fetchMovie })(MovieShow)
