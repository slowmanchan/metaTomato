import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../actions';

class AddFavorite extends Component {
  render() {
	console.log('local storage: ', window.localStorage)
	console.log('fav', this.props.movie)
    return(
	  <button
	    onClick={() => this.props.addFavorite(this.props.movie)}
   >
      Add Fav
	  </button>
	)
  }
}

export default connect(null, { addFavorite })(AddFavorite);
