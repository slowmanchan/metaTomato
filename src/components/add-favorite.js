import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavoriteThunk } from '../actions';
import { Button, Icon } from 'antd';

class AddFavorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      iconLoading: false
    }
    this.enterLoading = this.enterLoading.bind(this);
    this.enterIconLoading = this.enterIconLoading.bind(this);
  }

  enterLoading() {
    this.setState( { loading: true });
  }

  enterIconLoading() {
    this.setState( { iconLoading: true });
  }

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
