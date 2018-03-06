import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../actions';

class AddFavorite extends Component {
  render() {
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
