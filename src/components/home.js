import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../actions';
import { Carousel, Item, Caption } from 'react-bootstrap';
import axios from 'axios';
import Auth from '../modules/Auth';

class Home extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies()
  }
  render() {
    if (this.props.upComingMovies.length == 0) {
      return <div></div>
    }

    return (
      <div>

        <button
          onClick={(e) => {
            e.preventDefault;
            axios.post('/favorites',
              {'title': 'test', 'poster': 'posted'},
              {headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `bearer ${Auth.getToken()}`
              }})
            .then((res) => {
              console.log(res.data)
            })
          }}type='submit'>go</button>
      </div>

    )
  }
}


function mapStateToProps(state) {
  return {
      upComingMovies: state.movies.upComingMoviesList,
      isLoading: state.movies.isLoading
  }
}
export default connect(mapStateToProps, { fetchUpcomingMovies })(Home)
