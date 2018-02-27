import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie} from '../actions';
import { Link } from 'react-router-dom';
import AddFavorite from './add-favorite';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

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
		return (

	      <div className='container'>
		      <div className='row'>
						<Link to={'/search-results'}>
							Back
						</Link>
					</div>
					<div className='row'>

						<div className='col-xs-8'>

							<h1>{movie.Title}</h1>

							<p>{movie.Released}</p>


							<h3>Plot</h3>
							<p>{movie.Plot}</p>
							<h3>Ratings</h3>
							{ratingList}
							<h3>Box office</h3>
							<p>{movie.BoxOffice}</p>

						</div>
						<div className='col-xs-4'>
							<img
								style={{width: '300px'}}
								src={movie.Poster} />
						</div>
						<AddFavorite
							movie={this.props.movie}
						/>
					</div>
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
