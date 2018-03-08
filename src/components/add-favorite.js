import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../actions';
import { Button, Icon } from 'antd';

class AddFavorite extends Component {
  render() {
    return(
	  <Button
	    onClick={() => this.props.addFavorite(this.props.movie)}
      icon='heart'
   >
      Add Favorite
	  </Button>
    
	)
  }
}

export default connect(null, { addFavorite })(AddFavorite);
