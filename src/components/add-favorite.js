import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavoriteThunk } from '../actions';
import { Button, Icon, message } from 'antd';

class AddFavorite extends Component {
  render() {
    console.log('btton', this.props)
    return(
	  <Button
      loading={this.props.isButtonLoading}
	    onClick={() => {
        this.props.addFavoriteThunk(this.props.movie)
        

      }}
      icon='heart'
   >
      Add Favorite
	  </Button>

	)
  }
}

function mapStateToProps(state) {
  return {
    isButtonLoading: state.movies.isButtonLoading
  }
}

export default connect(mapStateToProps, { addFavoriteThunk })(AddFavorite);
