import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

class MovieShow extends Component {
	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.id)
	}
	render() {
		console.log(this.props)
		if (!this.props.movie) {
			return (
			  <div>Loading...</div>
			)
		}
		
		return (
	      <div>{this.props.movie.Title}</div>
		)		
	}
}

function mapStateToProps(state) {
	return {
	  movie: state.movie
	}
}

export default connect(mapStateToProps, { fetchMovie })(MovieShow)