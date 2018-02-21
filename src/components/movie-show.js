import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';
import { Link } from 'react-router-dom';

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
	      <div>
		      <div className='row'>
			    <Link to={'/'}>
				Back
				</Link>
			  </div>
			  <div className='row'>
				  <div className='col-xs-4'>
				    <h1>{movie.Title}</h1>
					<img src={movie.Poster} />
					<p>{movie.Released}</p>
				  </div>
				  <div className='col-xs-8'>
				    <h3>Plot</h3>
				    <p>{movie.Plot}</p>
					<h3>Ratings</h3>
					{ratingList}
					<h3>Box office</h3>
					<p>{movie.BoxOffice}</p>
				  </div>
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